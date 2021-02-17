import React, { useState } from 'react';
import style from './style.module.css'

function FORM() {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    
    const [user, setuser] = useState({name:'', email:'', password: ''})
    const {name, email, password} = user

    const handleSumbit = (e) =>{
        console.log('form submited')
        console.log(user)
        e.preventDefault()
    }

    const handleChange = (e)=> {

        setuser({...user, [e.target.name]: e.target.value})

        // const fieldName = e.target.name

        // if(fieldName === 'name') {
        //     setuser({name: e.target.value, email, password})
        // }else if(fieldName === 'email') {
        //     setuser({name, email: e.target.value, password})
        // }else if(fieldName === 'password') {
        //     setuser({name, email, password: e.target.value})   
        // }
    }

    return(
        <div>
            <h2>register form</h2>
            <form action="#" onSubmit={handleSumbit}>
                <div className={style.formGroup}>
                    <label for="name" id="name">name</label>
                    <input type="text" name='name' value={name} onChange={handleChange} placeholder="enter your name"/>
                </div>
                <div className= {style.formGroup}>
                    <label for="email" id="email">email</label>
                    <input type="email" name='email' value={email} onChange={handleChange} placeholder="enter your email"/>
                </div>

                <div className= {style.formGroup}>
                    <label for="password" id="password">password</label>
                    <input type="password" name='password' value={password} onChange={handleChange} placeholder="enter your password"/>
                </div>
                <div>
                    <button type='submit'>register</button>
                </div>
            </form>
        </div>
    )
}

export default FORM;