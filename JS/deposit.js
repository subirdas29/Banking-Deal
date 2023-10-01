document.getElementById('dep-btn').addEventListener('click',function(){
    const depositAmount = document.getElementById('dep-amount')
    const depAmount = depositAmount.value
    
    const adddeposit = document.getElementById('add-dep')
    const prevDep = adddeposit.innerText 
    adddeposit.innerText = parseInt(depAmount) + parseInt(prevDep);

    const balanceAmount = document.getElementById('bal-amount')
    const prevBal = balanceAmount.innerText;
    balanceAmount.innerText = parseInt(prevBal)+ parseInt(depAmount)
})