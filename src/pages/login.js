import { authApi } from "@/api-client/index";
import { useAuth } from "@/hooks/use-auth";
import React from "react";

const LoginPage = () => {
  const { data: profile, error, login, logout } = useAuth({ revalidateOnMount: false });

  async function handleLoginClick() {
    try {
      await login();
    } catch (error) {
      console.log("🚀 ~ file: login.js:13 ~ handleLoginClick ~ error:", error);
    }
  }
  async function handleGetProfileClick() {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log("🚀 ~ file: login.js:13 ~ handleLoginClick ~ error:", error);
    }
  }
  async function handleLogOutClick() {
    try {
      await logout();
    } catch (error) {
      console.log("🚀 ~ file: login.js:13 ~ handleLoginClick ~ error:", error);
    }
  }
  return (
    <div>
      <h1>Login Page</h1>

      <p> Profile: {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogOutClick}>Logout</button>
    </div>
  );
};

export default LoginPage;
