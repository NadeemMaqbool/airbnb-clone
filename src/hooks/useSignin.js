import {useState} from "react";
import {useAuthContext} from "./useAuthContext"

export const useSignin = () => {
    const [error,setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useAuthContext()

    const SignIn = async (props) => {
        setError("")
        setIsLoading(true)
        const {email, password} = props

        const response = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password}),
        })

        const data = await response.json()
        
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: "LOGIN", payload: data})
        } else {
            setError(data.error)
        }
        
        setIsLoading(false)
    }

    return {SignIn, error, isLoading}
}
