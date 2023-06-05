import { authApi } from '@/api-client/index';
import React from 'react';

const LoginPage = () => {

    async function handleLoginClick() {
        try {
            await authApi.login({
                username: 'test1',
                password: '123123'
            })
        } catch (error) {
            console.log("🚀 ~ file: login.js:13 ~ handleLoginClick ~ error:", error)
            
        }
    }
    async function handleGetProfileClick() {
        try {
            await authApi.getProfile()
        } catch (error) {
            console.log("🚀 ~ file: login.js:13 ~ handleLoginClick ~ error:", error)
            
        }
    }
    async function handleLogOutClick() {
        try {
            await authApi.logout()
        } catch (error) {
            console.log("🚀 ~ file: login.js:13 ~ handleLoginClick ~ error:", error)
            
        }
    }
    return (
        <div>
            <h1>Login Page</h1>

            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleGetProfileClick}>Get Profile</button>
            <button onClick={handleLogOutClick}>Logout</button>
        </div>
    );
};

export default LoginPage;