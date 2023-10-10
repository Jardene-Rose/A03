

//Menu Hover https://www.w3schools.com/howto/howto_js_active_element.asp//

let menuBar = document.getElementById("menuBar");

let menuButtons = menuBar.getElementsByClassName("btn");

for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("onclick", function clicked() {

        let current = document.getElementsByClassName("active");

        if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
        }
        
        this.className += "active";
    });
}


//Menu Sticky//

//Smooth Scroll//

