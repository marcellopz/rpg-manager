
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Navigate } from 'react-router-dom';

const SignOut: React.FC = () => {
    const { signOutRpg, authUser } = useContext(AuthContext);

    signOutRpg();

    if (authUser) {
        return (
            <h1>Logging out</h1>
        );
    }

    return (
        <Navigate to="/" />
    );
};

export default SignOut;
