# RELATÓRIO DE PESQUISAS & BENCHMARKING DE MERCADO
**Projeto:** NEXUS // ZERO — Plataforma Cinematográfica de Games  
**Disciplina:** Front-End Design & Interface Engineering (CP5)  
**Autor:** Gustavo  
**Metodologia:** Investigação de Mercado, Análise Heurística e Seleção de Stack

---

## 1. INTRODUÇÃO & OBJETIVO DA PESQUISA
Para criar uma experiência web verdadeiramente cinematográfica e que dialogue com os padrões de produção de jogos triple-A (AAA), foi realizado um levantamento aprofundado combinando três frentes de investigação:
1. **Benchmarking de Lojas Reais e Plataformas Digitais de Jogos:** Como grandes ecossistemas vendem e apresentam experiências interativas.
2. **Estudo de Sites Cinematográficos Premiados (Awwwards / FWA / Webby Awards):** Como estúdios de vanguarda usam ritmo, tipografia, luz e movimento para gerar engajamento visceral.
3. **Tendências de UI/UX Gamer Contemporâneo:** Princípios de design diegético, microinterações táteis e feedback sensorial.
4. **Avaliação Crítica de Bibliotecas de Animação e Renderização Web:** Comparativo de desempenho entre WebGL/Three.js, Canvas 2D nativo, GSAP e CSS Transitions.

---

## 2. BENCHMARKING: PLATAFORMAS DE GAMES EXISTENTES

| Plataforma | Pontos Fortes | Pontos Fracos / Oportunidades Identificadas | O que o NEXUS // ZERO absorveu |
| :--- | :--- | :--- | :--- |
| **Steam (Valve)** | Densidade de informação colossal, sistema social robusto, confiabilidade técnica lendária. | Interface densa e funcionalista, visual datado de catálogo/banco de dados, baixa imersão estética cinematográfica. | Estrutura clara de metadados (tags de gênero, status de conectividade, selos de qualidade). |
| **Epic Games Store** | Visual minimalista, grandes banners com artes promocionais limpas, foco em títulos em destaque. | Navegação um pouco estéril, ausência de ritmo dramático nas transições, sensação de aplicativo desktop corporativo. | Uso de cartões com proporções generosas e hierarquia direta de preços e descontos. |
| **PlayStation Direct / Store** | Integração de trailers em alta definição, paleta refinada, iluminação sutil de interface. | Lentidão de carregamento em redes móveis, dependência excessiva de vídeos pesados em loop. | Estética de luz volumétrica e atmosfera de entretenimento premium. |
| **GOG.com (CD Projekt)** | Filosofia focada no jogador (DRM-Free), curadoria cuidadosa, comunidade leal. | Menor apelo sensorial nas microinterações modernas de front-end. | O conceito de biblioteca inviolável e soberania digital do usuário. |

### Conclusão do Benchmarking de Lojas:
As lojas reais priorizam a densidade de conversão transacional em detrimento da atmosfera sensorial. A oportunidade para o **NEXUS // ZERO** foi criar uma experiência que se assemelhasse mais a um **trailer jogável ou menu imersivo de uma nave estelar** do que a um e-commerce tradicional de prateleira fria.

---

## 3. ANÁLISE DE SITES CINEMATOGRÁFICOS PREMIADOS (AWWWARDS & ESTÚDIOS DE JOGOS)

Durante a fase de pesquisa, foram analisados projetos emblemáticos premiados como *Site of the Year* e *Site of the Day* no **Awwwards** e **FWA**:

### 3.1. Cyberpunk 2077 (CD Projekt Red — Campanhas Promocionais)
* **Elementos Notáveis:** Contraste extremo de amarelo e azul profundo, estética "High-tech / Low-life", ruído de TV analógica (noise) e glitches de áudio/vídeo sincronizados com o clique.
* **Aplicação no Projeto:** O overlay de ruído analógico em SVG (grain) e o efeito de decodificação aleatória nos títulos principais (*text scrambling*).

### 3.2. Kojima Productions (Death Stranding & OD Teasers)
* **Elementos Notáveis:** Tipografia brutalista monumental com letter-spacing estendido, microtextos técnicos de telemetria científica (coordenadas, códigos de erro, status de conectividade em tempo real), atmosfera clínica e enigmática.
* **Aplicação no Projeto:** O painel de telemetria no topo do Hero (*"SERVER: PROTOCOL-0 // PING: 12ms // ALL SYSTEMS NOMINAL"*), o logotipo modular e a paleta escura sem compromisso com saturação excessiva.

