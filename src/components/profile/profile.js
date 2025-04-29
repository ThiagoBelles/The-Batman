import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function Profile(){
    const {login} = useContext(UserContext)

    return (
        <div>
            {login ? 'Dados do Usuário' : 'Faça seu Login'}
            
        </div>
    )
}

export default Profile;