
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

// Total Expenses calculation 

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const perPlayerCost = getElementValueById('per-player-cost');
    const playerCost = perPlayerCost * playername.length; 

    const managerExpenses = getElementValueById('manager-amount-field');
    const coachExpenses = getElementValueById('coach-amount-field');
    const totalBudget = managerExpenses + coachExpenses + playerCost;

    const myTotal = document.getElementById('total-cost');
    myTotal.innerText = totalBudget;
});
