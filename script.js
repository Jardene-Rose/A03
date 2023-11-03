

//Menu Hover and Clicked https://www.w3schools.com/howto/howto_js_active_element.asp//

let menuButtons = document.getElementsByClassName("btn"); //get btn elements//

for (let i = 0; i < menuButtons.length; i++) { //goes through btn array//
    menuButtons[i].addEventListener("click", function() { //adds listener for mouse click//

        for (let j = 0; j < menuButtons.length; j++) { //resets buttons//
            menuButtons[j].className = "btn";
        }

        menuButtons[i].className = "active btn"; //designating active button//
    });
}

//Menu Sticky https://www.w3schools.com/jsref/prop_win_scrolly.asp//

let menuBar = document.getElementById("menuBar"); //get menuBar element//
let sticky = menuBar.offsetTop; //returns to top position of the element as a number?//

document.addEventListener("scroll", function() { //adds listener to document//
    if (window.scrollY >= sticky) {
        menuBar.classList.add("sticky") //when scroll moves past initial element position- adds sticky class//
    } else {
        menuBar.classList.remove("sticky"); //when this is not the case, removes sticky class//
    }

    console.log(scrollY);
});

//Windows hidden to visible and reversed https://www.w3schools.com/css/css_display_visibility.asp//

let windows = document.getElementsByClassName("windowPane");
let visibleWindows = -1;

triangle01.addEventListener("click", function() { //how come this works without let X = document.getElementById("triangle01")//
    if (visibleWindows > -1) {
        windows[visibleWindows].classList.replace("visible", "hidden");
        visibleWindows -= 1;
    }    
});

triangle02.addEventListener("click", function() {
    if (visibleWindows < 4) {
        visibleWindows += 1;
        windows[visibleWindows].classList.replace("hidden", "visible");
    }    
});