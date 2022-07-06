// ** MUI Imports
import { useState,useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'
import TableDense from 'src/views/tables/TableDense'
import TableSpanning from 'src/views/tables/TableSpanning'
import TableCustomized from 'src/views/tables/TableCustomized'
import TableCollapsible from 'src/views/tables/TableCollapsible'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";



// const TextField = styled('div')(() => ({
//  height:'20px'
const useStyles = makeStyles((theme) => ({
  
  customerInfoSubmitBtn:{
    background : "#9ed406",
    marginTop:'10px',
    fontWeight:600,
    color:'#d4220f',
    textTransform:'none',
  },
  inputFieldContainer:{
    [theme.breakpoints.down("sm")]:{
      marginLeft:'5px',
      marginRight:'5px',
    }
  }
  ,
  inputFieldName:{
    fontWeight:'600',
  [theme.breakpoints.down("sm")]:{
    fontWeight:'500',
    fontSize:'small'  
  }
  },
  inputField:{
    fontWeight:'600',
    [theme.breakpoints.down("sm")]:{
         
         fontWeight:300,
         fontSize:'5px'          

    } 
  },
  card:{
    height:'50vh',
  border:'1px solid #7fab07',borderStyle:'dashed',width:'99%',paddingTop:'50px',paddingBottom:'10px',
    [theme.breakpoints.down("sm")]:{
      marginTop:'5px',
      height:'auto',
      paddingTop:'20px',
      paddingBottom:'20px',
             

 }  
  },
  customerInfoSubmitBtnContainer:{
    width:'100%',display:'flex',justifyContent:'flex-end',paddingRight:'10px',
    [theme.breakpoints.down("sm")]:{
      justifyContent:'center'

 }
  }


}));
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
const countries = [
  {
    value:'United Kingdom',
    label:'United Kingdom',
  },
  {
    value:'India',
    label:'India',
  },
  {
    value:'Germany',
    label:'Germany',
  },
]
const vendorStatusType = [
  {
    value:'Pending Verification',
    label:'Pending Verification',
  },
  {
    value:'Verified',
    label:'Verified',
  },
  {
    value:'Inactive',
    label:'Inactive',
  },

]
const customerAreSelfServeType = [
  {
    value:'No: Vendor Uploads for Customers',
    label:'No: Vendor Uploads for Customers',
  },
  {
    value:'Yes: Customer Uploads by self',
    label:'Yes: Customer Uploads by self',
  }
  
]
const initialCustomerInfo = {
      uniqueVendorId : '',
      otherTradingName:'',
      soleTrader:'Yes',
      registrationNumber:'',
      country:'United Kingdom',
      vendorStatus:'Pending Verification',
      customerAreSelfServe:'No: Vendor Uploads for Customers'

}
const MUITable = () => {
  const classes = useStyles();
  const [users,setUsers] = useState([]);
  const [tabStatus,setTabStatus] = useState('add');
  const [customerInfo,setCustomerInfo] = useState(initialCustomerInfo);
 
  useEffect(()=>{
    getAllUsers();
  },[])
  const getAllUsers = async()=>{
    await axios.get("http://localhost:3006/users")
                .then((res)=>setUsers(res.data))
                .catch((error)=>console.log(error));
  }

  const handleChange = (event) => {
    setCustomerInfo({...customerInfo,[event.target.name]:event.target.value});
  
  };
  const submitCustomerInfo = ()=>{
    console.log(customerInfo);
    setCustomerInfo(initialCustomerInfo);
    // backend api will be called here
  }
  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            MUI Tables
          </Link>
        </Typography>
        <Typography variant='body2'>Tables display sets of data. They can be fully customized</Typography>
      </Grid> */}
      <Grid item xs={12} >
      <Card style={{display:'flex',gap:'1px',marginBottom:'0px',padding:'15px 10px 0px 10px',boxShadow:'0 0 0 0',borderRadius:'0'}}> 
        <Button
              size='small'
              sx={{ marginBottom: 7 }}
             style={{border:'solid 1px #282828',marginBottom:'0px',color:'#d4220f',fontWeight:'600',textTransform:'none',
                    background: tabStatus === 'add' ? '#f7ea9c' : 'none'
                   }}
             onClick={()=>setTabStatus("add")}
             >
              Add
            </Button>
            <Button
              size='small'
              style={{border:'solid 1px #282828',color:'#d4220f',fontWeight:'600',marginBottom:'0px',textTransform:'none',
              background: tabStatus === 'search' ? '#f7ea9c' : 'none'}}
              sx={{ marginBottom: 7 }}
              onClick={()=>setTabStatus("search")}
            >
              Search
            </Button>
            <Button
              size='small'
              style={{border:'solid 1px #282828',color:'#d4220f',fontWeight:'600',marginBottom:'0px',textTransform:'none',
              background: tabStatus === 'list' ? '#f7ea9c' : 'none'}}
              sx={{ marginBottom: 7 }}
              onClick={()=>setTabStatus("list")}
            >
              List
            </Button>
            </Card>
        <Card style={{padding:'0px 10px 10px 10px',boxShadow:'0 0 0 0',borderRadius:'0'}}>
        
           {tabStatus !== "" && tabStatus === "list" ? (
                    <TableBasic users={users}/>
           ) : tabStatus === "search" ? (
            <Card>
           search
            </Card>
           ) :
           (
            <Grid container >
            {/* <form noValidate autoComplete='off'  > */}
            <Grid item xs={12} md={6}  >
             <Card className={classes.card} >
               <div  className={classes.inputFieldContainer} style={{display:'flex',fontWeight:'500',color:'#d4220f',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',marginLeft:'40px',marginRight:'40px'}}>
                <div className={classes.inputFieldName}>Unique Vendor ID</div>
                <TextField type='text'
                variant="standard"
                
                className={classes.inputField}
                
                   style={{width:'60%', textColor:'#d4220f',paddingLeft:'15px'}}
                  name='uniqueVendorId' value={customerInfo.uniqueVendorId} placeholder='Unique Vendor ID'  onChange={(e)=>handleChange(e)}
                    
                    InputProps={{
    autoComplete:false,
    disableUnderline: true, 
  }} 
                     />
               
               </div>


               <div className={classes.inputFieldContainer} style={{display:'flex',color:'#d4220f',fontWeight:'500',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',marginLeft:'40px',marginRight:'40px'}}> 
                <div className={classes.inputFieldName}>Other Trading Name</div> 
                       <TextField type='text'
                        className={classes.inputField}
                variant="standard"
                required
                disableUnderline={true}
                   style={{width:'60%', color:'#d4220f',border:'2px solid #d4220f',paddingLeft:'15px',borderRadius:'5px'}}
                    name='otherTradingName'  value={customerInfo.otherTradingName}
                     placeholder='Other Trading Name' onChange={(e)=>handleChange(e)} 
                    InputProps={{
                         disableUnderline: true, // <== added this
  }} 
                     />
               
               </div>


               <div style={{display:'flex',fontWeight:'500',color:'#d4220f',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',marginLeft:'40px',marginRight:'40px'}}>
                <div className={classes.inputFieldName}>Individual/Sole Trader</div>
                <TextField
          className={classes.inputField}
          select
          required
          variant="standard"
          disableUnderline={true}
             style={{width:'60%',border:'2px solid #d4220f', color:'#d4220f',borderRadius:'5px'}}
             InputProps={{
              disableUnderline: true,
            }}
          name="soleTrader"
          value={customerInfo.soleTrader}
          onChange={handleChange}
          
         
        >
          {soleTrader.map((option) => (
            <MenuItem key={option.value} value={option.value} style={{color:'#d4220f'}}>
              &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
        </TextField>
        
               </div>
               <div style={{display:'flex',fontWeight:'500',color:'#d4220f',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',marginLeft:'40px',marginRight:'40px'}}>
                <div className={classes.inputFieldName}>Registration Number</div>
                <TextField
                 type='text'
                 required
                 className={classes.inputField}
                 variant="standard"
                 disableUnderline={true}
                    style={{width:'60%', color:'#d4220f',border:'2px solid #d4220f',paddingLeft:'15px',borderRadius:'5px'}}
                    InputProps={{
                     disableUnderline: true,
                   }}
                 name='registrationNumber'
                 value={customerInfo.registrationNumber}
                 placeholder='Registration Number' onChange={(e)=>handleChange(e)} />
               
               </div>
               <div style={{display:'flex',fontWeight:'500',color:'#d4220f',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',marginLeft:'40px',marginRight:'40px'}}>
               
                <div className={classes.inputFieldName}>Country of Operation</div>
                <TextField
          
          select
          required
          className={classes.inputField}
          variant="standard"
          disableUnderline={true}
             style={{width:'60%', textColor:'#d4220f',border:'2px solid #d4220f',borderRadius:'5px'}}
             InputProps={{
              disableUnderline: true,
            }}
          name="country"
          value={customerInfo.country}
          onChange={handleChange}
         
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value} style={{color:'#d4220f'}}>
             &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
        </TextField>
        
               </div>

             </Card>
            </Grid>
            <Grid item xs={12} md={6}>
            <Card className={classes.card} >
              
               
               <div style={{display:'flex',color:'#d4220f',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',marginLeft:'40px',marginRight:'40px'}}>
                <div className={classes.inputFieldName}> Vendor Status</div>
                <TextField
        
          select
          required
          className={classes.inputField}
          variant="standard"
          disableUnderline={true}
             style={{width:'60%',border:'2px solid #d4220f', color:'#d4220f',borderRadius:'5px'}}
             InputProps={{
              disableUnderline: true,
            }}
          name="vendorStatus"
          value={customerInfo.vendorStatus}
          onChange={handleChange}
         
        >
          {vendorStatusType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            &nbsp;&nbsp;  {option.label}
            </MenuItem>
          ))}
        </TextField>
        
               </div>
              
               <div style={{alignItems:'center',color:'#d4220f',marginTop:'40px',marginLeft:'40px',marginRight:'40px'}}>
               
                <div  className={classes.inputFieldName}>Customers are Self Serve?</div>
                <TextField
          variant="standard"
          required
          className={classes.inputField}
          disableUnderline={true}
             style={{width:'100%',border:'2px solid #d4220f', color:'#d4220f',borderRadius:'5px'}}
             InputProps={{
              disableUnderline: true,
            }}
          select
          name="customerAreSelfServe"
          value={customerInfo.customerAreSelfServe}
          onChange={handleChange}
          
        >
          {customerAreSelfServeType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
             &nbsp;&nbsp; {option.label}
            </MenuItem>
          ))}
        </TextField>
        
               </div>

             </Card>
            </Grid>
            <div className={classes.customerInfoSubmitBtnContainer} >
            <Button
              
              size='small'
              
              className={classes.customerInfoSubmitBtn}
              onClick={submitCustomerInfo}

            >
             Submit
            </Button>
            </div>
            {/* </form> */}
            </Grid>
           )
           }
           
        </Card>
      </Grid>
      {/* <Grid item xs={12}>
        <Card>
          <CardHeader title='Dense Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableDense />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Sticky Header' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Collapsible Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableCollapsible />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Spanning Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableSpanning />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Customized Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableCustomized />
        </Card>
      </Grid> */}
    </Grid>
  )
}

export default MUITable
