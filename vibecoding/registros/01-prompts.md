# DIÁRIO DE PROMPTS // PROCESSO DE VIBECODING
**Projeto:** NEXUS // ZERO — Plataforma Cinematográfica de Games  
**Disciplina:** Front-End Design & Interface Engineering (CP5)  
**Autor:** Gustavo  
**Metodologia:** Vibecoding com IA (Iterações contínuas, refinamento crítico e direção de arte)

---

## INTRODUÇÃO AO PROCESSO DE VIBECODING
O objetivo deste registro é documentar a conversa real e a evolução da comunicação com o modelo de inteligência artificial durante a concepção, prototipação, estruturação e refinamento da landing page. O vibecoding não foi encarado como um simples "copiar e colar", mas como uma sessão intensiva de pair-programming onde a direção criativa, a curadoria de design e a validação técnica partiram de uma postura crítica contínua.

Abaixo estão registrados os 10 prompts principais, detalhando a solicitação feita em primeira pessoa, a resposta da IA e a minha análise crítica subsequente com as tomadas de decisão.

---

### PROMPT 01: O Ponto de Partida e Identidade Conceitual
> **Meu Prompt:**  
> "Estou iniciando um projeto acadêmico de vibecoding onde preciso criar uma landing page para uma loja de games fictícia com estética puramente cinematográfica, no estilo trailer de jogo AAA da Kojima Productions ou CD Projekt Red. Não quero que use nenhuma marca real existente (nada de PlayStation, Xbox, Steam ou Cyberpunk 2077 oficial). Quero que você crie um conceito de marca original, com um nome de forte impacto, um slogan atmosférico e a definição de pelo menos 4 a 6 jogos fictícios com premissas ricas. Me apresente o conceito criativo e a proposta de valor dessa loja antes de escrevermos qualquer linha de código."

* **O que a IA entregou:**  
  A IA sugeriu três nomes: *Vortex Games*, *Aetheris* e *NEXUS // ZERO*. Para o NEXUS // ZERO, propôs o conceito de "The Cybernetic Game Citadel" e o slogan *"Onde realidades colapsam e lendas nascem"*. Criou uma lista de 6 títulos autorais muito bem caracterizados: *Chronos: Protocol 89*, *Solaris Fall: Revenant*, *Neural Drift: 2099*, *Voidwalker: Zero Hour*, *Synthesis: Origins* e *Kinetic Shadows*.
* **Minha Avaliação e Decisão:**  
  O conceito do **NEXUS // ZERO** foi o mais forte porque evoca ao mesmo tempo um ponto de encontro tecnológico e a atmosfera de ficção científica noir contemporânea. Decidi adotar esse nome e aprofundar o slogan para algo mais visceral: *"Além da renderização: sinta o impacto de universos que ainda não deveriam existir."* Aprovei os 6 jogos fictícios porque cobrem nichos variados (roguelike temporal, horror cósmico, corrida anti-gravidade, extração tática e souls-like cibernético).

---

### PROMPT 02: Direção de Arte, Paleta e Tipografia
> **Meu Prompt:**  
> "Gostei muito da identidade do NEXUS // ZERO. Agora quero estruturar a direção de arte e os tokens visuais. Preciso de uma paleta de cores escura e densa, baseada em void/abismo, com um tom principal elétrico (neon ciano) e um secundário de alto contraste (crimson/magenta de plasma) para dar a sensação de um trailer de cinema com iluminação volumétrica. Para as fontes, quero duas famílias do Google Fonts: uma display marcante e futurista para títulos e HUD, e uma tipografia sem serifa geométrica e limpa para leitura contínua. Me traga os códigos hexadecimais, a lógica psicológica de cada tom e a escolha tipográfica justificando os pesos."

* **O que a IA entregou:**  
  Sugeriu a paleta com Fundo Carbon Void (`#05070B` e `#0A0E17`), Ciano Quântico (`#00F5FF`) e Magenta Plasma (`#FF0055`), com superfícies em ardósia metálica (`#141C2E`). Para tipografia, sugeriu `Orbitron` para os headers e badges de interface, e `Plus Jakarta Sans` para o corpo de texto e dados técnicos.
* **Minha Avaliação e Decisão:**  
  A combinação é impecável. O `Orbitron` com letter-spacing generoso e uppercase transmite precisão militar/cibernética, enquanto a `Plus Jakarta Sans` evita o cansaço visual comum em sites gamers exageradamente temáticos. Verifiquei mentalmente o contraste de texto e solicitei que todo o CSS fosse estruturado em variáveis semânticas (`--bg-void`, `--accent-cyan`, `--accent-crimson`, `--glow-cyan`, etc.) para garantir consistência.

