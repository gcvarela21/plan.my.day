# plan.my.day

A day planner

## Table of Contents

* [Summary](#summary)
* [User Story](#user-story)
* [Dependencies](#Dependencies)
* [Installation](#Installation)
* [Functionality](#Functionality)
* [Creator](#creator)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

______________________________________________________________________________

## Summary

This web application is day planner that is color coded to indicate the passing of time. Past, Present, And future is determined by the current time and the value that the time block represent.

* [Live Site](https://gcvarela21.github.io/art-clicky-game/)
* [Project Repository](https://github.com/gcvarela21/art-clicky-game)

![GIF Visual of The Deployed Web Application](https://github.com/gcvarela21/plan.my.day/blob/main/plan_gv.gif?raw=true)

______________________________________________________________________________

## User-Story

I want a visual representation of my day, that is accessible and easy to update and navigate. I want a clear indication of the hour of the day to be updated in real time.

______________________________________________________________________________

## Dependencies

Built With

* [HTML 5](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/css_howto.asp)
* [GitHub](https://github.com/)
* [JavaScript](https://www.w3schools.com/js/default.asp)
* [BootStrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Git](https://git-scm.com/downloads)
* [Node](https://nodejs.org/en/)
* [Moment JS]()

______________________________________________________________________________
  
## Installation

For local installation Please clone or download the project folder.

Open your prefered code editor and run the index.js live to see the functionality.

______________________________________________________________________________
  
## Funtionality

This Apllication in its development html, javascript, and the moment js library to reference and determine time based of the web browser.

Using BootStrap, HTML, CSS, and Javascript we build out the template to represent each hour block of time with an input field and save buttton. 
HTML elements are tagged with ID's and Classes for our functions to recognize specific elements in order to save, render, or update our planners color coded elements.

```javascript
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
```

```javascript
function saveEvent() {
    localStorage.setItem("events", JSON.stringify(arr));
	}
```

```javascript
function saveEvent() {
    localStorage.setItem("events", JSON.stringify(arr));
	}
```


______________________________________________________________________________

## Creator

Gloria C Varela

* [GitHub Profile Page](https://github.com/gcvarela21)
* [Web Developer Portfoio Website](https://gcvarela21.github.io/glo.digital/)
* [Interactive Design Portfolio Website](https://www.glo.digital/)
* [LinkenIn](https://www.linkedin.com/in/glovarela/)

______________________________________________________________________________

### Contributing

```javascript
// There are no contributions at this time
```

______________________________________________________________________________

### Tests

```javascript
// There is no test at this time
```

______________________________________________________________________________

### Questions

If you have any questions contact: Any of the [Creators](#creators)

______________________________________________________________________________

### License

This project is licensed under: ![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)
