export const checkValidData = (email,password)=>{
     const emailregex = /^\S+@\S+\.\S+$/;
     const isValidEmail = emailregex.test(email);

     const passregex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
     const isValidPass = passregex.test(password);

     if(!isValidEmail) return "Email ID is not valid"
     if(!isValidPass) return "Password is not valid"
     return null


} 