import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = (state, dispatch) => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error("UseAuthContext should be defined within the scope of AuthContextProvider")
    }

    return context
}

