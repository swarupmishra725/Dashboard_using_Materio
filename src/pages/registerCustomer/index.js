
import {useState} from 'react'
import { v4 as uuid } from 'uuid';
import Message from '../../views/Message'
import Link from 'next/link';
import axios from 'axios'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { makeStyles } from "@material-ui/core/styles"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'


import AccountGroup from 'mdi-material-ui/AccountGroup'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles((theme) => ({
    card:{
        height:'50vh',
        marginTop:'20px',
      border:'1px solid #7fab07',borderStyle:'dashed',width:'99%',paddingTop:'50px',paddingBottom:'10px',
        [theme.breakpoints.down("sm")]:{
            height:'50vh',
          marginTop:'5px',
        
          paddingTop:'20px',
          paddingBottom:'20px',
                 
    
     }  
      },
      inputFieldContainer:{
        display:'flex',fontWeight:'500',color:'#d4220f',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',marginLeft:'40px',marginRight:'40px'
      },      
      inputFieldName:{
        fontWeight:'500',
        fontSize:'18px',
      [theme.breakpoints.down("sm")]:{
        fontWeight:'500',
        fontSize:'15px'  
      }
      },
      inputField:{
        width:'60%'
      },
      searchVendorBtnContainer:{
        width:'100%',display:'flex',justifyContent:'flex-end',paddingRight:'10px',
        [theme.breakpoints.down("sm")]:{
          justifyContent:'center'
    
     }
      },
      searchVendorBtn:{
        background : "#9ed406",
        marginTop:'10px',
        fontWeight:600,
        color:'#d4220f',
        textTransform:'none',
      },
      container:{
        marginTop:'15px',
       display:'flex',
       padding:'0px 20px',
       alignItems:'center',
       justifyContent:'space-between'
      },
      registeredCustomerBtn:{
       textTransform:'capitalize',
       fontSize:'20px'  
      },

}))

const initialInfo = {
     
      name: "",
      email: "",
      dob:"",
      phone: "",
      address: "",
      idProof: ""
     
}
const RegisterCustomer = ()=>{
 
    const classes = useStyles();
    const [message,setMessage] = useState({});
    const [customerRegistrationInfo,setCustomerRegistrationInfo] = useState(initialInfo); 
    const handleChange = (e)=>{
        setCustomerRegistrationInfo({...customerRegistrationInfo,[e.target.name]:e.target.value});
    }
    const registerCustomer = async()=>{
      const unique_id = uuid();
      const small_id = unique_id.slice(0,8)
        await axios.post("http://localhost:3006/customers",{id:small_id,...customerRegistrationInfo})
                   .then((res)=> setMessage({text:"Information has been submitted...",color:"green"})) 
                   .catch((err)=>setMessage({text:"Something went wrong",color:"red"}))

                   setTimeout(()=>{
                    setMessage({})
                    setCustomerRegistrationInfo(initialInfo)
                   },3000)
    console.log(customerRegistrationInfo)
    }

return (
    <Card style={{padding:'0px 10px 10px 10px',boxShadow:'0 0 0 0',borderRadius:'0'}}>
        <Box className={classes.container}>
        <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                fontSize: '1.5rem !important'
              }}
            >
              Register Customer
            </Typography>
            <Box style={{display:'flex',alignItem:'center'}}>

            <AccountGroup/>&nbsp;&nbsp;<Link href='registeredCustomer/'><a>Customers</a></Link>
    
    </Box>
</Box>
  <Grid container>
             <Grid item xs={12} md={6}  >
             <Card className={classes.card} >
             <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Customer Name</div>
             <TextField
                 className={classes.inputField} 
                 name='name' 
                 value={customerRegistrationInfo.name}              
                placeholder='Customer Name' 
                onChange={(e)=>handleChange(e)} 
              />
               </div>
             <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Customer E-Mail</div>
             <TextField
                 className={classes.inputField}                
                placeholder='Customer E-Mail' 
                name='email'
                value={customerRegistrationInfo.email}
                onChange={(e)=>handleChange(e)} 
              />
               </div> 

               

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Customer DOB</div>
             <TextField
             type='date'
                 className={classes.inputField}
                 name='dob'                
                 value={customerRegistrationInfo.dob}
                placeholder='Customer DOB' 
                onChange={(e)=>handleChange(e)} 
              />
               </div> 
              
               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Contact Number</div>
             <TextField
                 className={classes.inputField}    
                 name='phone'            
                 value={customerRegistrationInfo.phone}
                 placeholder='Contact Number'
                onChange={(e)=>handleChange(e)}  
              />
               </div>
               
             </Card>
             </Grid>
             <Grid item xs={12} md={6}  >
             <Card className={classes.card} >
             <div
            style={{
              alignItems: 'center',
              color: '#d4220f',
             marginBottom:'14px',
              marginLeft: '40px',
              marginRight: '40px'
            }}
          >
            <div className={classes.inputFieldName}>Customers Address</div>
            <TextField
             value={customerRegistrationInfo.address}
              className={classes.inputField}
            
              style={{ width: '100%' }}
             placeholder='Customer Address'
              
              name='address'
             
              onChange={handleChange}
              
            />
              
           
          </div>

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Customer ID</div>
             <TextField
                 className={classes.inputField}
                 type='file'
                 value={customerRegistrationInfo.idProof}
                 name='idProof'                
                placeholder='ID Proof' 
                onChange={(e)=>handleChange(e)} 
              />
               </div>  
             </Card>
             </Grid>
             <div className={classes.searchVendorBtnContainer} >
             <div style={{width:'100%',textAlign:'center',justifyContent:'center',display:'flex'}}>
             <Message message={message}/>
            </div>
            <Button  
              size='small'
              className={classes.searchVendorBtn}
              onClick={registerCustomer}
            >
             Submit
            </Button>
            </div>
        </Grid>
    </Card>
)
}

export default RegisterCustomer