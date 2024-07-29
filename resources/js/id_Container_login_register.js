const container = document.querySelector("#container-login-register")
const direct_to_login = container.querySelector(".direct-to-login")
const direct_to_register = container.querySelector(".direct-to-register")
direct_to_login.addEventListener("click", (e) => {
    e.preventDefault()
    container.querySelector(".register_").classList.add('none')
    container.querySelector('.login_').classList.remove('none')
    const title = container.querySelector('.tt-main')
    title.textContent = 'LOGIN'
})

direct_to_register.addEventListener("click", (e) => {
    e.preventDefault()
    container.querySelector('.login_').classList.add('none')
    container.querySelector('.register_').classList.remove('none')
    const title = container.querySelector('.tt-main')
    title.textContent = 'REGISTER'

})


container.querySelector(".close").addEventListener('click', () =>{
    container.classList.add('none')
    document.querySelector('.blackscreen').classList.add('none')
})

const account_button = document.querySelector("#header .navbars .accout-js")
account_button.addEventListener('click', () => {
    document.querySelector('.blackscreen').classList.remove('none')
    container.classList.remove('none')
})
