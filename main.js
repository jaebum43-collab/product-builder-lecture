const themeToggle = document.getElementById('theme-toggle');
const initialView = document.getElementById('initial-view');
const loadingView = document.getElementById('loading-view');
const resultView = document.getElementById('result-view');
const openGiftBtn = document.getElementById('open-gift-btn');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');
const loadingText = document.getElementById('loading-text');
const resultIcon = document.getElementById('result-icon');
const resultDescription = document.getElementById('result-description');

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

const gifts = [
    {
        icon: '💌',
        text: '엄마 심부름 10회 이용권!<br>(유효기간: 평생)'
    },
    {
        icon: '🧼',
        text: '설거지 1주일 면제권!<br>제가 다 할게요~'
    },
    {
        icon: '🤗',
        text: '무제한 뽀뽀 & 포옹권!<br>사랑해요 엄마!'
    },
    {
        icon: '🧹',
        text: '방 청소 깔끔하게 하기 쿠폰!<br>잔소리 금지 1회 포함'
    },
    {
        icon: '🍱',
        text: '엄마를 위한 특별 요리 대접!<br>(맛은 보장 못함 주의)'
    }
];

const loadingMessages = [
    '백화점에서 가장 비싼 걸로 고르는 중...',
    '엄마의 취향을 분석 중...',
    '금고에서 선물을 꺼내오는 중...',
    '정성스럽게 포장하는 중...',
    '거의 다 준비됐어요!'
];

openGiftBtn.addEventListener('click', startOpening);
restartBtn.addEventListener('click', startOpening);

function startOpening() {
    initialView.classList.add('hidden');
    resultView.classList.add('hidden');
    loadingView.classList.remove('hidden');
    
    let progress = 0;
    let messageIndex = 0;
    
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        
        if (progress % 20 === 0 && messageIndex < loadingMessages.length - 1) {
            messageIndex++;
            loadingText.textContent = loadingMessages[messageIndex];
        }

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(showResult, 500);
        }
    }, 40);
}

function showResult() {
    loadingView.classList.add('hidden');
    resultView.classList.remove('hidden');
    
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    resultIcon.textContent = randomGift.icon;
    resultDescription.innerHTML = randomGift.icon === '💌' ? randomGift.text : randomGift.text;
    
    // Simple pulse effect on result
    resultView.style.animation = 'none';
    resultView.offsetHeight; // trigger reflow
    resultView.style.animation = 'fadeIn 0.5s ease-out';
}
