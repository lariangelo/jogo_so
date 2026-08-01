const scenes = [
  {
    title: "Fase 1 — Sistema Operacional",
    text: `
      <p>Mimi aparece em um laboratório cheio de cabos e telas piscando. Ela olha ao redor com os olhinhos brilhando de curiosidade.</p>
      <p><b>Mimi:</b> "Uau! Tantos botões e luzes... mas o que será que faz tudo isso funcionar? Acho que é hora de entender o que é um Sistema Operacional!"</p>
    `
  },
  {
    title: "Fase 2 — Memória Secundária",
    text: `
      <p>Mimi entra em uma sala cheia de gavetas e cofres brilhantes. Ela pega um dos discos e balança o rabinho animada.</p>
      <p><b>Mimi:</b> "Então é aqui que os dados ficam? Que lugar mais interessante!"</p>
    `
  },
  {
    title: "Fase 3 — BIOS",
    text: `
      <p>No porão do laboratório, Mimi encontra um velho chip dourado que brilha fraquinho.</p>
      <p><b>Mimi:</b> "Você acorda o computador todo dia? Que trabalho importante, Sr. BIOS!"</p>
    `
  },
  {
    title: "Fase 4 — Processador",
    text: `
      <p>Mimi observa uma placa cheia de circuitos. Ela vê algo no centro, brilhando forte.</p>
      <p><b>Mimi:</b> "Então você é o cérebro do computador! Uau... será que pensa mais rápido do que eu?"</p>
    `
  },
  {
    title: "Fase 5 — Memória RAM",
    text: `
      <p>Mimi chega a uma sala com várias portas abrindo e fechando super rápido.</p>
      <p><b>Mimi:</b> "Essa deve ser a memória RAM! Tudo aqui acontece tão depressa que até fico tonta!"</p>
    `
  },
  {
    title: "Fase 6 — Particionamento de Memória",
    text: `
      <p>Mimi entra em uma espécie de depósito dividido em várias áreas.</p>
      <p><b>Mimi:</b> "Hmm... parece que cada pedacinho da memória tem seu próprio espaço. Isso deve ajudar a organizar tudo direitinho!"</p>
    `
  }
];


