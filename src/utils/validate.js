export const checkValidData = (name, email, password)=>{

    const isNameValid = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(name)

    const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const isPasswordValid =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)

    if(!isNameValid) return <p>Provide Full Name</p>

    if(!isEmailValid)return <p>Email is not valid</p>

    if(!isPasswordValid) return <p>Password is not valid</p>

    return null

}