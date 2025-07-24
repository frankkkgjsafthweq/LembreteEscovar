// Variáveis para controle
let isBrushed = false;
let timer;
let countdownTime = 2 * 60; // 2 minutos
let history = []; // Histórico de escovações
const statusText = document.getElementById('status');
const timerDisplay = document.getElementById('timer-display');
const startTimerButton = document.getElementById('start-timer');
const morningReminderButton = document.getElementById('morning-reminder');
const nightReminderButton = document.getElementById('night-reminder');
const escovacaoHistory = document.getElementById('escovacao-history');
const confettiContainer = document.getElementById('confetti');

// Função para iniciar o cronômetro de escovação
function startTimer() {
    let timeLeft = countdownTime;
    startTimerButton.disabled = true;
    startTimerButton.innerText = "Escovação em andamento...";

    timer = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            showConfetti();
            alert("Tempo de escovação terminou! Parabéns!");
            markAsBrushed();
        }
    }, 1000);
}

// Função para gerar confetes
function showConfetti() {
    confettiContainer.style.display = "block"; // Exibir a div de confetes
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw'; // Posição aleatória na tela
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's'; // Duração aleatória da animação
        confetti.style.animationDelay = Math.random() * 2 + 's'; // Atraso aleatório para animação
        confettiContainer.appendChild(confetti);
    }
}

// Função para marcar como escovado e atualizar status
function markAsBrushed() {
    isBrushed = true;
    statusText.innerText = "Escovou os dentes!";
    statusText.style.color = "#2ecc71";
    history.push(new Date().toLocaleString());
    updateHistory();
    startTimerButton.disabled = false;
    startTimerButton.innerText = "Iniciar Escovação";
}

// Função para exibir o histórico de escovações
function updateHistory() {
    escovacaoHistory.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `Escovação registrada: ${item}`;
        escovacaoHistory.appendChild(li);
    });
}

// Função para lembrete de manhã
morningReminderButton.addEventListener('click', function() {
    alert("Lembrete: Hora de escovar os dentes pela manhã!");
});

// Função para lembrete à noite
nightReminderButton.addEventListener('click', function() {
    alert("Lembrete: Hora de escovar os dentes antes de dormir!");
});

// Função para ativar o cronômetro ao clicar
startTimerButton.addEventListener('click', function() {
    if (!isBrushed) {
        startTimer();
    } else {
        alert("Você já escovou os dentes hoje!");
    }
});

// Atualiza o status inicial
statusText.innerText = "Ainda não escovou os dentes hoje.";
statusText.style.color = "#e74c3c";
