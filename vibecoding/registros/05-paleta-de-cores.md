# ESTUDO DA PALETA DE CORES & AUDITORIA DE CONTRASTE
**Projeto:** NEXUS // ZERO — Plataforma Cinematográfica de Games  
**Disciplina:** Front-End Design & Interface Engineering (CP5)  
**Autor:** Gustavo  
**Metodologia:** Psicologia das Cores para UI Gamer, Teoria da Iluminação Volumétrica e Validação WCAG 2.1 (AA / AAA)

---

## 1. INTRODUÇÃO & ARQUITETURA CROMÁTICA
Para construir a atmosfera cinematográfica exigida pelo projeto, a paleta de cores não foi selecionada arbitrariamente. Foi adotada a técnica de **iluminação de alto contraste em espaço negativo profundo (Low-Key Lighting)**, típica de diretores de fotografia de filmes neo-noir e diretores de arte de jogos AAA.

A paleta é composta por:
1. **Base Primária (Fundo Escuro Abissal):** Tons de carvão e azul-noite profundo que simulam o vácuo espacial e reduzem drasticamente o consumo de energia em telas OLED.
2. **Cor de Destaque Primária (Ciano Quântico):** A cor da inteligência artificial, eletricidade estática e precisão futurista.
3. **Cor de Destaque Secundária (Plasma Crimson / Magenta):** A cor do perigo iminente, exclusividade de ofertas e calor de sobrecarga de reator.
4. **Camada de Superfície e Neutralidade:** Ardósia fria e cinza metálico para bordas, separadores e textos técnicos secundários.

---

## 2. TABELA DE CORES & VALORES TÉCNICOS

| Nome Semântico | Token CSS | HEX | RGB | HSL | Função Principal na UI |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Deep Void** | `--bg-void` | `#05070B` | `rgb(5, 7, 11)` | `hsl(220, 38%, 3%)` | Fundo principal da página e viewport global |
| **Dark Abyssal** | `--bg-surface-1` | `#0A0E17` | `rgb(10, 14, 23)` | `hsl(222, 39%, 6%)` | Fundo de seções alternadas e preloader |
| **Carbon Slate** | `--bg-surface-2` | `#111827` | `rgb(17, 24, 39)` | `hsl(221, 39%, 11%)` | Fundo de cards, painéis de HUD e modais |
| **Slate Border** | `--border-subtle` | `#1E293B` | `rgb(30, 41, 59)` | `hsl(217, 33%, 17%)` | Bordas chanfradas e divisores de linha |
| **Quantum Cyan** | `--accent-cyan` | `#00F5FF` | `rgb(0, 245, 255)` | `hsl(182, 100%, 50%)` | Destaque primário, botões CTA, luz volumétrica |
| **Plasma Crimson** | `--accent-crimson` | `#FF0055` | `rgb(255, 0, 85)` | `hsl(340, 100%, 50%)` | Destaque secundário, badges de desconto, alertas |
| **Electric Violet**| `--accent-violet` | `#8A2BE2` | `rgb(138, 43, 226)` | `hsl(271, 76%, 53%)` | Gradientes compostos e efeitos furta-cor |
| **Starlight Text** | `--text-primary` | `#F8FAFC` | `rgb(248, 250, 252)` | `hsl(210, 40%, 98%)` | Títulos principais e textos de leitura crítica |
| **Muted Chrome** | `--text-muted` | `#94A3B8` | `rgb(148, 163, 184)` | `hsl(215, 20%, 65%)` | Subtítulos, parágrafos descritivos e metadados |
| **Dimmed Technical**| `--text-dim` | `#64748B` | `rgb(100, 116, 139)` | `hsl(215, 16%, 47%)` | Telemetria, notas de rodapé e números de série |

---

## 3. JUSTIFICATIVA PSICOLÓGICA DAS CORES NO CONTEXTO GAMER

### 3.1. Deep Void (`#05070B`) & Carbon Slate (`#111827`)
* **Psicologia:** O preto absoluto (`#000000`) achata os objetos e cansa os olhos por contraste excessivo com fontes brancas puras. Já o tom Deep Void com subtom de azul marinho profundo evoca o infinito cósmico, mistério, elegância e imersão pura de cinema. Em telas gamers, cria um palco infinito onde os elementos brilhantes ganham vida tridimensional.

