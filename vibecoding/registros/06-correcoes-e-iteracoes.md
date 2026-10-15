# RELATÓRIO DE CORREÇÕES, ITERAÇÕES & APRENDIZADOS DE VIBECODING
**Projeto:** NEXUS // ZERO — Plataforma Cinematográfica de Games  
**Disciplina:** Front-End Design & Interface Engineering (CP5)  
**Autor:** Gustavo  
**Metodologia:** Depuração Crítica, Engenharia de Prompt e Refatoração Iterativa

---

## 1. INTRODUÇÃO
O desenvolvimento através de *vibecoding* é um processo dinâmico. A inteligência artificial é capaz de gerar estruturas e ideias com velocidade espantosa, mas o código inicial quase sempre carrega arestas técnicas, descompassos de sincronização entre bibliotecas e detalhes de usabilidade que exigem o olhar atento do desenvolvedor front-end.

Este documento registra os principais problemas encontrados ao longo da criação do **NEXUS // ZERO**, a forma como cada um foi diagnosticado no navegador, a estratégia de correção adotada e as conclusões práticas sobre como escrever prompts mais eficientes.

---

## 2. MATRIZ DE PROBLEMAS IDENTIFICADOS E CORREÇÕES

### PROBLEMA 1: Conflito de Render Loop entre Lenis Scroll e GSAP ScrollTrigger
* **O que aconteceu:**  
  Nas primeiras versões geradas pela IA, ao rolar a página rapidamente, elementos animados com `ScrollTrigger.create({ pin: true })` davam pequenos "saltos" visuais (jitter/stuttering) e ficavam desalinhados em relação à posição real do mouse.
* **Como identifiquei:**  
  Ao inspecionar o comportamento com a ferramenta *Performance* do Chrome DevTools, notei que o `ScrollTrigger` e o `Lenis` estavam rodando em ciclos de animação independentes (`window.addEventListener('scroll')` vs `requestAnimationFrame`), gerando uma corrida de atualização (race condition) de scroll.
* **Como corrigi:**  
  Reestruturei o bootstrap de inicialização no JavaScript para forçar o GSAP e o Lenis a compartilharem exatamente o mesmo relógio (ticker):
  ```javascript
  // Desliga o lagSmoothing do GSAP para evitar atrasos artificiais
  gsap.ticker.lagSmoothing(0);

  // Conecta o evento de scroll do Lenis ao ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Delega o ciclo de raf do Lenis diretamente para o ticker do GSAP
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  ```
  Isso eliminou 100% dos saltos de quadros, deixando o scroll com fluidez perfeita de 60/120fps.

---

### PROBLEMA 2: Cursor Customizado Travando na Borda e Quebrando no Mobile
* **O que aconteceu:**  
  O cursor customizado criado inicialmente continuava ativo em telas sensíveis ao toque (gerando um elemento estranho preso no topo da tela do celular). Além disso, no desktop, quando o usuário movia o mouse rapidamente para fora da janela do navegador, o círculo seguidor ficava permanentemente travado na borda.
* **Como identifiquei:**  
  Testando a página no modo de emulação de dispositivos móveis do DevTools (iPad e iPhone) e realizando movimentos bruscos com o mouse no monitor ultrawide.
* **Como corrigi:**  
  1. No CSS e no JS, implementei verificação rigorosa de dispositivo de apontamento: se `window.matchMedia('(pointer: coarse)')` for verdadeiro, o cursor customizado recebe `display: none !important;` e o cursor nativo é restaurado.
  2. No desktop, adicionei listeners nos eventos `document.addEventListener('mouseleave')` e `mouseenter` para alternar a opacidade do cursor com transição suave, ocultando-o no instante em que ele sai da área útil do navegador.

---

### PROBLEMA 3: Embaçamento de Texto no Efeito 3D Tilt dos Cards (Chromium Bug)
* **O que aconteceu:**  
  Quando o efeito de inclinação 3D (`perspective: 1000px; transform: rotateX(...) rotateY(...)`) era acionado pelo mouse nos cards de jogos, as fontes dos títulos e preços sofriam uma visível perda de nitidez (blur sub-pixel) no Google Chrome e Edge.
* **Como identifiquei:**  
  Comparando visualmente o texto em repouso estático versus o texto em pleno movimento de hover com zoom de 200%. As letras perdiam a anti-aliasing nítida e pareciam borradas.
