import { FC } from "react";
import styles from './ContactDetails.module.css'
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
const ContactDetails:FC=()=>{
    const icon = (
        <Paper sx={{ m: 1 }} elevation={4}>
          <div>
            dsdsdsdsd
            </div>
        </Paper>
    )
return (<>
ContactDetails
    <Alert variant="outlined" severity="warning">
    ChatList empty!
  </Alert>
    <Collapse orientation="horizontal" in={true}>
        {icon}
    </Collapse>
    </>)
}
export default ContactDetails