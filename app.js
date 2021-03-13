var arr = ["", "", "", "", "", "", "", "", ""];

$(document).ready(function () {

	var date = moment().format("dddd, MMMM Do");
	
	var time = moment().format("HH");

  start();
  colorCode();

  $("#currentDay").text(date);

  function colorCode() {

    $(".container .row").each(function () {
			var hour = $(this).children().first().attr("data-time");
			var block = $(this).children().next(".description");
			
      if (time == hour) {
				block.addClass("present");
			} else if (time < hour) {
				block.addClass("future");
			} else {
				block.addClass("past");
			}
    })
  }

  function saveEvent() {
    localStorage.setItem("events", JSON.stringify(arr));
	}

  function start() {
		if (localStorage.length === 0) {
			console.log("events = null")
    } else {
      var storedEvents = JSON.parse(localStorage.getItem("events"));
     
      $(".container .row").each(function () {
        $(this).find(".description").text(storedEvents[$(this).attr("data-index")]);
      });
      arr = storedEvents;
    }
  }
  $(".container .row").on("click", function (event) {
		event.preventDefault();
		highlighter();
    var element = event.target;

    if (element.matches("button") === true) {
      arr[element.parentElement.getAttribute("data-index")] = $(element).siblings(".description").val();
      saveEvent();
    }
  });
});