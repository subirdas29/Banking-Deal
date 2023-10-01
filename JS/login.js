document.getElementById('btn').addEventListener('click',function(){
    const password = document.getElementById('pass')
    const pass = password.value;
    console.log(pass);

    const email = document.getElementById('mail')
    const mail = email.value;
    console.log(mail)

    if(mail === 'joy@gmail.com' && pass === '123456'){
        window.location.href ='bank.html'
    }
    else{
        alert('You are an invalid user.please enter valid email and password')
    }
})