// ==============================
// RESULT FORM
// ==============================

const form = document.getElementById("resultForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    // Get values

    const regNo = document.getElementById("regNo").value.trim();

    const rollNo = document.getElementById("rollNo").value.trim();

    const semester = document.getElementById("semester").value;

    const examination = document.getElementById("examination").value;

    const examType = document.getElementById("examType").value;
    // Correct Student Details

    if(

        regNo === "LV/24/BCA/247120" &&

        rollNo === "24BCA81" &&

        semester === "IV" &&

        examination === "MAY, 2026" &&

        examType === "Regular"

    ){

        window.location.href = "result.html";

    }
    else{

        window.location.href = "no-result.html";

    }

});

