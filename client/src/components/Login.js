import React, { useEffect, useRef } from "react"
import { Redirect, Link } from "react-router-dom"
import { useStoreContext } from "../utils/GlobalStore"
import fetchJSON from "../utils/API"

function Login(){
    const [{ authOk }, dispatch ]= useStoreContext()

    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputRememberMe = useRef()

    async function userLogin( e ){
        console.log( `[userLogin]` )
        e.preventDefault()
        
        const saveData = {
            email: inputEmail.current.value,
            password: inputPassword.current.value,
            rememberMe: inputRememberMe.current.checked
        }

        if( saveData.email === "" ) {
            inputEmail.current.focus()
            dispatch({ type: 'ALERT_MESSAGE', message: 'Please enter your email!' })
            return
        }
    
        if( saveData.password === "" || saveData.password.length < 8 ) {
            inputPassword.current.focus()
            dispatch({ type: 'ALERT_MESSAGE', message: 'Please enter your password!' })
            return
        }

        const { status, session, userData, message }= await fetchJSON( '/api/users/login', 'post', saveData )            
        if( !status ){
            // clear any session
            localStorage.session = ''
            dispatch({ type: 'ALERT_MESSAGE', message })
            return
        }

        // remember email if user wanted
        if( inputRememberMe && inputRememberMe.current.checked ){
            localStorage.email = inputEmail.current.value
        } else {
            localStorage.email = ''
        }
         
        // login ok, saving session & saving userData
        localStorage.session = session
        dispatch({ type: 'USER_LOGIN', data: userData })
    }

    // at startup we initialize a few things
    useEffect( function(){
        inputEmail.current.value = localStorage.email || ''
        inputRememberMe.current.checked = true
    }, [] )

    return (
        <>
            { authOk ? <Redirect to='/tasks' /> : '' }
            <form>
            <div class="card mt-5">
                <div class="card-header">
                    <h1>Login</h1>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input ref={inputEmail} id="email" type="email" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="userPassword">Password</label>
                        <input ref={inputPassword} id="userPassword" type="password" class="form-control" />
                    </div>
                </div>                    
                <div class="card-footer">
                    <button onClick={userLogin} type="button" class="btn btn-primary mx-1">Login</button>
                    &nbsp; 
                    <input ref={inputRememberMe} id='rememberMe' type="checkbox" />                        
                    <label class='text-secondary' for='rememberMe'>Remember Me</label> &nbsp;
                    <Link to="/register" class="mx-3">Need to Register?</Link>
                </div>
            </div>
            </form>
        </>
    )
}

export default Login