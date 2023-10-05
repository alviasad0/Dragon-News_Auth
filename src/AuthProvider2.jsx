import { createContext } from "react";

const AuthContext = createContext(null)
const AuthProvider2 = ({ children }) => {


    const allExpots = {
         user 
     }
    return (
        <AuthContext.provider value={allExports}>
            {children }
        </AuthContext.provider>
    ) 

};

export default AuthProvider2;