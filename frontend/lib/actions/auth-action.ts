// server side processing
"use server";
import {login,register} from "../api/auth";
import { setAuthToken, setUserData } from "../cookie";
export const handleRegister = async (formData: any) => {
    try{
        const res=await register(formData);
        if(res.success){
            return { 
                success: true, 
                message: "Registration successful" 
            };
        }
        return {success:false, message:res.message || "Registration failed"};
    }catch(err:Error | any){
        return {success:false, message: err.message || "Registration failed"};
    } 
};


export const handleLogin = async (formData: any) => {
     try{
        const res=await login(formData);
        if(res.success){
            setAuthToken(res.token);
            setUserData(res.data);

            return { 
                success: true, 
                message: "Login successful" 
            };
        }
        return {success:false, message:res.message || "Login failed"};
    }catch(err:Error | any){
        return {success:false, message: err.message || "Login failed"};
    } 
}