function checkInfoLogin(form) {
  var errors=[];
  var email=form.loginEmail.value;
  var password=form.loginPass.value;

  if(email==""){
    errors.push('Email field is empty.');

   }

   if(password==""){
      errors.push('Password field is empty.');

   }

   if(errors.length > 0){
     var message = "Errors:\n\n"
     for(var i = 0;i<errors.length;i++){
       message+=errors[i] + "\n";
     }
     alert(message);
     return false;
   }

}
