let registerForm = document.getElementById("registr");
document.addEventListener("submit", (e)=>{
    e.preventDefault();
    let login = document.getElementById("login").value;
    let password = document.getElementById("passw").value;
    let confpassword = document.getElementById("confpassw").value;
    let fullname = document.getElementById("fullname").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let specialization = document.querySelectorAll('input[name="specialization"]:checked');
    let jobTitle = document.getElementById('jobTitle');
    if(!login || !password || !confpassword || !fullname || specialization.length === 0 || !gender || jobTitle.value === ''){
        alert("Вы не заполнили до конца форму");
        return;
    }
    if(password.length < 3 || password.length > 10){
        alert("Пароль должен быть от 3 до 10 символов");
        return;
    }
    if(password !== confpassword){
        alert("Пароли не совпадают");
        return;
    }

    const texts = [];
    for (const i of specialization) {
      texts.push(i.value);
    }
    const result = texts.join(', ');

    const selectedValue = jobTitle.value;
    const option = jobTitle.querySelector(`option[value="${selectedValue}"]`);

    const tableWindow = window.open('','','width=400,height=300');
    const table = `
        <table>
            <tr>
                <th>Логин</th>
                <td>${login}</td>
            </tr>
            <tr>
                <th>Полное имя</th>
                <td>${fullname}</td>
            </tr>
            <tr>
                <th>Пол</th>
                <td>${gender.value}</td>
            </tr>
            <tr>
                <th>Специализация</th>
                <td>${result}</td>
            </tr>
            <tr>
                <th>Должность</th>
                <td>${option.textContent}</td>
            </tr>
        </table>
    `;
    tableWindow.document.write(table);

    const link = tableWindow.document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style.css'; 
    tableWindow.document.head.appendChild(link);
})