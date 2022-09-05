let fields = [];
let gameOver = false;
let currentShape = `cross`;
let playerClick = 0;


function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == `cross`) {
            currentShape = `circle`;
            document.getElementById('player-2').classList.remove('player-inactiv');
            document.getElementById('player-1').classList.add('player-inactiv');
        } else {
            currentShape = `cross`;
            document.getElementById('player-2').classList.add('player-inactiv');
            document.getElementById('player-1').classList.remove('player-inactiv')
        }
        fields[id] = currentShape;
        draw();
        checkForWin(currentShape)
    }
}


function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('winner-red').classList.add('d-none');
    document.getElementById('winner-blue').classList.add('d-none');
    document.getElementById('game-over-container').classList.add('d-none');
    document.getElementById('restart-btn2').classList.add('d-none');
    document.getElementById('draw').classList.add('d-none');
    playerClick = 0;
    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).style.transform = 'scaleX(0)';
    }
    for (let i = 1; i < 10; i++) {
        document.getElementById('circal-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == `circle`) {
            document.getElementById('circal-' + i).classList.remove('d-none');
        }
        if (fields[i] == `cross`) {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}


function checkForWin() {

    let winner;
    if (fields[1] == fields[2] && fields[2] == fields[3] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[4] == fields[5] && fields[5] == fields[6] && fields[4]) {
        winner = fields[4];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if (fields[7] == fields[8] && fields[8] == fields[9] && fields[7]) {
        winner = fields[7];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[3] == fields[6] && fields[6] == fields[9] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[5] && fields[5] == fields[9] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if (fields[3] == fields[5] && fields[5] == fields[7] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    }

    if (winner) {
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 2000)
        showWinner(currentShape);
    } else {
        playerClick++;
    }

    
    if (playerClick == 9) {
        setTimeout(function () {
        document.getElementById('game-over-container').classList.remove('d-none');
        document.getElementById('restart-btn2').classList.remove('d-none');
        document.getElementById('draw').classList.remove('d-none');
    }, 2000)
}
}


function showWinner(currentShape) {
    if (currentShape == 'cross') {
        document.getElementById('winner-red').classList.remove('d-none');
    } else {
        document.getElementById('winner-blue').classList.remove('d-none');
    }
}
