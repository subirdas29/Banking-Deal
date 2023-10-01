document.getElementById('with-btn').addEventListener('click',function(){
    const withdrawAmount = document.getElementById('withdraw')
    const withAmount = withdrawAmount.value;

    const withdraw = document.getElementById('withTotal')
    const withTotal = withdraw.innerText;
    withdraw.innerText = parseInt(withAmount) + parseInt(withTotal)

    const balanceAmount = document.getElementById('bal-amount')
    const prevBal = balanceAmount.innerText;
    balanceAmount.innerText = parseInt(prevBal)- parseInt(withAmount)
})