import { useRouter } from "next/router";
import Card from '@mui/material/Card'
const vendorProfile = ()=>{
    const router = useRouter();
    return(
        <Card style={{display:'flex',gap:'1px',marginBottom:'0px',padding:'15px 10px 0px 10px',boxShadow:'0 0 0 0',borderRadius:'0'}}>
        <h6>Vendor Profile</h6>    
        </Card>
    )
    
}
export default vendorProfile