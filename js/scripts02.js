

window.addEventListener('DOMContentLoaded', (event) => {


    document.querySelectorAll(".mt_link").forEach(function(el,i){



        

    el.onmouseover = function(e) {
        el.classList.add("mt_link_hovered");

        document.querySelectorAll(".mt_blur:not(.mt_link_hovered)").forEach((tar) => {
            tar.classList.add('mt_blur_active');
        });



    }
    el.onmouseout = function(event) {
        el.classList.remove("mt_link_hovered");
        document.querySelectorAll(".mt_blur").forEach((tar) => {
            tar.classList.remove('mt_blur_active');
        });
        

    }











    
    
    });




});