const building = document.getElementById('building');

function createWindow() {
    const window = document.createElement('div');
    window.style.width = '50px';
    window.style.height = '50px';
    window.style.margin = '25px';
    window.style.display = 'inline-block';
    window.classList.add('window'); 
    building.appendChild(window);
}

function removeWindow() {
    if (document.querySelector('.window'))
        document.querySelector('.window').remove();
}

function moveBuilding(distance) {
    building.style.left = building.offsetLeft + distance + 'px';
}

for (let i = 0; i < 9; i++) {
    createWindow();
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowDown':
            removeWindow();
            break;
        case 'ArrowUp':
            createWindow();
            break;
        case 'ArrowLeft':
            moveBuilding(-50);
            break;
        case 'ArrowRight':
            moveBuilding(50);
            break;
        default:
            return;
    }
});

document.addEventListener('click', () => {
    document.querySelector('body').toggleAttribute('night');
});
