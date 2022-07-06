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
 
  },
  btns:{
    display:'flex'
  }
}))

const ListTable = ({tableData})=>{
    const classes = useStyles()
    let headings = []
    let data = []
   
    for(let i in tableData[0]){
        headings.push(i)
    }

    
    
    
    return(
      <Card className={classes.card} >
        <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth:650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {headings.map((cell,i)=>(
                <TableCell align='left' key={i}>{cell}</TableCell>
              ))}
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
          {tableData.map((items)=>(
              <TableRow>
                
                {
                  Object.values(items).map(item => {
                    return<TableCell>{item}</TableCell>
                  })
                
                }
                
               
                
              </TableRow>
               ))}
           
           
           
                
            
            
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
    )
}
export default ListTable;