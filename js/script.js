const translations = {
    en: {
        question: "Should I deploy on Friday?",
        button: "Let's find out!",
        answers: [
            "Yes, but only if you like weekend work.",
            "No, go home. It's Friday.",
            "Only if you've sacrificed a rubber duck to the code gods.",
            "Do you feel lucky, punk?",
            "It's 5 PM somewhere. But not here. So no.",
            "Error 404: Motivation not found.",
            "The magic 8-ball says: 'Ask again on Monday'.",
            "If it breaks, you get to keep both pieces.",
            "Sure, what could possibly go wrong?",
            "No. Just... no."
        ],
        footer: 'Built with <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="a-link">Gemini</a> and available on <a href="https://github.com/dwildt/friday/" target="_blank" rel="noopener noreferrer" class="a-link">GitHub</a>'
    },
    pt: {
        question: "Devo fazer deploy na sexta-feira?",
        button: "Vamos descobrir!",
        answers: [
            "Sim, mas só se você gostar de trabalhar no fim de semana.",
            "Não, vá pra casa. É sexta-feira.",
            "Só se você sacrificou um pato de borracha para os deuses do código.",
            "Você se sente com sorte, cara?",
            "São 5 da tarde em algum lugar. Mas não aqui. Então não.",
            "Erro 404: Motivação não encontrada.",
            "A bola 8 mágica diz: 'Pergunte de novo na segunda-feira'.",
            "Se quebrar, você fica com os dois pedaços.",
            "Claro, o que poderia dar errado?",
            "Não. Apenas... não."
        ],
        footer: 'Construído com <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="a-link">Gemini</a> e disponível no <a href="https://github.com/dwildt/friday/" target="_blank" rel="noopener noreferrer" class="a-link">GitHub</a>'
    },
    es: {
        question: "¿Debería desplegar en viernes?",
        button: "¡Averigüémoslo!",
        answers: [
            "Sí, pero solo si te gusta trabajar el fin de semana.",
            "No, vete a casa. Es viernes.",
            "Solo si has sacrificado un pato de goma a los dioses del código.",
            "¿Te sientes con suerte, amigo?",
            "Son las 5 de la tarde en algún lugar. Pero no aquí. Así que no.",
            "Error 404: Motivación no encontrada.",
            "La bola 8 mágica dice: 'Vuelve a preguntar el lunes'.",
            "Si se rompe, te quedas con las dos piezas.",
            "Claro, ¿qué podría salir mal?",
            "No. Simplemente... no."
        ],
        footer: 'Desarrollado con <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="a-link">Gemini</a> y disponible en <a href="https://github.com/dwildt/friday/" target="_blank" rel="noopener noreferrer" class="a-link">GitHub</a>'
    }
};

let currentLang = 'en';
let questionEl, deployButton, answerEl, langButtons;

function initApp() {
    questionEl = document.getElementById('question');
    deployButton = document.getElementById('deploy-button');
    answerEl = document.getElementById('answer');
    langButtons = {
        en: document.getElementById('lang-en'),
        pt: document.getElementById('lang-pt'),
        es: document.getElementById('lang-es')
    };

    deployButton.addEventListener('click', showRandomAnswer);

    langButtons.en.addEventListener('click', () => setLanguage('en'));
    langButtons.pt.addEventListener('click', () => setLanguage('pt'));
    langButtons.es.addEventListener('click', () => setLanguage('es'));

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            showRandomAnswer();
            event.preventDefault(); // Prevent default spacebar action (e.g., scrolling)
        }
    });

    // Set initial language on load
    setLanguage(currentLang);
    updateFridayCountdown();
}

// This check makes the script runnable in a non-browser environment like Jest
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initApp);
}

function setLanguage(lang) {
    currentLang = lang;
    if (typeof document !== 'undefined') {
        questionEl.textContent = translations[lang].question;
        deployButton.textContent = translations[lang].button;
        answerEl.textContent = '';
        const footerInfoEl = document.getElementById('footer-info');
        if (footerInfoEl) footerInfoEl.innerHTML = translations[lang].footer;

        for (const key in langButtons) {
            if(langButtons[key]) langButtons[key].classList.remove('active');
        }
        if(langButtons[lang]) langButtons[lang].classList.add('active');
        updateFridayCountdown();
    }
}

function showRandomAnswer() {
    const answers = translations[currentLang].answers;
    const randomIndex = Math.floor(Math.random() * answers.length);
    if (typeof document !== 'undefined') {
        const answerEl = document.getElementById('answer');
        answerEl.textContent = answers[randomIndex];
    }
    return answers[randomIndex];
}

function getDaysUntilFriday(today) {
    const currentDay = today.getDay(); // Sunday = 0, Friday = 5
    return (5 - currentDay + 7) % 7;
}

function updateFridayCountdown() {
    if (typeof document !== 'undefined') {
        const countdownEl = document.getElementById('friday-countdown');
        const now = new Date();
        const daysUntilFriday = getDaysUntilFriday(now);

        let message = '';
        const lang = currentLang;

        if (daysUntilFriday === 0) {
            message = {
                en: "It's Friday! Deploy with caution.",
                pt: "É sexta-feira! Deploy com cautela.",
                es: "¡Es viernes! Despliega con precaución."
            }[lang];
        } else if (daysUntilFriday === 1) {
            message = {
                en: "1 day until Friday.",
                pt: "Falta 1 dia para sexta-feira.",
                es: "Falta 1 día para el viernes."
            }[lang];
        } else {
            message = {
                en: `${daysUntilFriday} days until Friday.`,
                pt: `Faltam ${daysUntilFriday} dias para sexta-feira.`,
                es: `Faltan ${daysUntilFriday} días para el viernes.`
            }[lang];
        }
        countdownEl.textContent = message;
    }
}

// Export for testing
if (typeof module !== 'undefined') {
    module.exports = {
        translations,
        setLanguage,
        showRandomAnswer,
        getDaysUntilFriday,
        initApp
    };
}