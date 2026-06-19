function calculateLoan() {

    let amount =
        parseFloat(
            document.getElementById("borrowed").value
        );

    let period =
        document.getElementById("period").value;

    if (!amount || !period) {

        alert("Please enter amount and select period");

        return;
    }

    let rate = 0;

    if (period == 14) {

        rate = 20;

    } else if (period == 30) {

        rate = 35;

    }

    let totalReturn =
        amount + (amount * rate / 100);

    let dueDate = new Date();

    dueDate.setDate(
        dueDate.getDate() + parseInt(period)
    );

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

    // PUT IT HERE ↓↓↓

    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    document.getElementById(
        "dueDateDisplay"
    ).innerText =
        dueDate.toLocaleDateString(
            'en-GB',
            options
        );

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

    const hero = document.getElementById('hero');

    if (id === 'home') {
        hero.style.display = 'flex';
    } else {
        hero.style.display = 'none';
    }

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

    const hero = document.getElementById('hero');

    if (id === 'home') {
        hero.style.display = 'flex';
    } else {
        hero.style.display = 'none';
    }

}