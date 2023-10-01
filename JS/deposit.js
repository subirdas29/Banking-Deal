// document.getElementById('dep-btn').addEventListener('click',function(){
//     const depositAmount = document.getElementById('dep-amount')
//     const depAmount = depositAmount.value
    
//     const adddeposit = document.getElementById('add-dep')
//     const prevDep = adddeposit.innerText 
//     adddeposit.innerText = parseInt(depAmount) + parseInt(prevDep);

//     const balanceAmount = document.getElementById('bal-amount')
//     const prevBal = balanceAmount.innerText;
//     balanceAmount.innerText = parseInt(prevBal)+ parseInt(depAmount)
// })



// Another functional way

document.getElementById('dep-btn').addEventListener('click',function(){

    const getInputValue = inputValueById('dep-amount');
    const getElementValue = elementById('add-dep');
    
    const totalDeposit = getInputValue + getElementValue;
    setValuebyId('add-dep',totalDeposit)

    const getBalValue = elementById('bal-amount')
    const newBalance = getInputValue + getBalValue;
    setValuebyId('bal-amount',newBalance);

})
