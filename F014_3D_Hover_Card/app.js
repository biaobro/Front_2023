let items = document.querySelectorAll('.content');
items.forEach(item => {
    item.addEventListener('mousemove',(e)=>{
        // get position pointer in with (pixel)
        let positionPx = e.x - item.getBoundingClientRect().left;

        // convert to %
        let positionX = (positionPx / item.offsetWidth)*100;

        // get position pointer in height (px)
        let positionPy = e.y - item.getBoundingClientRect().top;

        // convert to %
        let positionY = (positionPy / item.offsetHeight) * 100;

        item.style.setProperty('--rX',0.5*(50-positionY) + 'deg');
        item.style.setProperty('--rY',-0.5*(50-positionX) + 'deg');

    })

    item.addEventListener('mouseout', ()=>{
        item.style.setProperty('--rX','0deg');
        item.style.setProperty('--rY','0deg');

    })
})