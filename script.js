let fields = [];
let gameOver = false;
let currentShape = `cross`;


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
    console.log(fields);
    draw();
    checkForWin()
}
}


function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');

    for (let i = 1; i < 8; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
    }

    for (let i = 1; i < 10; i++) {
        document.getElementById('circal-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if(fields[i] == `circle`) {
            document.getElementById('circal-' + i).classList.remove('d-none');
        }
        if(fields[i] == `cross`) {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}


function checkForWin() {
    
    let winner;
    if(fields[1] == fields[2] && fields[2] == fields[3] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if(fields[4] == fields[5] && fields[5] == fields[6] && fields[4]) {
        winner = fields[4];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if(fields[7] == fields[8] && fields[8] == fields[9] && fields[7]) {
        winner = fields[7];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[3] == fields[6] && fields[6] == fields[9] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[1] == fields[5] && fields[5] == fields[9] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if(fields[3] == fields[5] && fields[5] == fields[7] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    }

    if(winner) {
        console.log('winner', winner);
        gameOver = true;
        setTimeout(function() {
        document.getElementById('game-over').classList.remove('d-none');
        document.getElementById('restart-btn').classList.remove('d-none');
    }, 2000)
    }
}