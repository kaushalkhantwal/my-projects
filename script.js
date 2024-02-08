function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotive();


function page4animation(params) {
    let elemC = document.querySelector(".elem-container");
    let fixed = document.querySelector(".fixed-image");


    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    let elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    });
}
page4animation();


// swiper js use
function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,

    });
}
swiper();


let tl = gsap.timeline()

function loaderanimation() {
    tl.from(".loader .h1", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1
    })
    tl.to(".loader .h1", {
        opacity: 0
    })

    tl.from(".loader .h2", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    })
    tl.to(".loader .h2", {
        opacity: 1
    })
    tl.to(".loader .h2", {
        opacity: 0
    })

    tl.from(".loader .h3", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    })
    tl.to(".loader .h3", {
        opacity: 0,
    })

    tl.to(".loader", {
        y: "-100%"
    })

}
loaderanimation();


function page1animation() {
    tl.from(".page1 nav img, .page1 .nav-part2 ",{
        scale:0.8,
        duration:1,
        delay:0.5,
        opacity: 0,
        stagger:0.5
    })
    
    tl.from(".center .right h1", {
        y:100,
        duration:1,
        opacity: 0,
        stagger:0.5
    })
    tl.from(".center .left h3", {
        x:-50,
        duration:1,
        opacity: 0,
        stagger:0.5
    })
}
page1animation();


