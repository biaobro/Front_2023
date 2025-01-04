const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildren = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPreview = Math.round(carousel.offsetWidth/firstCardWidth);

// insert copies of the last few cards to the beginning of carousel for infinite scrollingg
carouselChildren.slice(-cardPreview).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
});

// insert copies of the first few cards to the end of carousel for infinite scrollingg
carouselChildren.slice(0, cardPreview).forEach(card =>{
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
});

// add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        // console.log(btn.id)
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging");
    // record the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
    // console.log(e.pageX);
    if(!isDragging){
        return
    }
    // update the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging")
};

const autoPlay = () => {
    if(window.innerWidth < 800) return; // return if window is smaller than 800
    // autoplay the carousel after every 2500ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500)
}
autoPlay();

const infiniteScroll = () =>{
    // if the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0){
        console.log("you've reached to the left end");
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.scrollWidth - 2*carousel.offsetWidth;
        carousel.classList.remove("no-transition")
    }
    // if the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        console.log("you've reached to the right end");
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.scrollWidth;
        carousel.classList.remove("no-transition")
    }

    // clear existing timeout and start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", ()=>clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);