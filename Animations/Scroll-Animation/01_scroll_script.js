// PLEASE READ THE DESCRIPTION.TXT FILE FOR BETTER UNDERSTANDING OF THIS CODE 

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

    const scrollerInner=scroller.querySelector(".scroller_inner");
    const scrollerContent =Array.from(scrollerInner.children);

    console.log(scrollerContent);

    scrollerContent.forEach(item=>{
        const duplicatedItem=item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden","true");
    scrollerInner.appendChild(duplicatedItem);
        });
    });
}
