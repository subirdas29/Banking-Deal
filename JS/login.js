document.getElementById('btn').addEventListener('click',function(){
    const password = document.getElementById('pass')
    const pass = password.value;
    console.log(pass);

    const email = document.getElementById('mail')
    const mail = email.value;
    console.log(mail)

    if(mail === 'joy@gmail.com' && pass === '123456'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})