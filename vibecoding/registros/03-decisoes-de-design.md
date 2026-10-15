# MEMORIAL DESCRITIVO DE DECISÕES DE DESIGN (IDV & UI)
**Projeto:** NEXUS // ZERO — Plataforma Cinematográfica de Games  
**Disciplina:** Front-End Design & Interface Engineering (CP5)  
**Autor:** Gustavo  
**Metodologia:** Tomada de Decisão em Identidade Visual (IDV), Teoria do Design e Arquitetura de Interface

---

## 1. O CONCEITO E NARRATIVA DA MARCA
A identidade visual do **NEXUS // ZERO** foi construída a partir de uma narrativa de ficção científica pós-corporativa e neo-brutalista. A marca não se posiciona como um mero varejista de arquivos digitais, mas como um **santuário quântico (The Cybernetic Citadel)** para títulos de vanguarda que desafiam os limites da renderização gráfica e da complexidade narrativa.

* **O Nome "NEXUS // ZERO":**  
  * *NEXUS:* O ponto focal onde diferentes linhas temporais, servidores e realidades paralelas convergem. Representa a comunidade de jogadores e o ecossistema integrado.  
  * *ZERO:* O ponto de partida fundamental, a origem binária, o vazio cósmico imaculado antes da criação de um universo virtual. A barra dupla (`//`) funciona como separador estilístico típico de sintaxes de programação e comandos de terminal.
* **O Slogan:**  
  *"Além da renderização: sinta o impacto de universos que ainda não deveriam existir."*  
  O slogan apela diretamente para a ambição do público gamer de alta fidelidade que busca não apenas jogos casuais, mas obras de arte interativas com impacto emocional e sensorial profundo.

---

## 2. DECISÕES TIPOGRÁFICAS (SISTEMA DE HIERARQUIA)

A tipografia é a espinha dorsal de qualquer site cinematográfico. Para o NEXUS // ZERO, foram escolhidas duas famílias tipográficas do Google Fonts com funções complementares bem demarcadas:

### 2.1. Tipografia Display & Títulos: `Orbitron`
* **Classificação:** Sans-serif geométrica / display futurista com proporções quadradas e cortes angulares.
* **Justificativa de Uso:**  
  O `Orbitron` comunica imediatamente alta tecnologia, arquitetura de hardware militar e estética de ficção científica cinemática. Suas letras em caixa-alta (uppercase) com espaçamento entre letras estendido (`letter-spacing: 0.15em` a `0.25em`) criam um impacto visual que lembra os cartazes de filmes épicos de ficção científica (como *Interstellar* e *Blade Runner*).
* **Pesos Utilizados:** 700 (Bold) e 900 (Black) nos títulos principais; 600 (Semi-bold) em rótulos de HUD e números de destaque.

### 2.2. Tipografia de Texto Corrido & Metadados: `Plus Jakarta Sans`
* **Classificação:** Neo-grotesca geométrica contemporânea de altíssima legibilidade.
* **Justificativa de Uso:**  
  Usar fontes excessivamente estilizadas no corpo de texto gera fadiga ocular imediata e compromete a usabilidade. A `Plus Jakarta Sans` oferece formas limpas, altura de x (x-height) generosa e curvas equilibradas que se mantêm nítidas mesmo em tamanhos pequenos (`12px` a `15px`) sobre fundos escuros de alto contraste.
* **Pesos Utilizados:** 400 (Regular), 500 (Medium) e 600 (Semi-bold).

```css
/* Definição de Escala Tipográfica Fluida */
:root {
  --font-display: 'Orbitron', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.85rem);
  --text-sm: clamp(0.85rem, 0.8rem + 0.3vw, 0.95rem);
  --text-base: clamp(1rem, 0.95rem + 0.35vw, 1.125rem);
  --text-lg: clamp(1.25rem, 1.15rem + 0.5vw, 1.45rem);
  --text-xl: clamp(1.6rem, 1.4rem + 1vw, 2.1rem);
  --text-2xl: clamp(2.2rem, 1.8rem + 2vw, 3.2rem);
  --text-hero: clamp(2.8rem, 2.2rem + 4.5vw, 5.5rem);
}
```

---

## 3. ARQUITETURA DE LAYOUT & GRID DESIGN