### 3.3. Dune: Part Two (Campanhas Interativas da Warner Bros / Resn)
* **Elementos Notáveis:** Pacing lento e deliberado, transições de tela cheia que dão a sensação de escala cósmica colossal, uso de partículas ambientais em suspensão.
* **Aplicação no Projeto:** O preloader com transição em máscara e o motor de partículas no Canvas que reage com fluidez hidrodinâmica ao cursor.

---

## 4. TENDÊNCIAS DE UI/UX GAMER APLICADAS

1. **Design Diegético e HUD (Heads-Up Display):**  
   Os componentes da interface comportam-se como se fizessem parte do universo do jogo. Bordas cortadas com chanfros de 45 graus, linhas guia de mira, indicadores de status com barras segmentadas.
2. **Microinterações com Física Elástica (Spring & Inertia):**  
   Elementos clicáveis não apenas mudam de cor; eles reagem com gravidade, puxam o cursor (efeito magnético) e inclinam-se no espaço tridimensional conforme a perspectiva do observador.
3. **Hierarquia de Luz e Iluminação Dinâmica:**  
   A interface é pensada como um palco escuro onde os únicos pontos de iluminação emanam dos próprios objetos de interesse (cards de jogos, botões de ação e partículas de energia).
4. **Dark Mode Absoluto com Profundidade em Camadas (Z-Index Lighting):**  
   Uso de tons de cinza profundos com subtom azul-escuro (`#05070B`), evitando o preto puro `#000000` absoluto para não achatar as camadas e permitir a ilusão de profundidade tridimensional.

---

## 5. SELEÇÃO DA STACK TECNOLÓGICA & JUSTIFICATIVAS TÉCNICAS

Para este projeto, a escolha de bibliotecas seguiu a premissa de **máxima performance, ausência de etapas de compilação pesadas (zero-build) e controle milimétrico sobre o ciclo de renderização**:

### 5.1. GSAP 3 (GreenSock Animation Platform) & ScrollTrigger
* **Por que foi escolhida:**  
  O GSAP continua sendo o padrão de ouro indiscutível na indústria de sites premiados para animações sequenciais complexas. Ele não sofre das limitações de encadeamento das animações CSS puras, permite desacelerar ou rebobinar timelines com precisão sub-pixel e o plugin **ScrollTrigger** oferece controle total sobre eventos de scroll (`pin`, `scrub`, `start`, `end`, `toggleActions`).
* **Alternativas consideradas:**  
  *Framer Motion* (descartado por exigir ecossistema React/Next.js) e *Anime.js* (ótima biblioteca, mas com menor controle maduro sobre pinning em scroll complexo).

### 5.2. Lenis Smooth Scroll (por Studio Freight / Darkroom)
* **Por que foi escolhida:**  
  O Lenis é atualmente a biblioteca de scroll suave mais leve, performática e moderna da web (menos de 4KB). Ao contrário de bibliotecas legadas como *SmoothScrollbar* ou *Locomotive Scroll v3* que sequestravam o DOM com wrappers e destruíam a acessibilidade nativa, o Lenis normaliza o scroll nativo mantendo o suporte a leitores de tela e permitindo sincronização perfeita com o `ticker` do GSAP.

### 5.3. Canvas 2D Nativo vs. Three.js / WebGL
* **Decisão:** Optou-se por **Canvas 2D nativo otimizado** com partículas e filamentos de luz para o fundo.
* **Justificativa Crítica:**  
  Embora o Three.js permita shaders 3D espetaculares, ele adiciona um bundle de mais de 600KB, gera consumo agressivo de VRAM em notebooks com placas integradas (Intel Iris / AMD Vega) e pode falhar em navegadores com aceleração por hardware desabilitada. O Canvas 2D puro, executado via `requestAnimationFrame` com cálculo matemático otimizado de vetor de distância, entrega 60fps cravados, pesa zero KB de dependência externa e funciona universalmente.

### 5.4. Web Audio API Sintética (Zero Arquivos Externos)
* **Decisão:** Criação de bipes e sweeps de interface via código através de osciladores de frequência.
* **Justificativa Crítica:**  
  Garante resposta instantânea a qualquer hover e clique sem depender de downloads de arquivos `.mp3` ou `.wav` que poderiam sofrer atrasos de rede ou bloqueios de CORS, além de manter o projeto 100% autocontido.

---

## 6. SÍNTESE DA INVESTIGAÇÃO
A pesquisa demonstrou que a sensação de site cinematográfico não nasce do acúmulo de elementos visuais caóticos, mas sim da **harmonia entre timing, contraste, espaço negativo e resposta tátil a cada intenção do usuário**. Essa base teórica norteou cada decisão de código implementada no NEXUS // ZERO.

