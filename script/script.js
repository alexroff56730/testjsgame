let id = null;
let elem = document.getElementById("joueur");
let x = 10;
let y = 260;
clearInterval(id);
id = setInterval(frame, 1000);



function frame() {

    window.addEventListener("keydown", function (event) {
        if (event.key == "ArrowUp") {
            x++;
        } else if (event.key == "ArrowLeft") {
            y++;
        } else if (event.key == "ArrowRight") {
            y--;
        } else if (event.key == "ArrowDown") {
            if(x<=10) {
                x = 10;
            } else {
               x--;   
            }
                   
        }

        console.log(event.key);
    })

    elem.style.top = x + "px";
    elem.style.left = y + "px";
    /*elem.style.right = pos_right + "px";
    elem.style.bottom = pos_bottom + "px";*/
    

}