import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { Authcontext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(Authcontext)
    

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    if (user) {
        return children;
    }
    else{
        return (
            <Navigate to="/login"></Navigate>
            
        )
    }
   
};

export default PrivateRoute;