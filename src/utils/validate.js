export const checkValidData = (email, password)=>{

    const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid)return <p>Email is not valid</p>

    if(!isPasswordValid) return <p>Password is not valid</p>

    return null

}