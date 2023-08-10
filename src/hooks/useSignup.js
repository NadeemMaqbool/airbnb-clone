import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useAuthContext()

    const SignUp = async (props) => {
        setIsLoading(true)
        setError("")

        const {
            firstName, 
            lastName, 
            email, 
            password, 
            confirmPassword
        } = props;

        const resp = await fetch('/api/users/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,    
                password: password,
                confirm_password: confirmPassword,
                email: email   
            })
        })

        const data = await resp.json()
        
        if (resp.ok) {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: 'LOGIN', payload: data})
        } else {
            console.log(data.error)
            setError(data.error)
        }
        setIsLoading(false)
    }

    return {SignUp, error, isLoading}
}

