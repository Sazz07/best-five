let selectedPlayerName = [];

function showPlayer(playerNames) {

    const tbody = document.getElementById('player-names');
    tbody.innerHTML = " ";

    for (let i = 0; i < playerNames.length; i++) {
            const pName = playerNames[i];
            const tr = document.createElement("tr");
            tr.innerHTML = ` 
                <th>${i + 1}</th>
                <td>${pName}</td>
            `
            tbody.appendChild(tr);
    }
}

function selectPlayerBtn(element){

    const playerName = element.parentNode.children[0].innerText;
    selectedPlayerName.push(playerName);

    if(selectedPlayerName.length <= 5){
        document.getElementById('total-player').innerText =  selectedPlayerName.length;
        showPlayer(selectedPlayerName);
        element.disabled = true;
        element.style.backgroundColor = 'gray';
    }else{
        alert('your are added 5 plyaers');
    }
   
}




