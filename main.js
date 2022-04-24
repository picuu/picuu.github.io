document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".circle").forEach(function(move){
        const moving_value = move.getAttribute("data-value");

        let x = (e.clientX * moving_value) / 250;
        let y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}