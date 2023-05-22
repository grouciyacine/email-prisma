import { prisma } from "../../lib/prisma";

export default async function handler(req:any,res:any){
const {name,email,feedbackType,messages}=req.body;
    try{
const submission=await prisma.feedback.create({
    data:{
        email,
        name,
        feedbackType,
        messages,
    }
})
res.status(200).json({msg:"Submitted Success",submission})
}catch(err){
    res.status(400).json(err)
}
}
export  async function get(req:any,res:any){
    try{
const feedback=await prisma.feedback.findMany()
res.status(200).json(feedback)
    }catch(err){
        res.status(404).json(err)
    }
}