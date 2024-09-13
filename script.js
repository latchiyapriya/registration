const form = document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
const email=document.getElementById('email');

const name_error = document.getElementById('name_error');
const password_error = document.getElementById('password_error');
const cpassword_error = document.getElementById('cpassword_error');
const email_error = document.getElementById('email_error');

form.addEventListener('submit', (e) => {
    if(username.value === '' || username.value == null)
        {
            e.preventDefault();
            name_error.innerHTML = "Name is Required";
        }
    else
        {
            name_error.innerHTML = "";  
        }

    if(password.value === '' || password.value == null)
        {
            e.preventDefault();
            password_error.innerHTML = "Password is Required";
        }
    else if(password.value.length < 8)
        {
            e.preventDefault();
            password_error.innerHTML = "Password must be atleast 8 characters";
        }
    else
        {
            password_error.innerHTML="";
        }

    if(cpassword.value === '' || cpassword.value == null)
        {
            e.preventDefault();
            cpassword_error.innerHTML = "Confirm Password is Required";
        }
     else if(cpassword.value !== password.value)
        {
            e.preventDefault();
            cpassword_error.innerHTML = "Password does not match";
        }
        else
        {
             cpassword_error.innerHTML="";
        }

        var email_check="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
                
    if(!email.value.match(email_check))
        {
            e.preventDefault();
            email_error.innerHTML="Valid Email is Required";
        }
        else
        {
            email_error.innerHTML="";
        }
    });