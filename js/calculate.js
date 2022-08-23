
function getElementValueById(idElement) {
    const inputFeild = document.getElementById(idElement);
    const inputFieldValueString = inputFeild.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}

// Calculate section
// Player Expenses

document.getElementById('btn-calculator').addEventListener('click', function () {
    const perPlayerCost = getElementValueById('per-player-cost');
    const playerCost = perPlayerCost * playername.length; 
    const playerExpenses = document.getElementById('player-expenses')
    playerExpenses.innerText = playerCost;
});
