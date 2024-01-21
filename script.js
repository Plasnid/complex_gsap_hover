let hoverSample = document.querySelector("a");
hoverSample.addEventListener("click", clickAction);
hoverSample.addEventListener("mouseenter", hoverIn);
hoverSample.addEventListener("mouseleave", hoverOut);

function animatedIn(){
    console.log("animated in!");
}
function animatedOut(){
    console.log("animated out!");
}

function clickAction(e){
    e.preventDefault();
    console.log("ouch!");
}

function hoverIn(e){
    console.log("I know.  I'm hovering, sooooorrryyyy!");
    console.log(e.target);
    let hoverTarget = e.target;
    console.log(hoverTarget);
    console.log(hoverTarget.querySelector("#info>p:nth-child(1)"));
    let firstText = hoverTarget.querySelector("#info>p:nth-child(1)");
    let tl_1 = gsap.timeline();
    tl_1.to(firstText,
        {left:"10px", opacity: 1, fontSize: "4em", color:"#090", duration: .750, ease:"back.out(1.7)"})
        .to(firstText,
            {color:"#009", duration:.25, ease:"expo.out"})
        .to(firstText,{color:"#0f0",duration:.4, delay:2})

    let secondText = e.target.querySelector("#info>p:nth-child(2)");
    let tl_2 = gsap.timeline();
    tl_2.to(secondText,
        {top: "280px", opacity: 1, fontSize:"4em", color: "#090", duration: 1, delay: 1, ease:"circ.out"})
        .to(secondText,
            {color:"#0f0", duration:.4, delay:.250, ease:"power1.in", onComplete:animatedIn})
}

function hoverOut(e){
    let firstText = e.target.querySelector("#info>p:nth-child(1)");
    let secondText = e.target.querySelector("#info>p:nth-child(2)");
    let tl_1 = gsap.timeline();
    let tl_2 = gsap.timeline();
    tl_1.to(firstText,
        {left:"-350px", opacity: 0, fontSize: "8em", color:"#000", duration: .75, ease:"power2.out"});
    tl_2.to(secondText,
        {top: "420px", opacity: 0, fontSize: "8em", color:"#000", duration: 1, ease:"bounce.out", onComplete:animatedOut})
    console.log("I get the hint!  Not hovering anymore!");
}