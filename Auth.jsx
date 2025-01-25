import React from 'react'

const Auth=(wrap=>{
    return ({isAuth,...props})=>
    {
        if(isAuth){
            return <p>acces denied.</p>
        }
        return<wrap {...props}/>
    }

}

)
export default Auth
