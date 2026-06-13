import './LottoBall.js';

const generateBtn = document.getElementById('generate-btn');
const lottoBallsContainer = document.getElementById('lotto-balls-container');

generateBtn.addEventListener('click', () => {
    lottoBallsContainer.innerHTML = '';
    const numbers = generateLottoNumbers();
    numbers.sort((a, b) => a - b);
    numbers.forEach(number => {
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        lottoBallsContainer.appendChild(lottoBall);
    });
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers);
}