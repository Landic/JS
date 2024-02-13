function Task1() {
    let questions = {'Столица Украины Одесса': 'нет','Столица Польши Варшава': 'да','5 + 5 = 10': 'да','Пицца итальянское блюдо': 'да','7+7=14': 'да','15+15=31': 'нет','(2+2)*2=8': 'да' }
    let answers = []
    let result = 0;
    alert('Ответы только Да или Нет')
    for (j in questions) {
        while (true) {
            let answer = prompt(j)
            try{
                answer = answer.toLowerCase()
                if (answer == '') {
                    throw "Ошибка";
                }
                answers.push(answer)
                break;
            }
            catch {
                alert('Ответы только Да или Нет')
            }
        }
    }
    let i = 0;
    for (j in questions) {
        if (questions[j] == answers[i]) {
            result++;
        }
        i++;
    }

    alert(`Ваш результат: ${result/7*100}%`)
}


function Task2() {
    let ban = "!,«#$%&'(^)*+-./:;`<=>?@[\\]_{|}~.0123456789"
    name_ = prompt('Введите ваше имя')
    for (b of ban) 
    {
        for (n of name_) 
        {
            if (b == n) 
            {
                alert('Некоректные символы')
                break;
            }
        }
    }
}


function Task3() {
    let url;
    let stratifiedURL;
    while (true) 
    {
        url = prompt('Введите URL:');
        try {
            stratifiedURL = new URL(url);
            break;
        }
        catch {
            alert('Введите заново')
        }
    }
    const prot= stratifiedURL.protocol;
    const host = stratifiedURL.host;
    const path = stratifiedURL.pathname;
    const file = path.split('/').pop();
    const queryString = stratifiedURL.search;
    alert(`Протокол: ${prot}
Хост: ${host}
Путь: ${path}
Имя файла: ${file}
Строка запроса: ${queryString}`)
}

function Task4() {
    const grid = document.createElement('div');
    grid.style.margin = 'auto';
    grid.style.display = 'grid';
    grid.style.gridTemplateRows = 'repeat(8, 1fr)';
    grid.style.gridTemplateColumns = 'repeat(8, 1fr)';
    grid.style.height = "250px";
    grid.style.width = "250px";
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const block = document.createElement('div');
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    block.style.backgroundColor = "darkred";
                }
                else {
                    block.style.backgroundColor = "yellow";
                }
            }
            else {
                if (j % 2 === 1) {
                    block.style.backgroundColor = "darkred";
                }
                else {
                    block.style.backgroundColor = "yellow";
                }
            }
            grid.appendChild(block);
        }
    }
    document.body.appendChild(grid);
}