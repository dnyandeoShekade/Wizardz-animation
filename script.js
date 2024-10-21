// gsap.from("nav h1",{
//     y:-20,
//     opacity:0,
//     delay:1,
//     duration:1
// })
// gsap.from("nav h4,nav button",{
//     y:-30,
//     opacity:0,
//     delay:1,
//     duration:1 
// })
// function page1Animation(){
//     var tl = gsap.timeline()

// tl.from("nav h1,nav h4,nav button",{
//     y:-30,
//     duration:0.7,
//     delay:0.5,
//     opacity:0,
//     stagger:0.15
// })

// tl.from(".center-part1 h1",{
//     x:-200,
//     opacity:0,
//     duration:0.5
// },"-=0.3")
// tl.from(".center-part1 p",{
//     x:-100,
//     opacity:0,
//     duration:0.4
// })
// tl.from(".center-part button",{
//     opacity:0,
//     duration:0.4
// })
// tl.from(".center-part2 img",{
//     opacity:0,
//     delay:0.5,
//     x:200
// },"-=0.7")
// tl.from(".section1bottom img",{
//     opacity:0,
//     y:30,
//     stragger:0.15,
//     duration:0.6
// })
// }
// page1Animation() 

// gsap.from(".services h2",{
//     x:-100,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:".services h3",
//         scroller:"body",
//         makers:true,
//         start:"top 50%"
//     }
// })

// var tl2 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".section2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 0",
//         scrub:2,
//     }
// })

// tl2.from(".services",{
//     x:30,
//     opacity:0,
//     duration:1

// })
// tl2.from(".elem .line1 .left",{
//     x:-300,
//     opacity:0,
//     duration
// })
// tl2.from(".elem .line1 .right"{
//     x:300
// })
function page1Animation(){
    var tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        duration: 0.7,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15
    });

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.5
    }, "-=0.3");

    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4
    });

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    });

    tl.from(".center-part2 img", {
        opacity: 0,
        delay: 0.5,
        x: 200
    }, "-=0.7");

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15, // Corrected spelling from stragger to stagger
        duration: 0.6
    });
}

page1Animation();

// Scroll-triggered animation for section2
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top -50%",
        end: "top -60%",
        scrub: 2,
    }
});

tl2.from(".services", {
    x: 30,
    opacity: 0,
    duration: 0.5
});

tl2.from(".elem.line1.left", { 
    x: -300,
    opacity: 0,
    duration: 1 // Added a duration value
},"anim1");

tl2.from(".elem.line1.right", { // Ensure this selector matches your HTML structure
    x: 300,
    opacity: 0,
    duration: 1 // Added a duration value
},"anim1");

tl2.from(".elem.line2.left",{
    x:300,
    opacity:0,
    duration:1

},"anim2")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"anim2")