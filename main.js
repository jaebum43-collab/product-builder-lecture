const themeToggle = document.getElementById('theme-toggle');
const initialView = document.getElementById('initial-view');
const loadingView = document.getElementById('loading-view');
const resultView = document.getElementById('result-view');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');
const loadingText = document.getElementById('loading-text');
const resultContent = document.getElementById('result-content');
const name1Input = document.getElementById('name-1');
const name2Input = document.getElementById('name-2');

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

const loadingMessages = [
    '두 분의 소셜 데이터 분석 중...',
    '성격 유형 매칭 알고리즘 가동 중...',
    '운명적인 주파수 동기화 중...',
    '미래의 행복 지수 시뮬레이션 중...',
    '최종 결과값 렌더링 중...'
];

startBtn.addEventListener('click', () => {
    const name1 = name1Input.value.trim();
    const name2 = name2Input.value.trim();

    if (!name1 || !name2) {
        alert('두 분의 이름을 모두 입력해주세요! ❤️');
        return;
    }

    initialView.classList.add('hidden');
    loadingView.classList.remove('hidden');

    let progress = 0;
    let messageIndex = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 3;
        if (progress > 100) progress = 100;

        progressBar.style.width = `${progress}%`;

        if (progress % 20 < 1 && messageIndex < loadingMessages.length - 1) {
            messageIndex = Math.floor(progress / 20);
            loadingText.textContent = loadingMessages[messageIndex];
        }

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => showResult(name1, name2), 500);
        }
    }, 50);
});

function showResult(name1, name2) {
    loadingView.classList.add('hidden');
    resultView.classList.remove('hidden');

    const pranks = [
        `주의: ${name2}님이 너무 예뻐서 ${name1}님의 심박수가 위험 수치에 도달했습니다. 평생 옆에서 간호해줘야 합니다.`,
        `분석 불가: 두 분의 사랑이 측정 범위를 초과했습니다. 결과 대신 '평생 무료 데이트권'이 발급되었습니다.`,
        `축하합니다! 두 분은 전생에 나라를 구한 '천생연분'입니다. 단, ${name1}님은 매일 ${name2}님에게 "사랑해"라고 말해야 하는 저주에 걸렸습니다.`,
        `결과 발표: ${name2}님은 ${name1}님의 '인생 로또' 당첨 결과입니다. 잃어버리지 않게 꽉 잡으세요!`
    ];

    resultContent.innerHTML = pranks[Math.floor(Math.random() * pranks.length)];
}

restartBtn.addEventListener('click', () => {
    resultView.classList.add('hidden');
    initialView.classList.remove('hidden');
    name1Input.value = '';
    name2Input.value = '';
    progressBar.style.width = '0%';
});
