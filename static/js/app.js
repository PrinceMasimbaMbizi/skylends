window.addEventListener('load', () => {

    setTimeout(() => {
        document
            .getElementById('loading-screen')
            .classList.add('hidden');
    }, 2500);

});

function showSection(id) {

    document.querySelectorAll('.page-section')
        .forEach(section => {
            section.classList.remove('active');
        });

    document.getElementById(id)
        .classList.add('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}

function showLogin() {

    const loginForm =
        document.getElementById("loginForm");

    const registerForm =
        document.getElementById("registerForm");

    loginForm.style.display = "block";
    registerForm.style.display = "none";

}

function showRegister() {

    const loginForm =
        document.getElementById("loginForm");

    const registerForm =
        document.getElementById("registerForm");

    loginForm.style.display = "none";
    registerForm.style.display = "block";

}

function showSection(id) {

    document
        .querySelectorAll('.page-section')
        .forEach(section => {
            section.classList.remove('active');
        });

    document
        .getElementById(id)
        .classList.add('active');

    document
        .querySelectorAll('nav ul li')
        .forEach(item => {
            item.classList.remove('active-nav');
        });

    event.target.classList.add('active-nav');

    const hero = document.getElementById('hero');

    if (id === 'home') {
        hero.style.display = 'flex';
    } else {
        hero.style.display = 'none';
    }

}

function calculateLoan() {

    const amount =
        parseFloat(
            document.getElementById("borrowed").value
        );

    const period =
        document.getElementById("period").value;

    if (!amount || !period) {

        alert("Enter amount and select period");

        return;
    }

    let interestRate = 0;

    if (period == "14") {

        interestRate = 20;

    } else if (period == "30") {

        interestRate = 35;

    }

    const totalReturn =
        amount + (amount * interestRate / 100);

    const dueDate = new Date();

    dueDate.setDate(
        dueDate.getDate() + parseInt(period)
    );

    const day =
        dueDate.getDate();

    const month =
        dueDate.toLocaleString(
            'en-GB',
            { month: 'long' }
        );

    const year =
        dueDate.getFullYear();

    document.getElementById(
        "borrowedDisplay"
    ).innerText =
        "₹" + amount.toFixed(2);

    document.getElementById(
        "returnedDisplay"
    ).innerText =
        "₹" + totalReturn.toFixed(2);

    document.getElementById(
        "periodDisplay"
    ).innerText =
        period == 14
            ? "2 Weeks"
            : "1 Month";

    document.getElementById(
        "dueDateDisplay"
    ).innerText =
        `${day} ${month} ${year}`;
}