const questions = [
  // Fase 1 
  [
    {
      question:
        "O Sistema Operacional é o cérebro-chefe que mantém tudo funcionando. As suas duas funções principais são...",
      options: [
        "Servir como máquina virtual e gerenciar recursos",
        "Realizar operações matemáticas e armazenar dados",
        "Controlar o computador e seus braços robóticos",
        "Rodar jogos de tabuleiro e vídeos online",
      ],
      answer: 0,
    },
    {
      question:
        "Mesmo quando o computador está desligado, seu Sistema Operacional permanece armazenado no/a...",
      options: ["ROM", "SSD/HD", "Pendrive", "Placa-mãe"],
      answer: 1,
    },
    {
      question: "Um processo, no contexto de SO, pode ser definido como...",
      options: [
        "Atividades realizadas por IA",
        "Instâncias de programas em execução",
        "Ações legais contra algo/alguém",
        "Arquivos gerados pelo SO",
      ],
      answer: 1,
    },
    {
      question:
        "Uma das atividades que acontecem imediatamente após o computador ser ligado é o...",
      options: ["POST", "BUST", "DUST", "START"],
      answer: 0,
    },
    {
      question:
        "O responsável por realizar algumas atividades imediatamente após o computador ser ligado é...",
      options: ["RAM", "BIOS", "ROM", "HD"],
      answer: 1,
    },
  ],
  // Fase 2 
  [
    {
      question:
        " O SO e os programas de usuário ficam armazenados na memória secundária. Mas por que não na RAM, que parece bem mais rápida?",
      options: [
        "Porque a RAM só guarda dados temporariamente",
        "Porque a secundária deixa o PC mais rápido",
        "Porque a secundária guarda dados permanentemente",
        "Porque é mais barata",
      ],
      answer: 2,
    },
    {
      question: "O escalonamento de processos é...",
      options: [
        "a alocação dos programas na memória",
        "o SO e os programas de usuário são escalonados para usar o processador ",
        "o SO e os programas de usuário são escalonados para usar a internet",
        "o adiantamento dos programas de usuário no SO",
      ],
      answer: 1,
    },
    {
      question:
        'O sistema que realiza múltiplas tarefas "ao mesmo tempo" é chamado de...',
      options: [
        "Monoprogramado",
        "Multi-tarefas",
        "Esperto",
        "Multiprogramado",
      ],
      answer: 3,
    },
    {
      question:
        '"Verificar o setup, fazer o POST, descompactar dados, ler dispositivos de armazenamento e carregar o SO" são atividades realizadas...',
      options: [
        "Após o computador ser comprado",
        "Após o computador ser desligado",
        "Após o computador ser ligado",
        "Após o computador ser quebrado",
      ],
      answer: 2,
    },
    {
      question: "Antes de encerrar a sua execução, o BIOS...",
      options: [
        "Salva todos os dados do usuário e faz o POST",
        "Realiza o carregamento do SO a partir do HD ou do SSD",
        "Lê todos os dados de arquivos",
        "Escalona os próximos processos e salva os dados",
      ],
      answer: 1,
    },
  ],
  // Fase 3 
  [
    {
      question: "A memória RAM...",
      options: [
        "Salva os dados do usuário permanentemente",
        "Recebe os programas em execução",
        "Processa os vídeos do YouTube em 4K",
        "É a memória dos anfíbios",
      ],
      answer: 1,
    },
    {
      question:
        "Para organizar os dados armazenados na memória utiliza-se o...",
      options: [
        "Escalonamento",
        "Encaixamento",
        "Particionamento",
        "Acomodamento",
      ],
      answer: 2,
    },
    {
      question: "Processos diferentes possuem...",
      options: [
        "Mesmo tamanho de memória",
        "Tamanhos diferentes",
        "Prioridade igual",
        "Acesso fixo",
      ],
      answer: 1,
    },
    {
      question: "O particionamento pode ser lógico fixo, ou seja,...",
      options: [
        "Ocorre no fim das atividades do usuário",
        "Ocorre no fim das atividades do SO",
        "Ocorre no ínicio das atividades do SO",
        "Ocorre durante as atividades do SO",
      ],
      answer: 2,
    },
    {
      question: "O particionamento pode ser lógico variável, ou seja,...",
      options: [
        "Ocorre no ínicio das atividades do usuário",
        "Ocorre no fim das atividades do SO",
        "Ocorre no ínicio das atividades do SO",
        "Ocorre durante as atividades do SO",
      ],
      answer: 3,
    },
  ],
  // Fase 4 ---- 2026 ----
  [
    {
      question:
        "O sistema de arquivos de um certo SO armazena as informações em arquivos; organiza cada arquivo de maneira que sejam compostos por um ou mais blocos; armazena o endereço do primeiro bloco do arquivo; armazena os blocos em sequência; encontra o endereço de cada bloco a partir do endereço do primeiro. Qual a estratégia de alocação utilizada?",
      options: [
        "Alocação Encadeada",
        "Alocação Contígua",
        "Alocação em Linha",
        "Alocação em Tabela",
      ],
      answer: 1,
    },
    {
      question:
        "O sistema de arquivos de um certo SO armazena as informações em arquivos; organiza cada arquivo de maneira que sejam compostos por um ou mais blocos; encontra o endereço de cada bloco a partir do endereço registrado em uma ou mais tabelas, que podem ser organizadas por níveis. Qual o método de armazenamento utilizado?",
      options: [
        "Alocação Encadeada",
        "Alocação Contígua",
        "Alocação em Linha",
        "Nó-i",
      ],
      answer: 3,
    },
  ],
  // Fase 5 
  [
    {
      question: "O contexto de um processo é o conjunto armazenado que diz respeito a algum processo. O contexto é armazenado na ... e é organizado em uma ...",
      options: [
        "Memória secundária, árvore binária",
        "Memória RAM, árvore binária",
        "Pasta 'documentos', tabela do excel",
        "Memória RAM, tabela de processos",
      ],
      answer: 3,
    },
    {
      question: "A memória RAM...",
      options: [
        "Salva os dados do usuário permanentemente",
        "Recebe os programas em execução",
        "Processa os vídeos do YouTube em 4K",
        "É a memória dos anfíbios",
      ],
      answer: 1,
    },
    {
      question: "Os processos conseguem voltar a serem executados após o seu quantum expirar pois o processador faz...",
      options: [
        "A leitura dos dados de um arquivo",
        "Um processo mágico",
        "O salvamento e a recuperação do contexto",
        "O salvamento e a salvação do contexto",
      ],
      answer: 2,
    },
    {
      question: "Quando um processo de usuário toma conta de um recurso e não o libera, dizemos que ocorreu um...",
      options: [
        "Ditadura Militar",
        "Monopólio",
        "Barramento",
        "Falta",
      ],
      answer: 1,
    },
    {
      question: "Os processos concorrem aos mesmos recursos do computador, para não ocasionar conflitos é utilizado...",
      options: [
        "Uma fila",
        "Mecanismo de sincronização (mutex)",
        "Fechaduras e chaves",
        "Portão elétrico",
      ],
      answer: 1,
    },
  ],
  // Fase 6
  [
    {
      question: "O conjunto de informações que são armazenados nos registradores a cada instante, como um 'snapshot' é chamado de...",
      options: [
        "Informações",
        "Coteúdo",
        "Termo",
        "Contexto",
      ],
      answer: 3,
    },
    {
      question:
        "O sistema de arquivos de um certo SO armazena as informações em arquivos; organiza cada arquivo de maneira que sejam compostos por um ou mais blocos; armazena o endereço de todos os blocos (o 1° armazena o do 2° e assim por diante); encontra o endereço de cada bloco a partir do endereço armazenado no bloco anterior. Qual a estratégia de alocação utilizada?",
      options: [
        "Alocação Encadeada",
        "Alocação Contígua",
        "Alocação em Linha",
        "Alocação em Tabela",
      ],
      answer: 0,
    },
  ],
];

