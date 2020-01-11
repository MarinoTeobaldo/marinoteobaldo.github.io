window.addEventListener('DOMContentLoaded', (event) => {

    document.querySelectorAll(".scroll_resize").forEach(function(el, index, array){
        gsap.set(el,{scale:(1.151)});
    });


});

let triggered_els = [];



i.on('scroll', func => {

    scroll_y = i.scroll.instance.scroll.y;


});

i.on('call', function(t,ev,el){
    
    

    let el_id = "#"+el.el.id;


    if (triggered_els.includes(el_id)) {
        return
    }

    triggered_els.push(el_id);





    let el_in = scroll_y;
    let el_out = el.bottom;
    let el_target = el.el.querySelector(".image_img");


    if ( ev == "enter") { 
        let el_range = Math.abs(el_out - el_in);




        i.on('scroll',function() {
            let el_prop_in = el_in+scroll_y;

            let x = scroll_y * 0.15 / el_range;
            console.log(x);
            gsap.set(el_target,{scale:(1.151-x)})
        });            



    } else {

        gsap.killTweensOf(el_id); 



    };





});