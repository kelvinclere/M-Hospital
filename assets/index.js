function matchPassword() {  
    var pw1 = document.getElementById("password1");  
    var pw2 = document.getElementById("password2");  
    if(pw1 !== pw2)  
    {   
      alert("Passwords did not match");  
    } else {  
      alert("Password created successfully");  
    }  
  }  