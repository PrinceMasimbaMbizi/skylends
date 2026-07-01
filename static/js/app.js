window.addEventListener('load', () => {

    setTimeout(() => {
        document
            .getElementById('loading-screen')
            .classList.add('hidden');
    }, 2500);

});


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

document.getElementById("loanForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const purpose = document.getElementById("purpose").value;

    const amountBorrowed =
        document.getElementById("borrowedDisplay").innerText;

    const amountReturned =
        document.getElementById("returnedDisplay").innerText;

    const loanPeriod =
        document.getElementById("periodDisplay").innerText;

    const dueDate =
        document.getElementById("dueDateDisplay").innerText;

    const message = `🏦 SkyLend Loan Application

Full Name: ${name}
Phone Number: ${phone}

Amount to Borrow: ${amountBorrowed}
Amount to Return: ${amountReturned}
Loan Period: ${loanPeriod}
Due Date: ${dueDate}

Purpose:
${purpose}`;

    window.open(
        "https://wa.me/916230799202?text=" + encodeURIComponent(message),
        "_blank"
    );

});


window.onclick = function (e) {

    if (e.target == document.getElementById("loanModal")) {

        closeLoanModal();

    }

}

function openLoanForm() {

    if (document.getElementById("borrowedDisplay").innerText === "₹0.00") {
        alert("Please calculate your loan first.");
        return;
    }

    document.getElementById("loanModal").classList.add("active");

    document.getElementById("loanAmount").value =
        document.getElementById("borrowedDisplay").innerText;
}

document.querySelector(".close-modal").onclick = closeLoanForm;

window.onclick = function (e) {

    if (e.target === document.getElementById("loanModal")) {
        closeLoanForm();
    }

}

function closeLoanForm() {

    document.getElementById("loanModal").classList.remove("active");

}

window.addEventListener("popstate", function () {

    if (document.getElementById("loanFormSection").classList.contains("show")) {

        closeLoanForm();

    }

});


window.addEventListener("popstate", function () {

    if (document.getElementById("loanFormSection").classList.contains("show")) {

        closeLoanForm();

    }

});


