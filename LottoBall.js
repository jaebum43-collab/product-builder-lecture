class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['number'];
    }

    attributeChangedCallback() {
        this.render();
    }

    get number() {
        return this.getAttribute('number');
    }

    get color() {
        const num = parseInt(this.number);
        if (num <= 10) return '#fbc400'; // Yellow
        if (num <= 20) return '#69c8f2'; // Blue
        if (num <= 30) return '#ff7272'; // Red
        if (num <= 40) return '#aaa';    // Gray
        return '#b0d840';                // Green
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 50%;
                    text-align: center;
                    font-weight: bold;
                    color: white;
                    background-color: ${this.color};
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    font-family: sans-serif;
                }
            </style>
            ${this.number || ''}
        `;
    }
}

customElements.define('lotto-ball', LottoBall);
