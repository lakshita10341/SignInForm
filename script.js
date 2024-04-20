

const handleSubmit=async(event)=>{
event.preventDefault();
try{
const email=document.getElementById("email").value;
const password=document.getElementById('password').value;
const ele=document.getElementsByClassName('centered-element')[0];

console.log(email);

const response=await fetch("https://reqres.in/api/login",{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify({ email, password })

});
const data=await response.json();
console.log(response.status);
console.log('Login successful', data);

if(response.status){ 
if(response.status===200){
  console.log('change');
  ele.innerHTML = '<p>Login Successful: ' + JSON.stringify(data) + '</p><br><a href="#" onClick="location.reload()">Click here to login again</a>';
}else if(response.status===400){
  ele.innerHTML='<p>'+ JSON.stringify(data)+'</p><br><a href="#" onClick="location.reload()">Click here to login again</a>';
}

}

}catch(err){
  console.log("Error:" , err);
}
}

const form=document.getElementById("LogIn-form");
form.addEventListener('submit', handleSubmit);