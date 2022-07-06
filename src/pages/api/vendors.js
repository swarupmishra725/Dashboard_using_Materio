import * as fs from 'fs'

export default function handler(req,res){
    console.log(req.method)
    fs.readFile(`DataBase/vendors.json`,'utf-8',(err,data)=>{

       
        if(err){
            res.status(500).json({error:"Data not available"})
        }
        else{
           
            console.log(JSON.parse(data))
            res.status(200).json(JSON.parse(data))
        }
       
    })
    
}