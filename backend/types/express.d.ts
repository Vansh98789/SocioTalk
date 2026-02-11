import type { Request } from "express";

export interface AuthRequest extends Request {
  user?: { id: number; email?: string }; 
  cookies: { [key: string]: string }; 
}



// can also do like this in here we also do not have to declare authrequest everywhere

// import type { Request } from "express";

// declare global{
//   namespace Express{
//     interface Request{
//       userid?:{
//         id:number;
//         email?:string
//       };
//     }
//   }
