//initializes page on load
init();


function init() {
    //uses moment.js to get current hour/day/month
    var currentDay = $("#currentDay");
    var hrTime = parseInt(moment().format('HH'));
    currentDay.text(moment().format('dddd MMMM Do YYYY'));
    //runs over all the text areas and sets a background color according to the time
    for (var i = 9; i < 18; i++) {
        var time = parseInt(document.getElementById(i).getAttribute("data-time"));
        var textAreaId = document.getElementById(i);
        if (time < hrTime) {
            textAreaId.setAttribute("class", "col-8 text past");
        } else if (time > hrTime) {
            textAreaId.setAttribute("class", "col-8 text future");
        } else {
            textAreaId.setAttribute("class", "col-8 text present");
        }
        //loads saved text from local storage
        loadText();
    }
};

//adds click listener to the save buttons
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var element = event.target.getAttribute("class");
    if (element === "save") {
        //grabs data-string and timeText value to be used in saving the text to local storage
        var timeStr = this.parentNode.childNodes[3].getAttribute("data-string");
        var timeText = this.parentNode.childNodes[3].value;
        //checks what time it is on and saves to local storage accordingly
        if (timeStr === "nine") {
            localStorage.setItem("nine", timeText);
        } else if (timeStr === "ten") {
            localStorage.setItem("ten", timeText);
        } else if (timeStr === "eleven") {
            localStorage.setItem("eleven", timeText);
        } else if (timeStr === "twelve") {
            localStorage.setItem("twelve", timeText);
        } else if (timeStr === "one") {
            localStorage.setItem("one", timeText);
        } else if (timeStr === "two") {
            localStorage.setItem("two", timeText);
        } else if (timeStr === "three") {
            localStorage.setItem("three", timeText);
        } else if (timeStr === "four") {
            localStorage.setItem("four", timeText);
        } else {
            localStorage.setItem("five", timeText);
        }
        //reloads the page after a save
        //this is added in case the hour changes, so this will update the text area colors accordingly
        location.reload(true);
    }
})
//loadText function to grab all of the local storage saved items and inputs to page
function loadText() {
    document.getElementById("9").value = localStorage.getItem("nine");
    document.getElementById("10").value = localStorage.getItem("ten");
    document.getElementById("11").value = localStorage.getItem("eleven");
    document.getElementById("12").value = localStorage.getItem("twelve");
    document.getElementById("13").value = localStorage.getItem("one");
    document.getElementById("14").value = localStorage.getItem("two");
    document.getElementById("15").value = localStorage.getItem("three");
    document.getElementById("16").value = localStorage.getItem("four");
    document.getElementById("17").value = localStorage.getItem("five");
}