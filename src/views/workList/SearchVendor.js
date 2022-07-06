import {useState} from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { makeStyles } from "@material-ui/core/styles"
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'


const useStyles = makeStyles((theme) => ({
    card:{
        height:'60vh',
      border:'1px solid #7fab07',borderStyle:'dashed',width:'99%',paddingTop:'50px',paddingBottom:'10px',
        [theme.breakpoints.down("sm")]:{
          marginTop:'5px',
          height:'auto',
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
}))

const soleTrader = [
    {
      value: 'Yes',
      label: 'Yes',
    },
    {
      value: 'No',
      label: 'No',
    }
  ];

//   const initialCustomerInfo = {
//     uniqueVendorId : '',
//     otherTradingName:'',
//     soleTrader:'Yes',
//     registrationNumber:'',
//     country:'United Kingdom',
//     vendorStatus:'Pending Verification',
//     customerAreSelfServe:'No: Vendor Uploads for Customers'

// }
// style={{display:'flex',fontWeight:'500',color:'#d4220f',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',marginLeft:'40px',marginRight:'40px'}}
const SearchVendor = ()=>{
    const classes = useStyles();
    const [vendorToSearch,setVendorToSearch] = useState({}); 
    const handleChange = (e)=>{
         setVendorToSearch({...vendorToSearch,[e.target.name]:e.target.value});
    }
    const searchVendor = ()=>{
        console.log(vendorToSearch)
        // search api will be called here
    }
    return(
        <Grid container>
             <Grid item xs={12} md={6}  >
             <Card className={classes.card} >
             <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Unique Vendor ID</div>
             <TextField
                 className={classes.inputField}                
                placeholder='Unique Vendor ID' 
                name='uniqueVendorId'
                onChange={(e)=>handleChange(e)} 
              />
               </div> 

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Business Name</div>
             <TextField
                 className={classes.inputField} 
                 name='businessName'               
                placeholder='Business Name' 
                onChange={(e)=>handleChange(e)} 
              />
               </div> 

               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Other Trading Name</div>
             <TextField
                 className={classes.inputField}
                 name='otherTradingName'                
                placeholder='Other Trading Name' 
                onChange={(e)=>handleChange(e)} 
              />
               </div> 
               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Individual/Sole Trader</div>
             <TextField
                 className={classes.inputField}                
                 select
                 required
                 name='soleTrader'
                 onChange={(e)=>handleChange(e)} 
              >
                {soleTrader.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
                
              </TextField>
               </div>  
               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Registration Number</div>
             <TextField
                 className={classes.inputField}    
                 name='registrationNumber'            
                placeholder='Registration Number'
                onChange={(e)=>handleChange(e)}  
              />
               </div> 
               <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Country of Operation</div>
             <TextField
                 className={classes.inputField}                
                 select
                 required
                 name='countryOfOperation'
                 onChange={(e)=>handleChange(e)} 
              >
                {soleTrader.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
                
              </TextField>
               </div> 
             </Card>
             </Grid>
             <Grid item xs={12} md={6}  >
             <Card className={classes.card} >
             <div className={classes.inputFieldContainer}>
             <div className={classes.inputFieldName}>Vendor Status</div>
             <TextField
                 className={classes.inputField}                
                 select
                 required
                 onChange={(e)=>handleChange(e)} 
              >
                {soleTrader.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
                
              </TextField>
               </div> 
             </Card>
             </Grid>
             <div className={classes.searchVendorBtnContainer} >
            <Button  
              size='small'
              className={classes.searchVendorBtn}
              onClick={searchVendor}
            >
             Submit
            </Button>
            </div>
        </Grid>
    )
}
export default SearchVendor;