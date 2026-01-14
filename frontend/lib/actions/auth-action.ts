// server side processing
"use server";
import {register} from "../api/auth";
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
