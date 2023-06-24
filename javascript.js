 // let user ={ name: , email: , password: , accessToken: };
let signupBtn = document.querySelector("#signup");
let token = localStorage.getItem('accessToken');

if(token){
    showProfilePage();
}

signupBtn.addEventListener('click',()=>{
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const signupMsg = document.getElementById('signupMsg')

    // Check if all the data are not entered  
    const confirm_password = document.getElementById('confirm-password').value
    if(name && email && password && confirm_password ){
        //display success msg
    if(password===confirm_password){
        signupMsg.innerText = "Successfully Signed Up!";
        signupMsg.className = 'success';

        const user = {
            name: name,
            email: email,
            password: password,
            accessToken: generateAccessToken()
          };
        console.log(user)

        //store the user obj in local storage
        localStorage.setItem('accessToken', user.accessToken)
        localStorage.setItem('user', JSON.stringify(user))
        console.log(window.location.href)
        //direct to profile Page
        showProfilePage();
    }
    }
    
    else{
        signupMsg.innerText = "Error : All the fields are mandatory";
        signupMsg.className = 'error';
    }
})

function generateAccessToken(){
    // Generate a random 16-byte string for access token
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 16; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

function showProfilePage() {
    
    window.location.href = "/PatilDivyani/F3_WeeklyTest_2/profile.html"
}