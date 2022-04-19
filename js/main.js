import grocerydb, {
    bulkcreate,
    getData
} from './Module.js';

let db = grocerydb("GroceriesDB", {
    users: '++id, username, email, password'
});

//input tags of register page
if(window.location.href == "http://127.0.0.1:5500/account.html"){
const username = document.getElementById("usernamevalue");
const password = document.getElementById("passwordvalue");
const email = document.getElementById("emailvalue");

const register = document.getElementById("registerbtn");

register.onclick = (event)=>{
    bulkcreate(db.users, {
        username: username.value,
        email: email.value,
        password: password.value
    })
}
}

//input tags of login page
if(window.location.href == "http://127.0.0.1:5500/login.html?"){
const un = document.getElementById("username");
const pwd = document.getElementById("password");

const login = document.getElementById("loginbtn");

login.onclick = (event)=>{
    let userfound = false;
    getData(db.users,(data)=>{
        if(data){
        for(const value in data){
            console.log(data.username);
            if(un.value == data.username && pwd.value == data.password){
                userfound = true;
                window.open("http://127.0.0.1:5500/index.html");
                break
            } else {
                userfound = false;
            }
        }
        if(userfound){
            window.open("http://127.0.0.1:5500/index.html");
        }
    }
    })
}
}