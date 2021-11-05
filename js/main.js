function getInputValue(id){
    const inputField = document.getElementById(id);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
};

function updateTotal(id, amount){
    const previousTotal = getInnerTextValue(id);
    const currentTotal = previousTotal + amount;
    document.getElementById(id).innerText = currentTotal;

};
function getInnerTextValue(id){
    const fieldTag = document.getElementById(id);
    const fieldValueText = fieldTag.innerText;
    const fieldValue = parseFloat(fieldValueText);
    fieldTag.value = '';
    return fieldValue;
}

function updateBalance(amount, isAdding){
    const previousBalance = getInnerTextValue('total-balance');
    let newBalance;
    if(isAdding == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    document.getElementById('total-balance').innerText = newBalance;
    
    
}
// handle deposit 
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-amount');
    if(amount > 0){
        updateTotal('total-deposit', amount);
        updateBalance(amount, true);
    }
});
// handle withdraw 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-amount');
    const balance = getInnerTextValue('total-balance');
    if(amount > 0 && amount <= balance){
        updateTotal('total-withdraw', amount);
        updateBalance(amount, false);
    }
    else if(amount > balance){
        alert('you do not have enough balance')
    }
});
