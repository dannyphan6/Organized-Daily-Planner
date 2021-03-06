// displayDate executes a function that displays the current time 
const displayDate = function() {
    const displayTime = moment().format("MMM Do, YYYY, hh:mm:ss");
    $("#currentDay").text(displayTime);
}
// setInterval will run the function as soon as the webpage is loaded
setInterval(displayDate);

$(".saveBtn").on("click", function() {
    // When the save button is clicked, look for the buttons sibling with the class of text-value, and give me that value
    const userInput = $(this).siblings(".text-value").val().trim();
    console.log(userInput);

    // When the save button is clicked, look for the buttons parent with the attribute of data-time
    const timeSlot = $(this).parent().attr("data-time").trim()
    console.log(timeSlot)

    // Grab the values from userInput and dataTime and store them in localStorage
    localStorage.setItem(timeSlot, userInput);
})

function timeComparison() {
    // moment().hour() is in military time EX: 15 = 3:00PM, so currentTime = 15
    const currentTime = moment().hour()
    console.log(currentTime)

    // Targets the class row and loops through each index that's associated with data-time
    $(".row").each(function(index) {
        console.log(index);

        // This targets the class of row with an attribute of data-time
        // EX: data-time = 8 which is equal to index[0]
        let dataTime = $(this).attr("data-time")
        console.log(dataTime)

        // If 15 (3:00PM) is greater than 8 (8:00AM) then target the child of the class row, with a class of text-value, and add the class of past to it 
        if(currentTime > dataTime) {
            $(this).children(".text-value").addClass("past");
            console.log(this)
        
        // If 15 (3:00PM) is less than 17 (5:00PM) then target the child of the class row, with a class of text-value, and add the class of future to it 
        } else if (currentTime < dataTime) {
            $(this).children(".text-value").addClass("future");
            console.log(this)

        // If both conditions above aren't met, then target the child of the class row, with a class of text-value, and add the class of present to it
        } else {
            $(this).children(".text-value").addClass("present");
            console.log(this)
        }
    })
}

timeComparison();

function getLocalStorage () {
    $(".row").each(function() {
        const grabTime = $(this).attr("data-time")
        const localStorageData = localStorage.getItem(grabTime)
        $(this).children(".text-value").val(localStorageData)
    })
}

getLocalStorage();






