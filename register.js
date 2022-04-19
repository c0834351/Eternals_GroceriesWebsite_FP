const username = document.getElementById('usernamevalue')
const email = document.getElementById('emailvalue')
const password = document.getElementById('passwordvalue')
const form = document.getElementById('RegisterForm')
const errorelement = document.getElementById('error')


form.addEventListener('submit', (e) =>{
	let messages = []
	if(username.value == '' || username.value == null){
		messages.push('UserName is required')
	}

	if(email.value == '' || email.value == null){
		messages.push('Email is required')
	}

	if(password.value.length == 0){
		messages.push('password is required')
	}

	if(password.value.length > 1 && password.value.length < 6){
		messages.push('password should be more than 6 characters')
	}

	if(messages.length > 0){
		e.preventDefault()
		errorelement.innerText=messages.join(', ')
	}
})