---

### PROMPT 03: Arquitetura de Seções e Wireframe Semântico
> **Meu Prompt:**  
> "Vamos definir a estrutura semântica do HTML5 da página. Preciso de uma narrativa visual contínua que guie o usuário como se ele estivesse entrando em uma estação espacial de alta tecnologia. A estrutura precisa contemplar: 1. Preloader de boot de sistema com barra e contagem; 2. Hero em tela cheia com título colosal, telemetria de servidor e CTAs; 3. Vitrine de jogos em destaque com badges de plataforma e preços fictícios; 4. Hub de categorias/ecossistemas; 5. Oferta relâmpago com countdown timer dinâmico; 6. Diferenciais da loja em cards modulares; 7. Depoimentos da guilda/comunidade; 8. Terminal de newsletter para acesso antecipado; 9. Footer completo. Crie o esqueleto HTML estruturado com tags semânticas, atributos ARIA e marcação para bibliotecas externas (GSAP, ScrollTrigger, Lenis)."

* **O que a IA entregou:**  
  Um documento HTML5 completo, semanticamente correto (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), com os links para os CDNs do Lenis 1.0.42 e GSAP 3.12.5 + ScrollTrigger, além do container do cursor customizado e o canvas interativo no background.
* **Minha Avaliação e Decisão:**  
  A estrutura ficou sólida. No entanto, notei que faltavam botões com atributos de acessibilidade explícitos (`aria-label` nos ícones sociais e controles) e percebi a necessidade de criar capas visuais para os jogos sem usar imagens externas que pudessem quebrar ou violar direitos. Decidi que cada capa de jogo seria renderizada com arte vetorial SVG inline e gradientes complexos em CSS, gerando artes originais e 100% independentes de internet ou URLs de terceiros.

---

### PROMPT 04: Motor de Partículas e Fundo Parallax (Canvas 2D)
> **Meu Prompt:**  
> "Quero que o fundo do Hero e de toda a experiência visual não seja estático. Em vez de subir uma biblioteca 3D pesada como o Three.js, que pode derrubar o framerate em máquinas modestas, quero um canvas interativo em 2D leve e cinematográfico. Ele deve gerar uma nebulosa de nós quânticos (partículas com glow que se conectam por filamentos de luz quando próximas) e que reajam com força de repulsão orgânica à passagem do mouse. Ao clicar na tela, deve emitir uma onda de choque que empurra as partículas temporariamente. Faça isso com vanilla JavaScript, usando requestAnimationFrame otimizado."

* **O que a IA entregou:**  
  Um script com uma classe `ParticleNetwork` gerenciando um array de 60 a 90 partículas, calculando distâncias euclidianas para criar linhas translúcidas de conexão e aplicando aceleração baseada no vetor do ponteiro do mouse, com amortecimento por fricção.
* **Minha Avaliação e Decisão:**  
  O efeito visual ficou deslumbrante, mas nos testes imediatos de redimensionamento da janela percebi que o canvas não recalculava a densidade de partículas de forma responsiva, e o resize causava um leve stuttering. Solicitei uma alteração com `debounce` no listener de `resize` e redução automática de partículas em telas menores que 768px (para poupar bateria em smartphones).

---

### PROMPT 05: Scroll Suave com Lenis + GSAP ScrollTrigger
> **Meu Prompt:**  
> "Agora precisamos integrar o Lenis Smooth Scroll com o GSAP ScrollTrigger. Quero aquele scroll pesado, cinematográfico, com inércia perfeita que vemos em sites premiados no Awwwards. Porém, sei que o Lenis e o ScrollTrigger frequentemente entram em conflito de ciclo de atualização (render loop), resultando em elementos pulando ou posições desalinhadas no pin. Configure a integração exata entre o Lenis `raf` e o `ScrollTrigger.update`, com easing customizado e sincronização de ticks."

* **O que a IA entregou:**  
  O código de inicialização do Lenis com `lenis.on('scroll', ScrollTrigger.update)` e a adição da função de atualização do Lenis no `gsap.ticker.add((time) => { lenis.raf(time * 1000); })`, desligando o lagSmoothing do GSAP.
* **Minha Avaliação e Decisão:**  
  Integração técnica de nível sênior. O scroll ficou sedoso e fluido. Testei os pins de seção e o scrub das timelines e não houve nenhum salto de frame. Isso garantiu a fundação perfeita para as animações de entrada e transições de máscaras que viriam a seguir.

---

