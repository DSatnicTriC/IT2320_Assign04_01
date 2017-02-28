var MovieStar = function (age, gender, lastName) {
    this.Age = age;
    this.Gender = gender;
    this.LastName = lastName;
    this.IsCrazy = undefined;
};

MovieStar.prototype.SettleCrazinessUsingSecretFormula = function () {
    this.IsCrazy = true;
}

var loonies = {};

loonies.star1 = new MovieStar(51, "Male", "Cruise");
loonies.star2 = new MovieStar(68, "Female", "Streep");
loonies.star3 = new MovieStar(55, "Female", "Kidman");

document.body.innerHTML = "";

for (star in loonies) {
    loonies[star].SettleCrazinessUsingSecretFormula();
    document.body.innerHTML += "LastName: " + loonies[star].LastName + " ... IsCrazy: " + loonies[star].IsCrazy.toString();
    document.body.innerHTML += "<br>";
}