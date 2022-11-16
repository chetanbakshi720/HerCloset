var modal_window = document.getElementById("size-guide-content");
var close_modal_window = document.getElementById("close-size-guide");
var content_link = document.getElementById("modal_link");
var body_overflow = document.getElementById("overflow_effect");

content_link.onclick = function(){
    modal_window.style.display = "block";
    body_overflow.classList.add('overflow');
}

close_modal_window.onclick = function(){

    modal_window.style.display = "none";
    body_overflow.classList.remove('overflow');
}

window.onclick = function(event){
    if(event.target == modal_window){
        modal_window.style.display = "none";
    }
}