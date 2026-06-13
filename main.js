const themeToggle = document.getElementById('theme-toggle');
const initialView = document.getElementById('initial-view');
const loadingView = document.getElementById('loading-view');
const resultView = document.getElementById('result-view');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');
const loadingText = document.getElementById('loading-text');
const resultContent = document.getElementById('result-content');
const resultScore = document.getElementById('result-score');
const userNameInput = document.getElementById('user-name');

// Policy Modals
const modal = document.getElementById('policy-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');
const privacyTrigger = document.getElementById('privacy-trigger');
const termsTrigger = document.getElementById('terms-trigger');

const policies = {
    privacy: `
        <h2>개인정보처리방침</h2>
        <p>SG Localizer Project는 사용자의 개인정보를 소중히 다룹니다.</p>
        <p>1. 수집 항목: 본 서비스는 분석을 위해 입력하신 '이름' 외에는 어떠한 정보도 수집하지 않습니다.</p>
        <p>2. 이용 목적: 입력된 이름은 분석 결과 화면에 표시하기 위한 용도로만 사용됩니다.</p>
        <p>3. 보유 및 파기: 모든 데이터는 브라우저 세션 내에서만 처리되며, 서버에 저장되지 않습니다.</p>
        <p>4. 쿠키 사용: 테마 설정(다크/라이트 모드) 및 애드센스 광고 최적화를 위해 브라우저 로컬 스토리지 및 쿠키를 사용할 수 있습니다.</p>
    `,
    terms: `
        <h2>이용약관</h2>
        <p>본 서비스를 이용함에 있어 다음 사항에 동의하게 됩니다.</p>
        <p>1. 서비스 목적: 본 서비스는 엔터테인먼트(재미)를 목적으로 제작되었으며, 분석 결과는 과학적 근거가 없습니다.</p>
        <p>2. 책임 제한: 서비스 이용으로 발생하는 심리적 타격(?)이나 결과에 대해 운영자는 책임을 지지 않습니다.</p>
        <p>3. 저작권: 본 서비스의 디자인과 로직은 SG Localizer Project에 귀속됩니다.</p>
        <p>4. 광고 게재: 본 서비스는 무료 제공을 위해 Google AdSense 광고를 포함하고 있습니다.</p>
    `
};

privacyTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    modalBody.innerHTML = policies.privacy;
    modal.classList.remove('hidden');
});

termsTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    modalBody.innerHTML = policies.terms;
    modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

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
    '싱가포르 습도 적응도 계산 중...',
    '카야 토스트 중독 증상 스캔 중...',
    '머라이언화(化) 진행 단계 분석 중...',
    '싱가포르 달러(SGD) 보유량 확인 중...',
    '한국에 있는 남친 생각하는 빈도 측정 중...'
];

startBtn.addEventListener('click', () => {
    const name = userNameInput.value.trim();

    if (!name) {
        alert('분석을 위해 이름을 입력해주세요! 🇸🇬');
        return;
    }

    initialView.classList.add('hidden');
    loadingView.classList.remove('hidden');

    let progress = 0;
    let messageIndex = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 4;
        if (progress > 100) progress = 100;

        progressBar.style.width = `${progress}%`;

        if (progress % 20 < 1.5 && messageIndex < loadingMessages.length - 1) {
            messageIndex = Math.floor(progress / 20);
            loadingText.textContent = loadingMessages[messageIndex];
        }

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => showResult(name), 600);
        }
    }, 60);
});

function showResult(name) {
    loadingView.classList.add('hidden');
    resultView.classList.remove('hidden');

    const results = [
        {
            score: 99,
            text: `심각: ${name}님에게서 머라이언 DNA가 99% 감지되었습니다. 더 늦으면 입에서 물을 뿜게 될 수도 있으니 즉시 한국행 비행기를 타야 합니다.`
        },
        {
            score: 85,
            text: `분석 결과: 싱가포르의 습도가 ${name}님의 미모를 200% 증폭시켰습니다. 너무 예뻐서 현지 공항에서 '천사'로 오해받아 출국 금지 당할 뻔했습니다.`
        },
        {
            score: 100,
            text: `주의: 몸 안에서 칠리크랩 성분이 다량 검출되었습니다. 한국 오면 남친에게 칠리크랩 맛 나는 요리를 해줘야 하는 '요리 형벌'에 처해졌습니다.`
        },
        {
            score: 10,
            text: `긴급: 남친 생각하는 빈도가 '10%'로 측정되었습니다. 아마 싱가포르 달러(SGD) 세느라 바쁜 것으로 추정됩니다. 한국 올 때 선물 많이 사오세요.`
        },
        {
            score: 999,
            text: `경고: 남친 결핍 지수가 측정 범위를 초과했습니다. 싱가포르의 모든 에어컨을 합쳐도 ${name}님의 그리움을 식힐 수 없다고 합니다.`
        }
    ];

    const result = results[Math.floor(Math.random() * results.length)];
    resultScore.innerHTML = `${result.score}<span>%</span>`;
    resultContent.innerHTML = result.text;
}

restartBtn.addEventListener('click', () => {
    resultView.classList.add('hidden');
    initialView.classList.remove('hidden');
    userNameInput.value = '';
    progressBar.style.width = '0%';
});