### PROMPT 06: Cursor Cibernético Magnético e Estados de Contexto
> **Meu Prompt:**  
> "Preciso de um sistema de cursor personalizado que eleve o padrão de interatividade. Quero um ponto central ágil (dot) e um anel externo com retardo elástico (follower ring) com física de interpolação (lerp). Quando o usuário passar o mouse sobre botões, o cursor deve ser atraído magneticamente em direção ao centro do botão. Quando passar sobre os cards de jogos, o anel deve se expandir e exibir o texto 'EXPLORAR' ou 'COMPRAR'. Além disso, o cursor deve ser desativado imediatamente em dispositivos touch ou quando o usuário tiver a preferência de acessibilidade prefers-reduced-motion ativada."

* **O que a IA entregou:**  
  Implementação com dois elementos DOM (`#cursor-dot` e `#cursor-ring`), cálculo de física por requestAnimationFrame via interpolação linear (`lerp(current, target, 0.15)`), listeners para `data-cursor` com classes dinâmicas e verificação com `window.matchMedia('(pointer: coarse)')`.
* **Minha Avaliação e Decisão:**  
  Funcionou bem no desktop, mas percebi um problema de usabilidade: quando o mouse saía rápido da janela do navegador, o anel ficava 'congelado' na borda da tela. Corrigi adicionando listeners para `mouseleave` e `mouseenter` no elemento `document`, alternando a opacidade para zero quando o cursor sai do viewport.

---

### PROMPT 07: Efeito 3D Tilt nos Cards com Holographic Sheen
> **Meu Prompt:**  
> "Os cards dos jogos na vitrine de lançamentos precisam parecer artefatos holográficos físicos. Desenvolva um efeito de rotação 3D interativo baseado no movimento relativo do mouse sobre cada card (tilt effect em X e Y). Além da inclinação, quero uma camada de reflexo de luz (specular sheen) que se mova dinamicamente na direção oposta ao mouse, simulando acabamento furta-cor holográfico. Quero que isso seja feito em CSS 3D (`transform-style: preserve-3d`, `perspective: 1000px`) com cálculo matemático no JS, e com transição suave ao retirar o ponteiro."

* **O que a IA entregou:**  
  Um script que calcula as coordenadas relativas do mouse em porcentagem (-0.5 a 0.5), transformando em ângulos `rotateX` e `rotateY` limitados a 12 graus, e manipulando variáveis CSS `--sheen-x` e `--sheen-y` com um gradiente radial ciano/magenta no pseudo-elemento `::before`.
* **Minha Avaliação e Decisão:**  
  O efeito é hipnótico e digno de trailers de ficção científica. Porém, reparei que no Chrome o texto dentro do card ficava discretamente embaçado durante a animação de rotação 3D. Identifiquei que isso ocorre pela falta de aceleração de rasterização da GPU e resolvi adicionando `backface-visibility: hidden; transform: translateZ(0); will-change: transform;` nos filhos do card.

---

### PROMPT 08: Textos com Glitch, Scramble Decryption e Aberração Cromática
> **Meu Prompt:**  
> "Para os títulos de seções e para a revelação do Hero, quero um efeito de decodificação de texto estilo terminal cibernético (scramble text decryption). Quando o elemento entra na tela via ScrollTrigger, os caracteres originais devem começar sendo substituídos por glifos aleatórios (como #, %, $, 0, 1, &, <, >, /) e ir se estabilizando letra por letra na palavra real. Adicione também no CSS uma animação sutil de aberração cromática (separação RGB em ciano e vermelho) com scanlines de tubo CRT nos momentos de hover nos títulos principais."

* **O que a IA entregou:**  
  Uma função modular `scrambleText(element, finalText, duration)` que itera por quadros substituindo posições por caracteres de uma string de símbolos aleatórios até travar os caracteres finais. No CSS, implementou classes `.glitch-fx` com `text-shadow` dinâmico em `2px 0 #00F5FF, -2px 0 #FF0055`.
* **Minha Avaliação e Decisão:**  
  O resultado visual foi excelente. Como o texto é renderizado semanticamente no HTML original, os leitores de tela e robôs de busca conseguem ler o texto nativo sem problemas de acessibilidade, enquanto a camada visual executa a transformação cinematográfica.

---

### PROMPT 09: Efeito de Lanterna/Spotlight de Glifos Cibernéticos Ocultos
> **Meu Prompt:**  
> "Vamos criar um quarto efeito exclusivo e muito inovador: um 'Spotlight Revelador de Segredos'. No fundo das seções, quero uma camada de máscara SVG invisível contendo padrões de circuitos e runas binárias. Conforme o usuário move o mouse, um cone de luz volumétrico deve iluminar essa camada apenas no raio em volta do cursor, como se estivéssemos explorando uma sala escura com uma lanterna tática. Fora do raio da lanterna, o fundo permanece escuro e minimalista."

