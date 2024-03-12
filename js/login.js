// step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function(){
        
        // step-2: get the email address inside the email field
        // always remember to use .value to get text from an input field
        const emailField =document.getElementById("user-email");
        const email = emailField.value;

        //Step-3: get the password inside the password field
        const passwordField = document.getElementById("user-password");
        const password = passwordField.value;
        
        // DANGER Do not verify email password on the client side.

        // Step-4: Verify Email and Password for valid user or not.
        if(email==="moshiur@gmail.com" && password==="sec1234"){
                // Redirect another page after verify valid user
                window.location.href ="bank.html";
        }
        else{
                // Show alert to user for invalid email or password
                alert("Please input Valid email and password");
        }

})