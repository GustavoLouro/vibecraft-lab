# MOODBOARD & PAINEL DE REFERÊNCIAS VISUAIS
**Projeto:** NEXUS // ZERO — Plataforma Cinematográfica de Games  
**Disciplina:** Front-End Design & Interface Engineering (CP5)  
**Autor:** Gustavo  
**Metodologia:** Curadoria de Repertório Visual, Análise de Atmosferas e Moodboard Textual

---

## 1. CONCEITO GERAL DO MOODBOARD
O moodboard do **NEXUS // ZERO** foi construído na interseção entre o **Cinema de Ficção Científica Neoclássico**, a **Estética Cyberpunk High-End** e o **Design Editorial Interativo Contemporâneo**. 

O objetivo não era reproduzir um visual caótico e poluído de feira tecnológica dos anos 90, mas sim evocar uma atmosfera imersiva, misteriosa e elegante — algo que pudesse existir dentro do painel de controle holográfico de uma nave estelar ou na sala de briefing de uma corporação clandestina de tecnologia quântica.

---

## 2. PILARES DE REFERÊNCIAS CINEMATOGRÁFICAS

### 2.1. Blade Runner 2049 (Direção: Denis Villeneuve / Fotografia: Roger Deakins)
* **Atmosfera Visual:** Névoa volumétrica espessa cortada por feixes de luz neon monocromáticos pontuais; paleta de escuridão profunda contra ciano atmosférico e laranjas/magentas de sinalização.
* **O que aproveitei para o projeto:**  
  A sensação de iluminação volumétrica e o efeito de vinheta nas bordas da tela. O fundo não é uma cor sólida estática, mas uma névoa escura com iluminação indireta sutil emanando das laterais, criando profundidade tridimensional.

### 2.2. Tron: Legacy (Direção: Joseph Kosinski / Design: GMUNK)
* **Atmosfera Visual:** Linhas de luz vetorizadas puras em fundos de carbono espelhado; HUDs translúcidos de altíssima precisão matemática; elegância simétrica com toques de cor neon de choque elétrico.
* **O que aproveitei para o projeto:**  
  Os anéis e marcadores do cursor customizado, as linhas de conexão entre partículas no canvas interativo e os chanfros geométricos poligonais nos botões e painéis de telemetria.

### 2.3. Ghost in the Shell (1995 e 2017)
* **Atmosfera Visual:** Tipografia com números verdes e ciano correndo rapidamente; sensação de decodificação de cabos de fibra ótica; sobreposição de dados digitais por cima da arquitetura física.
* **O que aproveitei para o projeto:**  
  O efeito de decodificação criptográfica nos títulos de seção (*text scramble decryption*), onde as letras passam por um turbilhão de glifos cibernéticos antes de se consolidarem na palavra final.

---

## 3. REFERÊNCIAS DO UNIVERSO DOS JOGOS ELETRÔNICOS

### 3.1. Cyberpunk 2077 & Phantom Liberty (CD Projekt Red)
* **Atmosfera Visual:** Aberrações cromáticas periféricas, scanlines sutis de monitor de tubo, interface com quebras intencionais e ruído térmico.
* **O que aproveitei para o projeto:**  
  A textura de película de filme (film grain) gerada via filtro procedural SVG em CSS e os estados de hover dos títulos com sutil desvio cromático em ciano e vermelho.

### 3.2. Death Stranding & MGSV (Hideo Kojima)
* **Atmosfera Visual:** Minimalismo militar técnico, tipografias condensadas com tracking generoso, marcações de coordenadas geográficas e status de integridade de sinal.
* **O que aproveitei para o projeto:**  
  O painel de status do sistema no cabeçalho (*"SYSTEM: ONLINE // 99.98% QUANTUM INTEGRITY"*), a ausência de ornamentos infantis e a seriedade madura no design dos cards de produto.

### 3.3. Armored Core VI: Fires of Rubicon (FromSoftware)
* **Atmosfera Visual:** Maquinário pesado futurista, avisos de perigo com faixas anguladas, contraste brutal entre metal fosco desgastado e luz de plasma de propulsão.
* **O que aproveitei para o projeto:**  
  A seção de "Oferta em Destaque" com contador regressivo, que utiliza faixas diagonais de advertência e bordas iluminadas simulando um reator de plasma em sobrecarga.

---

## 4. REFERÊNCIAS DO DESIGN WEB PREMIADO (AWWWARDS & FWA)

### 4.1. The Line Animation Studio & Active Theory Showcase
* **Abordagem de Interação:** O cursor não é apenas uma seta passiva; ele é um radar ou holofote que expande, atrai e reage ativamente à proximidade de elementos clicáveis.
* **O que aproveitei para o projeto:**  
  O cursor magnético dot-and-ring com inércia (lerp) e a expansão contextual para os rótulos de interação como *"EXPLORAR"*, *"ADQUIRIR"* e *"AMPLIAR"*.

### 4.2. Studio Freight / Basement Studio Websites
* **Abordagem de Interação:** Scroll com inércia suave impecável, sensação de peso analógico nas transições de página, tipografias monumentais de largura variável.
* **O que aproveitei para o projeto:**  
  A integração precisa entre Lenis Scroll e GSAP ScrollTrigger, permitindo que a rolagem da página pareça a rotação de uma câmera de cinema em dolly suave sobre trilhos mecânicos.

---

## 5. MAPA DE SENSAÇÕES (TEXTUAL MOODBOARD TABLE)

| Eixo Sensorial | Sensação Desejada | Implementação no Código |
| :--- | :--- | :--- |
| **Visão: Luz** | Neon penetrante rasgando a escuridão absoluta do espaço | Variáveis `--glow-cyan`, `--accent-cyan` e `--accent-crimson` aplicadas em `box-shadow` e `text-shadow`. |
| **Visão: Textura** | Película de cinema analógico misturada com sensor digital de alta definição | Overlay SVG com filtro `feTurbulence` estático e opacidade de 3.5%. |
| **Visão: Movimento** | Fluidez orgânica de física quântica e inércia cinematográfica | Canvas com 80 nós interconectados reagindo à repulsão do mouse e Lenis Scroll. |
| **Audição: Feedback** | Resposta tátil futurista sem poluição sonora | Web Audio API gerando bipes senoidais ultracurtos (880Hz / 440Hz com envelope exponencial). |
| **Tato Virtual** | Sensação de manipular artefatos tridimensionais pesados | Efeito 3D Tilt com rotação em perspectiva e reflexo furta-cor dinâmico no ponteiro. |

---

## 6. SÍNTESE DO REPERTÓRIO
A convergência dessas referências permitiu fugir de clichês visuais genéricos de "loja gamer RGB barata", construindo uma identidade que transmite exclusividade, prestígio técnico e a mais pura emoção cinematográfica.

