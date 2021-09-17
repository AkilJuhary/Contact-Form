// Auto generating age from date of birth
function autoAge() {
    var now = new Date();             
    var currentYear = now.getFullYear();

    var birthYear = document.getElementById("dob").value;
    var getdob = new Date(birthYear);
    var getYear = getdob.getFullYear();
    var ageYear = currentYear - getYear;
    document.getElementById("showAge").value = `${ageYear}`;
};