Para fugir da sensação monótona de "grade de e-commerce genérica", o layout foi construído combinando:

1. **Grid Assimétrico com Ritmo Cinematográfico:**  
   Em vez de apenas colunas simétricas idênticas, o site intercala seções de largura total (Full Viewport Hero), blocos com cartões assimétricos de pesos visuais distintos e faixas com elementos flutuantes.
2. **Espaçamento e Respiração Negativa (Negative Space):**  
   Uso de paddings verticais generosos (`clamp(80px, 10vh, 160px)`) entre as seções, permitindo que cada momento da página seja absorvido pelo usuário como um ato de um trailer de cinema, sem poluição visual sufocante.
3. **Bordas Chanfradas e Geometria Cyberpunk (Clip-Path Angulado):**  
   Botões de ação principal, badges de alerta e cantos de cards utilizam cortes chanfrados de 45 graus gerados via CSS `clip-path: polygon(...)`, reforçando a assinatura tátil de painéis aeroespaciais.

---

## 4. DESIGN DOS JOGOS AUTORAIS (FICTIONAL LORE)

Para evitar qualquer violação de direitos autorais e enriquecer a autenticidade do projeto acadêmico, foram concebidos 6 jogos fictícios com identidade própria e capas ilustradas via código:

1. **CHRONOS: PROTOCOL 89:**  
   *Gênero:* Temporal Tactical Roguelike.  
   *Identidade:* Estética de fita VHS militar, cronômetros digitais, luz ciano sobre ruído analógico.  
   *Preço:* R$ 249,00 (Edição Padrão).
2. **SOLARIS FALL: REVENANT:**  
   *Gênero:* Cosmic Dark Fantasy RPG.  
   *Identidade:* Ruínas estelares, eclipses de matéria escura, gradientes púrpuras e dourados sinistros.  
   *Preço:* R$ 299,00.
3. **NEURAL DRIFT: 2099:**  
   *Gênero:* High-Velocity Anti-Grav Racing.  
   *Identidade:* Traços de velocidade ciano e magenta neon, grid de horizonte synthwave desconstruído.  
   *Preço:* R$ 189,00.
4. **VOIDWALKER: ZERO HOUR:**  
   *Gênero:* Extraction Stealth Shooter.  
   *Identidade:* Máscaras de gás táticas, miras holográficas, verde radar e cinza chumbo.  
   *Preço:* R$ 219,00.
5. **SYNTHESIS: ORIGINS:**  
   *Gênero:* Bio-Mechanical Metroidvania.  
   *Identidade:* Circuitos orgânicos fundidos com placas metálicas, iluminação verde esmeralda e ciano.  
   *Preço:* R$ 159,00.
6. **KINETIC SHADOWS:**  
   *Gênero:* Mecha Cyber Souls-like.  
   *Identidade:* Silhuetas colossais contra névoa densa, faíscas de plasma e vermelho de sobrecarga.  
   *Preço:* R$ 279,00.

---

## 5. SELEÇÃO E EQUILÍBRIO DE EFEITOS CINEMATOGRÁFICOS

O desafio central da direção de arte foi **dosar a quantidade de efeitos para encantar sem cansar**:

* **Efeito 1 — Fundo de Partículas Hidrodinâmicas no Canvas:** Mantido em tons suaves e translúcidos para servir de textura viva sem competir com a legibilidade das manchetes.
* **Efeito 2 — Lanterna Reveladora de Glifos (Spotlight):** Aplicado como um segredo tátil que recompensa a curiosidade do usuário enquanto ele move o mouse.
* **Efeito 3 — 3D Tilt e Sheen Furta-Cor nos Cards:** Proporciona a satisfação tátil de segurar uma caixa de edição de colecionador física.
* **Efeito 4 — Scramble Text nos Títulos:** Dá vida a cada nova seção revelada no scroll com o drama de um sistema de computador de bordo sendo descriptografado.
* **Efeito 5 — Film Grain & Vignette:** Une visualmente todos os componentes em uma única película cinematográfica coesa.

---

## 6. SÍNTESE DO DESIGN
O design do NEXUS // ZERO foi planejado para colocar o usuário no centro de uma experiência interativa de altíssimo padrão técnico e estético, onde cada detalhe — do chanfro do botão ao menor brilho que segue o mouse — foi concebido deliberadamente com propósito artístico.

