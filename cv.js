// function dataload() {
//     let title = document.createElement("div");
//     title.setAttribute("id", "title");
//     title.innerHTML = "ABOUT ME";
//     document.querySelector('#content').appendChild(title);
// }


// dataload();

var open = false;

document.querySelector("#about-btn").addEventListener('click', showAbout);
document.querySelector("#education-btn").addEventListener('click', showEducation);
document.querySelector("#work-btn").addEventListener('click', showWork);
document.querySelector("#military-btn").addEventListener('click', showMilitary);
document.querySelector("#hamburger").addEventListener('click', showProperties);

function showEducation() {

    document.querySelector('#education').style.display = 'flex';
    document.querySelector('#work-exp').style.display = 'none';
    document.querySelector('#military').style.display = 'none';
    document.querySelector('#about-me').style.display = 'none';

}

function showAbout() {

    document.querySelector('#education').style.display = 'none';
    document.querySelector('#work-exp').style.display = 'none';
    document.querySelector('#military').style.display = 'none';
    document.querySelector('#about-me').style.display = 'flex';

}

function showWork() {

    document.querySelector('#education').style.display = 'none';
    document.querySelector('#work-exp').style.display = 'flex';
    document.querySelector('#military').style.display = 'none';
    document.querySelector('#about-me').style.display = 'none';

}

function showMilitary() {

    document.querySelector('#education').style.display = 'none';
    document.querySelector('#work-exp').style.display = 'none';
    document.querySelector('#military').style.display = 'flex';
    document.querySelector('#about-me').style.display = 'none';

}

function showProperties() {
    var b = document.querySelectorAll('.properties');
    if (open) {
        for (const prop of b) {
            prop.style.display = 'none';

        }
        open = false;
    } else {
        for (const prop of b) {
            prop.style.display = 'flex';
        }
        open = true;
    }
}



function myFunction(x) {
    if (x.matches) { // If media query matches
        var a = document.querySelectorAll('.properties');
        for (const prop of a) {
            prop.style.display = 'none';

        }
    } else {
        document.querySelector('.properties').style.display = 'flex';
    }
}

var x = window.matchMedia("(max-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes