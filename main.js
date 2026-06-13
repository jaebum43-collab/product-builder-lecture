import './LottoBall.js';

const generateBtn = document.getElementById('generate-btn');
const lottoSetsContainer = document.getElementById('lotto-sets-container');
const themeToggle = document.getElementById('theme-toggle');

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

generateBtn.addEventListener('click', () => {
    lottoSetsContainer.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        const numbers = generateLottoNumbers();
        numbers.sort((a, b) => a - b);
        
        const setDiv = document.createElement('div');
        setDiv.className = 'lotto-set';
        
        numbers.forEach(number => {
            const lottoBall = document.createElement('lotto-ball');
            lottoBall.setAttribute('number', number);
            setDiv.appendChild(lottoBall);
        });
        
        lottoSetsContainer.appendChild(setDiv);
    }
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers);
}