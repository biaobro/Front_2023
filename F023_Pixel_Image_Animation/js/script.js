const w = 30;
const h = 30;

function pixel(){
    for(let i=0; i < h; i++){
        for(let j = 0; j < w; j++){
            let span = document.createElement('span');
            let random = Math.random();
            let randomFixed = random.toFixed(2);
            document.getElementById('pixel').appendChild(span);

            span.style.left = j * 10 + 'px';
            span.style.top = i * 10 + 'px';
            span.style.backgroundPositionX = -j*10 + 'px ';
            span.style.backgroundPositionY = -i*10 + 'px, center';
            span.style.animationDelay = randomFixed + 's';
        }
    }
}

pixel();