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
import AddVendor from 'src/views/workList/AddVendor'
import SearchVendor from 'src/views/workList/SearchVendor'
import VendorList from 'src/views/workList/VendorList'



import TableBasic from 'src/views/tables/TableBasic'
import TableDense from 'src/views/tables/TableDense'
import TableSpanning from 'src/views/tables/TableSpanning'
import TableCustomized from 'src/views/tables/TableCustomized'
import TableCollapsible from 'src/views/tables/TableCollapsible'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";



const workList = () => {
  const [tabStatus,setTabStatus] = useState('add');
  

 
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
            <VendorList />
           ) : tabStatus === "search" ? (
            <SearchVendor/>
           ) : 
           (
            <AddVendor/>
           )
          
           }
           
        </Card>
      </Grid>
          </Grid>
  )
}

export default workList;
