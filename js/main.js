const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

function jump() {
    if (dino.classList != 'jump'){
        dino.classList.add('jump');

        setTimeout(function() {
            dino.classList.remove('jump');
        }, 400);
    }
}



let isAlive = setInterval(function() {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

    // get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
       alert('GAME OVER');
    }
}, 10);

document.addEventListener('keydown', function(event) {
    jump();
    event.preventDefault();
});

// ---------- Button/Toggle Event Listener -----------

document.querySelector('button').addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const dinopool = document.getElementById('dinopool');
    const cow = document.getElementById('cow');

    function jump() {
        if (dinopool.classList != 'jump'){
            dinopool.classList.add('jump');

            setTimeout(function() {
                dinopool.classList.remove('jump');
            }, 400);
        }
    }

    document.addEventListener('keydown', function(event) {
        jump();
        event.preventDefault();
    });

    let isDinopoolAlive = setInterval(function() {
        // get current dino Y position
        let dinopoolTop = parseInt(window.getComputedStyle(dinopool).getPropertyValue('top'));

        // get current cow X position
        let cowLeft = parseInt(window.getComputedStyle(cow).getPropertyValue('left'));

        // detect collision
        if (cowLeft < 50 && cowLeft > 0 && dinopoolTop >= 140) {
        alert('GAME OVER');
        }
    }, 10)
}); 