const playername = [];

function showPlayer() {
    const tbody = document.getElementById('player-names');
    tbody.textContent = " ";
    for (let i = 0; i < playername.length; i++) {
        if (i <= 4) {
            const pName = playername[i];
            const tr = document.createElement("tr");
            tr.innerHTML = ` 
                <th>${i + 1}</th>
                <td>${pName.playername}</td>
            `
            tbody.appendChild(tr);
        } else {
            return;
        }
    };
}

function addPlayers(element) {
    if (playername.length <= 4 ) {
        const playerName = element.parentNode.children[0].innerText;
        const name = {
            playername: playerName,
        }
        playername.push(name);
        element.disabled = 'true';
        element.style.backgroundColor = 'gray';
        showPlayer();
    }
    else {
        alert('You have already selected 5 players');
    }       
}