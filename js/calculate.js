function getElementValueById(idElement){
    const inputElement = document.getElementById(idElement);
    const inputValue = parseFloat(inputElement.value);
    
    if (!isNaN(inputValue) && inputValue > 0){
        return inputValue;
    }else{
        alert('Please provide a valid number');
    }
          
}

function getElementInnerTextById(idElement){
    const inputElemnt = document.getElementById(idElement);
    const inputValue = parseFloat(inputElemnt.innerText);
    return inputValue;
}

function setElementInnerTextById(idElement, value){
    const setElement = document.getElementById(idElement);

    setElement.innerText = value;
    if (!isNaN(value) && value > 0){
        setElement.innerText = value;
    }else{
        setElement.innerText = '';
    }
}

// Calcution part
// Player Expenses
document.getElementById('btn-calculator').addEventListener('click', function(){

    const totalPlaers = getElementInnerTextById('total-player')
    if(totalPlaers > 0){
        // get per player budget  and total players
            const perPlayerbudget = getElementValueById('per-player-cost')
        // calculate Players expenses
            const playrsExpenses = totalPlaers * perPlayerbudget; 
            // set players total expenses
            setElementInnerTextById('player-expenses', playrsExpenses)
            
        }else{
            alert('Please add your desire player first')
        }

})

// get  total expenses button
document.getElementById('btn-calculate-total').addEventListener('click', function(){
const totalPlaers = getElementInnerTextById('total-player')
if(totalPlaers > 0){
     // get player expenses value
    const totalPlayerExpenses = getElementInnerTextById('player-expenses')
    
    // get manager expenses and coach expenses
    const managerExpenses = getElementValueById('manager-amount-field');
    const coachExpenses = getElementValueById('coach-amount-field');
    // calculate Players expenses
    const totalExpenses = totalPlayerExpenses + managerExpenses + coachExpenses;
    setElementInnerTextById('total-cost', totalExpenses)
        
    }else{
        alert('Please add player first')
    }


})