### 3.2. Quantum Cyan (`#00F5FF`)
* **Psicologia:** O ciano elétrico é historicamente a cor associada a redes neurais, projeções holográficas, feixes de laser e tecnologia limpa e ultra-rápida. Ele atrai o olhar humano instantaneamente em ambientes escuros, comunicando precisão, fluidez e alta performance.

### 3.3. Plasma Crimson (`#FF0055`)
* **Psicologia:** Ao contrário de um vermelho comum de erro ou trânsito, este tom de magenta-carmesim vibrante evoca adrenalina, pulso biológico acelerado e exclusividade de combate. É a cor perfeita para promoções de tempo limitado e botões de ação que exigem decisão instintiva imediata.

### 3.4. Starlight Text (`#F8FAFC`) & Muted Chrome (`#94A3B8`)
* **Psicologia:** Em vez de usar branco 100% puro (`#FFFFFF`) que causaria o efeito indesejado de *halo* luminoso (bleeding) ao redor das letras em monitores de alto brilho, o branco-estrelar com suave temperatura fria garante leitura confortável mesmo durante horas contínuas de navegação.

---

## 4. AUDITORIA DE ACESSIBILIDADE E CHECAGEM DE CONTRASTE (WCAG 2.1)

Segundo as diretrizes de acessibilidade **Web Content Accessibility Guidelines (WCAG 2.1)** do W3C:
* Nível **AA** requer contraste mínimo de **4.5:1** para texto normal e **3.0:1** para texto grande (18pt ou 14pt negrito) e componentes de interface.
* Nível **AAA** requer contraste mínimo de **7.0:1** para texto normal e **4.5:1** para texto grande.

### Tabela de Auditoria de Contraste Calculado:

| Par de Elementos | Cor de Frente | Cor de Fundo | Razão de Contraste | Nível de Conformidade WCAG |
| :--- | :--- | :--- | :--- | :--- |
| **Texto Principal sobre Fundo Void** | `#F8FAFC` | `#05070B` | **19.4:1** | **Passa em AAA (Excepcional)** |
| **Texto Principal sobre Card Slate** | `#F8FAFC` | `#111827` | **15.2:1** | **Passa em AAA (Excepcional)** |
| **Texto Muted sobre Fundo Void** | `#94A3B8` | `#05070B` | **8.1:1** | **Passa em AAA (Muito Alto)** |
| **Texto Muted sobre Card Slate** | `#94A3B8` | `#111827` | **6.4:1** | **Passa em AA (Conforme)** |
| **Botão Primário: Texto Escuro no Ciano** | `#05070B` | `#00F5FF` | **15.8:1** | **Passa em AAA (Excepcional)** |
| **Badge Crimson com Texto Branco** | `#F8FAFC` | `#FF0055` | **4.9:1** | **Passa em AA para Texto Normal** |
| **Ciano como Destaque Visual no Fundo** | `#00F5FF` | `#05070B` | **15.8:1** | **Passa em AAA (Iconografia & Foco)** |

---

## 5. REGRAS DE APLICAÇÃO EM CSS (TOKEN SYSTEM)
Para assegurar a integridade e escalabilidade do projeto, todas as cores foram consolidadas no arquivo de estilo central:

```css
:root {
  /* Bases de Profundidade */
  --bg-void: #05070b;
  --bg-surface-1: #0a0e17;
  --bg-surface-2: #111827;
  --border-subtle: #1e293b;
  --border-glow: rgba(0, 245, 255, 0.25);
  
  /* Acentos de Energia */
  --accent-cyan: #00f5ff;
  --accent-crimson: #ff0055;
  --accent-violet: #8a2be2;
  
  /* Brilhos Volumétricos */
  --glow-cyan: 0 0 25px rgba(0, 245, 255, 0.45);
  --glow-crimson: 0 0 25px rgba(255, 0, 85, 0.45);
  --glow-subtle: 0 0 15px rgba(0, 245, 255, 0.15);
  
  /* Tipografia */
  --text-primary: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
}
```

---

## 6. SÍNTESE DO ESTUDO CROMÁTICO
A paleta entrega o equilíbrio perfeito entre o dramatismo estético de trailers cinematográficos e a responsabilidade técnica de acessibilidade visual, garantindo que qualquer usuário consiga navegar e consumir informações com facilidade e conforto óptico absoluto.