const pieces = [
  {
    name: "Biscoito Amarelo",
    desc: "Mimi tenta comer, e o Whiskas se duplica em dezenas. Bug delicioso detectado.",
  },
  {
    name: "Biscoito Vermelho",
    desc: "Picante. Literalmente.",
  },
  {
    name: "Biscoito Azul",
    desc: "Mimi tentou comer... mas descobriu que era um chip sabor peixe.",
  },
  {
    name: "Biscoito Rosa",
    desc: "Cheira bem! Mimi deu uma mordida e agora tudo tem glitter.",
  },
  {
    name: "Biscoito Roxo",
    desc: "Mimi deu uma mordida e sentiu gosto de disquete antigo",
  },
  {
    name: "Biscoito Dourado",
    desc: "Tem gosto de vitória (e de atum importado). Mimi aprova com nota 10.",
  },
];

let currentPhase = 0;
let currentQuestion = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const piecesContainer = document.getElementById("pieces");
const endScreen = document.getElementById("end-screen");
const restartBtn = document.getElementById("restart-btn");

const progressWrapper = document.getElementById("progress-wrapper");
const phaseIndicator = document.getElementById("phase-indicator");
const progressBar = document.getElementById("progress-bar");
const restartGameBtn = document.getElementById("restart-game-btn");

if (restartGameBtn) {
  restartGameBtn.addEventListener("click", () => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  });
}




function mostrarCenario() {
  const scene = scenes[currentPhase];
  
  if (progressWrapper) progressWrapper.classList.add("hidden");

  questionContainer.innerHTML = `
    <div class="scene">
      <h2>${scene.title}</h2>
      ${scene.text}
      <button id="start-phase-btn">Começar fase</button>
    </div>
  `;

  document.getElementById("start-phase-btn").addEventListener("click", () => {
    if (progressWrapper) progressWrapper.classList.remove("hidden");
    showQuestion();
  });
}

