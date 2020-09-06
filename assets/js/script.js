//sets object to call later on
var hourText = {
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "one",
    "14": "two",
    "15": "three",
    "16": "four",
    "17": "five",
};


function init() {
    //uses moment.js to get current hour/day/month
    var currentDay = $("#currentDay");
    var hrTime = parseInt(moment().format('HH'));
    currentDay.text(moment().format('dddd MMMM Do YYYY'));
    //runs over all the text areas and sets a background color according to the time
    for (var i = 9; i < 18; i++) {
        var textAreaId = document.getElementById(i);
        if (i < hrTime) {
            textAreaId.setAttribute("class", "col-8 text past");
        } else if (i > hrTime) {
            textAreaId.setAttribute("class", "col-8 text future");
        } else {
            textAreaId.setAttribute("class", "col-8 text present");
        }
        //loads saved text from local storage
        loadText();
    }
};

//loadText function to grab all of the local storage saved items and inputs to page
function loadText() {
    for (var i = 9; i < 18; i++) {
        document.getElementById(i).value = localStorage.getItem(hourText[i]);
    };
};

//saves text to local storage
function saveText(time, text){
    localStorage.setItem(hourText[time], text);
};

//adds click listener to the save buttons
$(".save").on("click", function () {
    //grabs timeid and text to save to local storage
    var textarea = this.parentNode.parentNode.querySelector("textarea");
    var timeID = textarea.getAttribute("id");
    var timeText = textarea.value;

    //calls save Text function to save text to local storage
    saveText(timeID, timeText);

    //reloads the page after a save
    //this is added in case the hour changes, so this will update the text area colors accordingly
    init();
});


//initializes page on load
init();