const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click",checkCredentials);

function checkCredentials(){
    // appeler API pour vérifier les crédentials en BDD

    if(mailInput.value=="test@mail.com" && passwordInput.value == "123"){
        // récup le token 
        const token = "sgdfhldfgvbdslfjslfdjlsbdfhlfbslfvbhdlsqfhdsjfbsqdlbbjdskqlb";
        setToken(token);
        //placer token en coockie
        
        setCookie(RoleCookieName,"admin",7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid")
    }
}
