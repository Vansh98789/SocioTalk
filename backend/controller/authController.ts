import type { Request, Response } from "express";
import pool from "../db/db"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SALT_ROUND=10

// signup logic-->

export const signup=async(req:Request,res:Response)=>{
    const { username,email, password  } = req.body;
    const hashedPassword=await bcrypt.hash(password,SALT_ROUND);
    
    if(!email || !password){
        return res.status(400).json({msg:"credential missing"})
    }
    const user=await pool.query('INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING id,email',[username,email,hashedPassword]);
    if(!user){
        return res.status(400).json({msg:"error in registering"})
    }
    res.status(201).json({
        msg:"user succesfully registered",
        user:user.rows[0],
    });
}

//sigin logic-->

export const sigin=async(req:Request,res:Response)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({msg:"credential missing"})
    }
    const user=await pool.query('SELECT *  FROM users where email=$1',[email])
    if(user.rows.length===0){
        return res.status(400).json({msg:"User not found "})
    }
    const ress = user.rows[0];
    const pass=await bcrypt.compare(password,ress.password);
    if(!pass){
        return res.status(400).json({msg:"Invalid password "})
    }
    const token=jwt.sign({id:ress.id},"fjoidas",{expiresIn:'1h'});
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        maxAge: 3600000 
    });
    res.status(201).json({
    message: 'Login successful',
    user: { id: ress.id, email: ress.email },
  });

}