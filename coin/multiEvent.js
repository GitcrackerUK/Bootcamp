let player = document.querySelector('#player');
let coin = document.querySelector('#coin');

function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}


window.addEventListener('keyup', function (e) {
    console.log(e.key);
    if (e.key === 'ArrowDown') {
        let position = extractPosition(player.style.top)
        player.style.top = `${position+50}px`
    } else if (e.key === 'ArrowUp') {
        let position = extractPosition(player.style.top)
        player.style.top = `${position-50}px`
    } else if (e.key === 'ArrowLeft') {
        let position = extractPosition(player.style.left)
        player.style.transform = 'scale(-1,1)'
        player.style.left = `${position-50}px`
    } else if (e.key === 'ArrowRight') {
        let position = extractPosition(player.style.left)
        player.style.transform = 'scale(1,1)'
        player.style.left = `${position+50}px`
    }
    if(isTouching(player,coin)) moveCoin()

})

const extractPosition = function (position) {
    if (!position) return 0
    return parseInt(position.slice(0, -2))
}

const moveCoin = function(){
    let randWidth = Math.floor(Math.random()*window.innerWidth)
    let randHeight = Math.floor(Math.random()* window.innerHeight)
    coin.style.left = `${randWidth}px`
    coin.style.top = `${randHeight}px`
}
moveCoin()