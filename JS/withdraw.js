// document.getElementById('with-btn').addEventListener('click',function(){
//     const withdrawAmount = document.getElementById('withdraw')
//     const withAmount = withdrawAmount.value;

//     const withdraw = document.getElementById('withTotal')
//     const withTotal = withdraw.innerText;

//     const balanceAmount = document.getElementById('bal-amount')
//     const prevBal = balanceAmount.innerText;

//     withdrawAmount.value = ''

//     if(isNaN(withAmount)){
//         alert('Please enter a valid number');
//         return;
//     }

//     if(prevBal<withAmount)
//     {
//         alert('Your account have no enough money')
//         return;
//     }

//     else{
//         withdraw.innerText = parseInt(withAmount) + parseInt(withTotal)
//         balanceAmount.innerText = parseInt(prevBal)- parseInt(withAmount)
//     }
    

    
// })


document.getElementById('with-btn').addEventListener('click',function(){

    const getWithValue = inputValueById('withdraw');
    const getWithElementValue = elementById('withTotal');
    const getBalValue = elementById('bal-amount')
    
    
    if( getBalValue< getWithValue)
    {
        alert('Your account have no enough money')
        return;
    }

    else{ 
    const newBalance = getBalValue-getWithValue ;
    setValuebyId('bal-amount',newBalance);
    const newWithValue = getWithValue + getWithElementValue;
    setValuebyId('withTotal',newWithValue)
    }

})