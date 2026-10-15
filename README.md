# FRONT-END PARADIGMS // CP5

Repositório prático comparando três abordagens de desenvolvimento front-end para landing pages: framework baseado em componentes (**Bootstrap 5**), estilização atômica (**Tailwind CSS**) e desenvolvimento assistido por IA com foco cinematográfico (**Vibecoding**).

---

## 📂 ESTRUTURA DO PROJETO

```text
├── .vscode/          # Configuração do Live Server (porta 5501)
├── Bootstrap/        # Classic Cars (Bootstrap 5.3)
├── Tailwind/         # KicksLab (Tailwind CSS via CDN)
├── vibecoding/       # NEXUS // ZERO (Vanilla JS, GSAP, Canvas, Web Audio)
│   ├── css/          # Estilos e design system cibernético
│   ├── js/           # Animações, física de partículas e áudio sintetizado
│   ├── assets/       # Recursos visuais
│   └── registros/    # Documentação da atividade de vibecoding (01 a 06)
└── README.md
```

---

## 🚀 PROJETOS

### 1. `/Bootstrap` — Classic Cars (Loja de Carros)
* **Stack:** HTML5, Bootstrap 5.3.8 (CSS + JS via CDN).
* **Foco:** Produtividade com componentes pré-construídos e grid de 12 colunas.
* **Componentes:**
  * Navbar responsiva com menu colapsável.
  * Hero section em duas colunas.
  * Carrossel de depoimentos (`carousel-dark`).
  * FAQ interativo com accordion.
  * Modal de pedido/test-drive com seleção de itens.

### 2. `/Tailwind` — KicksLab (Loja de Sneakers)
* **Stack:** HTML5, Tailwind CSS (Runtime CDN).
* **Foco:** Estilização utility-first direta no markup, sem classes customizadas.
* **Destaques:**
  * Header com efeito glassmorphism (`backdrop-blur-md`).
  * Paleta de alto contraste (roxo escuro, rosa choque e lime neon).
  * Seção hero com amostras táteis de materiais.
  * Grid de 4 colunas com divisores visuais para as etapas de manufatura.

### 3. `/vibecoding` — NEXUS // ZERO (Loja Cinematográfica de Games)
* **Stack:** HTML5, CSS3 puro, Vanilla JS, GSAP 3.12, ScrollTrigger, Lenis Scroll.
* **Conceito:** Loja fictícia com atmosfera de trailer de jogo AAA, estética sci-fi e alta densidade de animações.
* **Efeitos Únicos:**
  * **Nebulosa no Canvas 2D:** Partículas com repulsão física do mouse e onda de choque ao clique.
  * **Spotlight Mask:** Lanterna dinâmica que revela circuitos e runas ocultas no fundo.
  * **3D Tilt & Sheen:** Inclinação tridimensional com reflexo holográfico que acompanha o cursor.
  * **Text Scramble:** Decodificação de caracteres aleatórios nos títulos ao rolar a página.
  * **Web Audio API:** Sintetizador procedural em tempo real (bipes e hums de HUD sem arquivos externos).
  * **Film Grain & Scanlines:** Overlay de ruído analógico em SVG com vinheta volumétrica.
  * **Cursor Magnético:** Ponto central e anel seguidor com atração a botões e rótulos dinâmicos.
  * **Acessibilidade:** Desativação automática em telas touch e suporte a `prefers-reduced-motion`.

---

## 📝 REGISTROS DA ATIVIDADE DE VIBECODING (`/vibecoding/registros`)

Documentação obrigatória do processo de cocriação com IA:

| Arquivo | Conteúdo Principal |
| :--- | :--- |
| [`01-prompts.md`](vibecoding/registros/01-prompts.md) | 12 prompts em 1ª pessoa com solicitação, entrega da IA e avaliação crítica do aluno. |
| [`02-pesquisas.md`](vibecoding/registros/02-pesquisas.md) | Benchmarking de lojas reais (Steam, Epic, GOG) e justificativa da stack de animação. |
| [`03-decisoes-de-design.md`](vibecoding/registros/03-decisoes-de-design.md) | Justificativa de nome, tipografia (`Orbitron` + `Plus Jakarta Sans`) e lore dos 6 jogos. |
| [`04-referencias-visuais.md`](vibecoding/registros/04-referencias-visuais.md) | Moodboard textual (*Blade Runner 2049*, *Death Stranding*, *Cyberpunk 2077*, Awwwards). |
| [`05-paleta-de-cores.md`](vibecoding/registros/05-paleta-de-cores.md) | Códigos HEX/HSL, psicologia de cores e tabela de contraste WCAG 2.1 (AA e AAA). |
| [`06-correcoes-e-iteracoes.md`](vibecoding/registros/06-correcoes-e-iteracoes.md) | 5 bugs reais resolvidos (Lenis vs GSAP, cursor mobile, 3D blur) e lições de prompt. |

---

## ⚡ COMO EXECUTAR

Nenhum projeto requer compilação ou instalação de dependências (zero-build):

1. **Direto:** Dê duplo clique no `index.html` da pasta desejada.
2. **Live Server (VS Code):** Abra a pasta no VS Code, clique com o botão direito no `index.html` e selecione *Open with Live Server* (porta padrão: `5501`).

---

## 📊 COMPARATIVO RÁPIDO

| Recurso | Bootstrap | Tailwind | Vibecoding |
| :--- | :--- | :--- | :--- |
| **Abordagem** | Componentes prontos | Classes utilitárias | Vanilla + Creative Tech |
| **Complexidade Visual** | Padrão corporativo | Dinâmica e moderna | Cinematográfica imersiva |
| **Animações** | Transições CSS nativas | Transições utilitárias | GSAP + ScrollTrigger + Canvas |
| **Build / Setup** | Zero (CDN) | Zero (CDN) | Zero (CDN) |
