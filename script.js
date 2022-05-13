const schueler = {
    name: "Meide",
    firstname: "Dennis",
    personalText: "Das hier ist dennis. Er kann nicht Programmieren",
    qoute: "Liegt Deutschland nicht in Berlin?"
};

const display =`
    <div class="student">
        <p class="name">${schueler.name}, ${schueler.firstname}</p>
        <p>${schueler.personalText}</p>
        <p>${schueler.qoute}</p>
    </div>
`;

document.getElementsByClassName("students").innerHTML= display;
document.body.innerHTML = display;