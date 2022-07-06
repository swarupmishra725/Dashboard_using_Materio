import {useEffect,useState} from 'react'
import axios from 'axios';
import ListTable from '../../views/ListTable'
import { makeStyles } from "@material-ui/core/styles"
import AccountGroup from 'mdi-material-ui/AccountGroup'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

// const useStyles = makeStyles((theme) => ({
//     // container:{
//     //     marginTop:'15px',
//     //    display:'flex',
//     //    padding:'0px 20px',
//     //    alignItems:'center',
//     //    justifyContent:'space-between'
//     //   }
// }))
const registeredCustomer = ()=>{
    // const classes = useStyles();
    const tableHeadings = ["Name","E-mail","DOB","Contact Number","Address"];
    const [registeredCustomers,setRegisteredCustomers] = useState([]);
    useEffect(()=>{
        const getAllRegisteredCustomer = async()=>{
                       await axios.get("http://localhost:3006/customers")
                                  .then((res)=>setRegisteredCustomers(res.data))
                                  .catch((err)=>console.log(err))
                       
        }
        getAllRegisteredCustomer()
    },[])
    return (
<Card style={{padding:'0px 10px 10px 10px',boxShadow:'0 0 0 0',borderRadius:'0',paddingTop:'15px'}}>

<Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                fontSize: '1.5rem !important',
                alignItems:'center',
                display:'flex',
                marginBottom:'15px'
              }}
            >
             <AccountGroup sx={{fontSize:'40px'}}/>&nbsp;&nbsp; Registered Customers
            </Typography>
<ListTable  tableData={registeredCustomers}/>
</Card>
    )
}
export default registeredCustomer