* **O que a IA entregou:**  
  Uma camada overlay posicionada em `fixed` com `pointer-events: none`, contendo uma textura SVG vetorial de trilhas de placa-mãe e símbolos binários, mascarada com uma propriedade CSS `mask-image: radial-gradient(circle 280px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)`.
* **Minha Avaliação e Decisão:**  
  Este se tornou um dos efeitos mais surpreendentes de todo o projeto. Ele transforma a navegação em uma experiência de descoberta lúdica, reforçando a imersão de um jogo de ficção científica sem atrapalhar a leitura do conteúdo principal.

---

### PROMPT 10: Feedback Sonoro Sintético com Web Audio API (HUD SFX)
> **Meu Prompt:**  
> "Para fechar a imersão cinematográfica com chave de ouro, não quero carregar arquivos de áudio MP3 pesados que deixem o site lento. Desenvolva um sintetizador de som procedural ultra-leve usando a Web Audio API nativa do navegador. Ele deve ter um botão no header para o usuário ligar/desligar o áudio do HUD (por padrão mutado por respeito à UX). Quando ligado, ao passar o mouse em botões deve tocar um bipe ultracurto senoidal agudo de interface sci-fi (880Hz atenuado), e ao clicar deve emitir um tom de confirmação de baixa frequência com sweep harmônico. Tudo em menos de 40 linhas de código limpo."

* **O que a IA entregou:**  
  Uma classe `AudioHUD` criando um `AudioContext`, gerando osciladores com tipos de onda senoidais e nós de ganho com envelope `exponentialRampToValueAtTime` para criar bipes sem estalos (clicks acústicos). Adicionou o botão com ícone de áudio e status no topo da navegação.
* **Minha Avaliação e Decisão:**  
  Essa solução é elegante porque consome zero megabytes de download de mídia, responde instantaneamente sem latência de rede e dá uma sensação de console de ponta futurista. A decisão de deixar o som desligado por padrão respeita integralmente as diretrizes de acessibilidade e boas práticas da web moderna.

---

### PROMPT 11: Responsividade, Mobile UX e Fallbacks
> **Meu Prompt:**  
> "Revise todo o código para telas de smartphones e tablets. Em telas menores: 1. Esconda o cursor personalizado e reative o cursor nativo do sistema; 2. Otimize os cards da vitrine para grid responsivo com swipe ou scroll vertical suave; 3. Ajuste a tipografia para que o título do Hero não gere overflow horizontal; 4. Desative o tilt 3D pesado no mobile substituindo por elevação e glow simples no tap; 5. Garanta que o menu e a navegação funcionem fluidamente no touch. Me entregue o CSS refinado com media queries limpas e breakpoints consistentes."

* **O que a IA entregou:**  
  Media queries agrupadas para `@media (max-width: 1024px)` e `@media (max-width: 768px)`, redefinindo variáveis de tamanho de fonte fluida com `clamp()`, ajustando os grids para 1 e 2 colunas e desligando os elementos de cursor e canvas secundários.
* **Minha Avaliação e Decisão:**  
  Fiz um teste detalhado simulando resoluções de iPhone, Galaxy e iPad. A página manteve a aura cinematográfica em qualquer tamanho de tela sem nunca quebrar o layout lateral nem criar scrollbar horizontal indesejada.

---

### PROMPT 12: Polimento Final, Acessibilidade e Auditoria de Desempenho
> **Meu Prompt:**  
> "Vamos realizar o polimento final da entrega. Verifique se o código respeita rigorosamente `@media (prefers-reduced-motion: reduce)`, se todas as tags semânticas possuem contraste legível segundo as diretrizes WCAG, se não há nenhum console.log desnecessário e se todo o código em HTML, CSS e JS está fartamente comentado e pronto para ser executado diretamente no navegador dando duplo clique no index.html sem precisar de build ou terminal."

* **O que a IA entregou:**  
  Adição da diretiva de redução de movimento que zera durações de transição, congela o canvas e exibe o conteúdo de forma estática imediata para usuários sensíveis a movimento; adição de anéis de foco visíveis (`:focus-visible`) para navegação por teclado e comentários didáticos explicando cada módulo da arquitetura.
* **Minha Avaliação e Decisão:**  
  O projeto alcançou a maturidade de um trabalho profissional de estúdio. A experiência de vibecoding foi essencial para acelerar a prototipagem, enquanto meu papel como desenvolvedor e diretor de arte foi fundamental para orientar a coerência estética, auditar a performance e garantir uma experiência técnica sem falhas.

