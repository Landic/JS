let playerName = prompt('Пожалуйста, введите ваше имя:');
let questionNumberText = document.getElementById('ques_num');
let questionText = document.getElementById('ques_text');
let inputs =  document.querySelectorAll(".input");
let answers = document.querySelectorAll("label");
let submitButton = document.getElementById('submit');
let timeString = document.getElementById('time');

let time = 30;
let currentQuestion = 1;
let correctAnswers = [3, 0, 0, 3, 0, 1, 2, 1, 0, 2];
let userScore = 0;

let questions = [
    {
        question: 'Как объявить переменную в JavaScript?',
        options: [
            'var myVar;',
            'let myVar;',
            'const myVar;',
            'all of the above'
        ]
    },
    {
        question: 'Какое ключевое слово используется для определения функции в JavaScript?',
        options: [
            'function',
            'def',
            'define',
            'func'
        ]
    },
    {
        question: 'Как проверить тип данных переменной в JavaScript?',
        options: [
            'typeof',
            'typeOf',
            'datatypeOf',
            'type'
        ]
    },
    {
        question: 'Как создать массив в JavaScript?',
        options: [
            'var myArray = [];',
            'var myArray = new Array();',
            'var myArray = {};',
            'both a) and b)'
        ]
    },
    {
        question: 'Какой метод используется для добавления элемента в конец массива в JavaScript?',
        options: [
            'push()',
            'pop()',
            'add()',
            'append()'
        ]
    },
    {
        question: 'Какой символ используется для обозначения однострочного комментария в JavaScript?',
        options: [
            '/*',
            '//',
            '#',
            '--'
        ]
    },
    {
        question: 'Какой из перечисленных типов данных не существует в JavaScript?',
        options: [
            'number',
            'boolean',
            'char',
            'string'
        ]
    },
    {
        question: 'Какой метод используется для удаления последнего элемента массива в JavaScript?',
        options: [
            'deleteLast()',
            'pop()',
            'removeEnd()',
            'splice()'
        ]
    },
    {
        question: 'Какой оператор используется для объединения двух или более строк в JavaScript?',
        options: [
            '+',
            '-',
            '*',
            '/'
        ]
    },
    {
        question: 'Какой метод используется для вызова функции через определенный интервал времени в JavaScript?',
        options: [
            'callAfter()',
            'delay()',
            'setTimeout()',
            'setInterval()'
        ]
    }
];

function checkAnswer() {
    if (inputs[correctAnswers[currentQuestion]].checked) {
        userScore += 1;
        console.log('+1');
    }
}

function changeQuestion() {
    if (currentQuestion < questions.length) {
        let number = currentQuestion + 1;
        questionNumberText.textContent = number.toString();
        questionText.textContent = questions[currentQuestion].question;
        for (let i = 0; i < answers.length; i++) {
            answers[i].textContent = questions[currentQuestion].options[i];
        }
        checkAnswer();
        currentQuestion += 1;
        time = 30;
    } else {
        alert(`Поздравляю ${playerName}! Твой балл: ${userScore}`);
        submitButton.removeEventListener('click', changeQuestion);
        clearInterval(timeInterval);
    }
}

let timeInterval = setInterval(() => {
    if (time == 0) {
        changeQuestion();
    } else {
        time -= 1;
    }
    timeString.textContent = time.toString();
}, 1000);

submitButton.addEventListener('click', changeQuestion);
