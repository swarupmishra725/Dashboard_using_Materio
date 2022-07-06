import {useState,useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link'
// ** MUI Imports
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { makeStyles } from "@material-ui/core/styles"
import Button from '@mui/material/Button'
//icon
import AccountEdit from 'mdi-material-ui/AccountEdit'

const useStyles = makeStyles((theme) => ({
  table:{
    maxHeight:'70vh'
  },
  card:{
   
  border:'1px solid #7fab07',borderStyle:'dashed',paddingTop:'30px',paddingBottom:'10px',
//     [theme.breakpoints.down("sm")]:{
//       marginTop:'5px',
//       height:'auto',
//       paddingTop:'20px',
//       paddingBottom:'20px',
             

//  }  
  },
  btns:{
    display:'flex'
  }
}))

const VendorList = ()=>{
    const classes = useStyles();
    const [vendors,setVendors] = useState([])

    useEffect(()=>{
        const getAllVendor = async()=>{
            await axios.get("http://localhost:3006/vendors")
                        .then((res)=>{
                          console.log(res.data)
                          setVendors(res.data)
                        })                     
                        .catch((error)=>console.log(error))
          }
        getAllVendor();
      },[])
     
    return(
      <Card className={classes.card} >
        <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth:650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Id</TableCell>
              <TableCell align='left'>Other Trading Name</TableCell>
              <TableCell align='left'>Individual/Sole Trader</TableCell>
              <TableCell align='left'>Registration Number</TableCell>
              <TableCell align='left'>Coutry of Operation </TableCell>
              <TableCell align='left'>Vendor Status</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendors.map(vendor => (
              <TableRow
                key={vendor.name}
               
              >
                <TableCell component='th' scope='row'>
                  {vendor.uniqueVendorId}
                </TableCell>
                <TableCell align='left'>{vendor.otherTradingName}</TableCell>
                <TableCell align='left'>{vendor.soleTrader}</TableCell>
                <TableCell align='left'>{vendor.registrationNumber}</TableCell>
                <TableCell align='left'>{vendor.country}</TableCell>
                <TableCell align='left'>{vendor.vendorStatus}</TableCell>
                <TableCell align='left' className={classes.btns}>
                   <Button>
                     edit
                   </Button>
                   <Button>
                     delet
                   </Button>
                   <Link href={{ pathname: "/workList/vendorProfile/", query: { id: vendor.id } }}><a>profile</a></Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
    )
}
export default VendorList;