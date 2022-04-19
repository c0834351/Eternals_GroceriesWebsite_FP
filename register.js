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

	if(password.value.length <= 6){
		messages.push('password is required')
	}

	if(messages.length > 0){
		e.preventDefault()
		errorelement.innerText=messages.join(', ')
	}
})
