// displayDate executes a function that displays the current time 
let displayDate = function() {
    const currentTime = moment().format("MMM Do, YYYY, hh:mm:ss");
    $("#currentDay").text(currentTime);
}
// setInterval will run the function as soon as the webpage is loaded
setInterval(displayDate);





