import jwt from "jsonwebtoken";
export const protect=(req,res,next)=>{const token=req.headers.authorization?.split(" ")[1];if(!token)return res.status(401).json({message:"Login required"});try{req.user=jwt.verify(token,process.env.JWT_SECRET);next()}catch{return res.status(401).json({message:"Invalid token"})}};
export const allowRoles=(...roles)=>(req,res,next)=>roles.includes(req.user.role)?next():res.status(403).json({message:"Access denied"});
