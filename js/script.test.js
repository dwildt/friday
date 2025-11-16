/**
 * @jest-environment jsdom
 */

const { translations, setLanguage, showRandomAnswer, getDaysUntilFriday, initApp } = require('./script');

describe('Deploy Friday App', () => {

    beforeEach(() => {
        // Set up our document body
        document.body.innerHTML = `
            <div id="friday-countdown"></div>
            <h1 id="question"></h1>
            <button id="deploy-button"></button>
            <div id="answer"></div>
            <div class="language-switcher">
                <button id="lang-en"></button>
                <button id="lang-pt"></button>
                <button id="lang-es"></button>
            </div>
        `;
        // Initialize the app
        initApp();
    });

    describe('showRandomAnswer', () => {
        it('should display a random answer for the current language', () => {
            setLanguage('en');
            const answer = showRandomAnswer();
            const answerEl = document.getElementById('answer');
            expect(translations.en.answers).toContain(answer);
            expect(answerEl.textContent).toBe(answer);
        });
    });

    describe('setLanguage', () => {
        it('should update the text content to English', () => {
            setLanguage('en');
            const questionEl = document.getElementById('question');
            const deployButton = document.getElementById('deploy-button');
            expect(questionEl.textContent).toBe(translations.en.question);
            expect(deployButton.textContent).toBe(translations.en.button);
        });

        it('should update the text content to Portuguese', () => {
            setLanguage('pt');
            const questionEl = document.getElementById('question');
            const deployButton = document.getElementById('deploy-button');
            expect(questionEl.textContent).toBe(translations.pt.question);
            expect(deployButton.textContent).toBe(translations.pt.button);
        });

        it('should update the text content to Spanish', () => {
            setLanguage('es');
            const questionEl = document.getElementById('question');
            const deployButton = document.getElementById('deploy-button');
            expect(questionEl.textContent).toBe(translations.es.question);
            expect(deployButton.textContent).toBe(translations.es.button);
        });
    });

    describe('getDaysUntilFriday', () => {
        it('should return 0 if today is Friday', () => {
            const today = new Date('2025-11-21T12:00:00'); // A Friday
            expect(getDaysUntilFriday(today)).toBe(0);
        });

        it('should return 1 if today is Thursday', () => {
            const today = new Date('2025-11-20T12:00:00'); // A Thursday
            expect(getDaysUntilFriday(today)).toBe(1);
        });

        it('should return 6 if today is Saturday', () => {
            const today = new Date('2025-11-22T12:00:00'); // A Saturday
            expect(getDaysUntilFriday(today)).toBe(6);
        });
    });
});