function showQuestion() {
  const q = questions[currentPhase][currentQuestion];
  
  const totalPhases = questions.length;
  if (phaseIndicator) phaseIndicator.innerText = `Fase ${currentPhase + 1} / ${totalPhases}`;
  
  const totalQuestions = questions[currentPhase].length;
  const progressPercent = (currentQuestion / totalQuestions) * 100;
  if (progressBar) progressBar.style.width = `${progressPercent}%`;

  questionContainer.innerHTML = `
        <h1>${q.question}</h1>
        ${q.options
      .map(
        (opt, i) =>
          `<div class="option" onclick="checkAnswer(${i}, this)">${opt}</div>`
      )
      .join("")}
    `;
}

function checkAnswer(selected, element) {
  const q = questions[currentPhase][currentQuestion];
  if (selected === q.answer) {
    soltaconfete();
    currentQuestion++;

    if (currentQuestion < questions[currentPhase].length) {
      questionContainer.innerHTML = "<p>Correto!</p>";
      setTimeout(showQuestion, 1000);
    } else {
      if (progressBar) progressBar.style.width = '100%';
      unlockPiece();
    }
  } else {
    if (element) {
      element.classList.add("shake-error");
      setTimeout(() => {
        element.classList.remove("shake-error");
      }, 400);
    }
    mostrarMiauMensagem("Hmm... Acho que essa não é a resposta certa!");
  }
}

function mostrarMiauMensagem(texto) {
  const miau = document.getElementById("miauMascote");
  const mensagem = document.getElementById("miauMensagem");

  mensagem.textContent = texto;

  miau.classList.remove("hidden");
  mensagem.classList.remove("hidden");

  // anima
  setTimeout(() => {
    miau.classList.add("show");
    mensagem.classList.add("show");
  }, 100);

  // some depois de alguns segundos
  setTimeout(() => {
    miau.classList.remove("show");
    mensagem.classList.remove("show");
    setTimeout(() => {
      miau.classList.add("hidden");
      mensagem.classList.add("hidden");
    }, 500);
  }, 4000);
}

function unlockPiece() {
  if (progressWrapper) progressWrapper.classList.add("hidden");

  const piece = pieces[currentPhase];
  const pieceDiv = document.createElement("div");
  pieceDiv.classList.add("piece");
  pieceDiv.classList.add("bounce-item");

  // 👇 Só imagem, sem texto
  pieceDiv.innerHTML = `<img src="imagens/${piece.name}.png" alt="${piece.name}" class="piece-img">`;

  piecesContainer.appendChild(pieceDiv);

  questionContainer.innerHTML = `
    <div class="unlock-container">
        <img src="imagens/${piece.name}.png" class="piece-img" alt="${piece.name}">
        <p>Você ganhou: <strong>${piece.name}</strong></p>
        <p>${piece.desc}</p>
    </div>
  `;

  soltaconfete();
  mostrarMiauMensagem(`Yeppi! Você desbloqueou um ${piece.name}!`);

  const pecas = JSON.parse(localStorage.getItem("peças")) || [];
  if (!pecas.includes(piece.name)) {
    pecas.push(piece.name);
    localStorage.setItem("peças", JSON.stringify(pecas));
    console.log("Peça salva:", piece.name);
  }

  nextBtn.classList.remove("hidden");
}


nextBtn.addEventListener("click", () => {
  currentPhase++;
  currentQuestion = 0;

  if (currentPhase < questions.length) {
    nextBtn.classList.add("hidden");
    mostrarCenario();
  } else {
    mostrarTelaFinal();
  }
});

function mostrarTelaFinal() {
  const game = document.getElementById("game");
  const cpu = document.getElementById("cpu-container");
  const endScreen = document.getElementById("end-screen");

  game.classList.add("hidden");
  cpu.classList.add("hidden");
  endScreen.classList.remove("hidden");

  soltaconfete();
  setTimeout(() => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "ending.html";
    }, 800);
  }, 2000);
}



function soltaconfete() {
  confetti({
    particleCount: 500,
    spread: 200,
    origin: { y: 0.6 },
  });
}

window.onload = () => {
  mostrarCenario();
};
