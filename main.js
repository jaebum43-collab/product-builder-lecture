const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const userNameInput = document.getElementById('user-name');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const statusText = document.getElementById('status-text');
const resultText = document.getElementById('result-text');

// Theme Logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Prank Logic: Dodging Button
let dodgeCount = 0;
const MAX_DODGE = 5;

generateBtn.addEventListener('mouseover', () => {
    if (dodgeCount < MAX_DODGE) {
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 50);
        
        generateBtn.classList.add('dodge');
        generateBtn.style.left = `${x}px`;
        generateBtn.style.top = `${y}px`;
        
        dodgeCount++;
    }
});

generateBtn.addEventListener('click', () => {
    const name = userNameInput.value.trim();
    if (!name) {
        alert('분석을 위해 이름을 입력해주세요!');
        return;
    }

    // Reset UI
    generateBtn.classList.add('hidden');
    progressContainer.classList.remove('hidden');
    resultText.classList.add('hidden');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 5;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        
        if (progress < 30) statusText.textContent = '뇌 구조 스캔 중...';
        else if (progress < 60) statusText.textContent = '인성 데이터 분석 중...';
        else if (progress < 90) statusText.textContent = '관상 대조 작업 중...';
        else statusText.textContent = '최종 결과 도출 중...';

        if (progress === 100) {
            clearInterval(interval);
            showResult(name);
        }
    }, 100);
});

function showResult(name) {
    progressContainer.classList.add('hidden');
    resultText.classList.remove('hidden');
    
    const messages = [
        `분석 결과: ${name}님은...<br><br>당첨 확률 0.00000000001%입니다.`,
        `축하합니다! ${name}님은<br>평생 로또 안 사셔도 돈 아끼는 운명입니다.`,
        `${name}님, 로또 대신<br>그 돈으로 맛있는 거나 사드세요.`,
        `로또 당첨 확률보다<br>${name}님이 오늘 길 가다 벼락 맞을 확률이 더 높습니다.`
    ];
    
    resultText.innerHTML = messages[Math.floor(Math.random() * messages.length)];
}