* **Como corrigi:**  
  Esse é um comportamento clássico de camadas 3D no motor Blink. Resolvi aplicando propriedades específicas de aceleração por hardware e isolamento de contexto de renderização:
  ```css
  .game-card {
    transform-style: preserve-3d;
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  .game-card * {
    transform: translateZ(0); /* Força rasterização independente de textura */
  }
  ```
  O texto voltou a ficar cirurgicamente nítido durante toda a rotação.

---

### PROBLEMA 4: Sobrecarga de CPU no Canvas de Partículas ao Redimensionar a Janela
* **O que aconteceu:**  
  O script original do Canvas gerava novas instâncias de partículas em cada disparo do evento `resize` da janela. Quando o usuário redimensionava a janela do navegador arrastando a borda, o uso da CPU disparava para mais de 80%, causando travamentos momentâneos.
* **Como identifiquei:**  
  Monitorando o painel de uso de memória e CPU com o *Performance Monitor* do navegador durante testes de responsividade.
* **Como corrigi:**  
  Implementei uma função utilitária de `debounce` para que o recálculo dimensional do Canvas e o reposicionamento dos nós só ocorram após 150ms do término do redimensionamento, além de limitar a quantidade máxima de nós para 50 em telas compactas e 80 em telas grandes.

---

### PROBLEMA 5: Conflito de Legibilidade entre o Fundo Animado e Textos Finos
* **O que aconteceu:**  
  Em certas seções, conforme as partículas de luz do Canvas passavam exatamente por trás de parágrafos secundários com fonte clara, as letras menores perdiam contrastemomentâneo.
* **Como identifiquei:**  
  Navegação prolongada com leitura atenta dos depoimentos e diferenciais da loja.
* **Como corrigi:**  
  1. Apliquei um efeito sutil de `backdrop-filter: blur(12px)` e background semi-translúcido (`background: rgba(17, 24, 39, 0.75)`) nas caixas de conteúdo dos cards.
  2. Ajustei a intensidade alfa das partículas do Canvas para um máximo de `0.35`, garantindo que elas sirvam puramente de ambiência atmosférica, e nunca de distração visual para o conteúdo principal.

---

## 3. O QUE APRENDI SOBRE ESCREVER PROMPTS MELHORES (ENGENHARIA DE PROMPT)

A realização deste projeto consolidou aprendizados valiosos sobre a comunicação com ferramentas de inteligência artificial generativa no desenvolvimento front-end:

1. **Evite Prompts Genéricos ("Faça um site bonito e moderno"):**  
   Termos vagos geram código mediano, genérico e sem alma. Quando substitui por parâmetros cirúrgicos ("paleta dark void `#05070B`, acento ciano elétrico `#00F5FF`, tipografia Orbitron e Plus Jakarta Sans, animações via GSAP ScrollTrigger e Lenis"), o modelo entrega código com nível de sênior.
2. **Forneça Contexto Arquitetural e Limitações:**  
   Informar à IA que o projeto é *zero-build* (rodando nativamente no navegador via CDNs sem Webpack ou Vite) economizou horas evitando que a IA tentasse importar módulos com sintaxes de Node/React incompatíveis.
3. **Iteração Modular em Vez de Pedidos Monolíticos:**  
   Pedir a página inteira de uma só vez resulta em códigos superficiais ou incompletos. A melhor estratégia foi solicitar componente por componente (Preloader -> Hero com Canvas -> Cards 3D -> Seção de Oferta com Timer -> Áudio HUD), testando e refinando cada bloco antes de avançar para o próximo.
4. **Instrua a IA com o "Porquê" e não Apenas o "O Quê":**  
   Ao explicar a intenção de design (ex: *"quero passar a sensação de estar dentro de uma nave militar com HUD sci-fi"*), a IA sugere microdetalhes enriquecedores que eu não havia previsto, como os marcadores de coordenadas e as scanlines de tubo.
5. **Revisão Crítica é Inegociável:**  
   A IA frequentemente ignora casos extremos de acessibilidade (`prefers-reduced-motion`, contraste em estados de foco de teclado, comportamentos em telas touch). Cabe ao desenvolvedor auditar cada linha, testar em múltiplos dispositivos e polir a experiência final.

---

## 4. CONCLUSÃO
O *vibecoding* não substitui o repertório do desenvolvedor; ele o **amplifica exponencialmente**. A capacidade de direcionar artisticamente a IA, combinada com a fundamentação técnica para corrigir os desvios de rota, foi a chave para alcançar o padrão cinematográfico e profissional do **NEXUS // ZERO**.

