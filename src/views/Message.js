import Alert from '@mui/material/Alert';
const Message = ({message})=>{

    return<>
    {message && message.color === "green" ? 
          (<Alert severity="success" >{message.text}</Alert>): message.color === "red" ?
          (<Alert severity="error" >{message.text}</Alert>) : (<span></span>)  
          }
    </>

    
}

export default Message