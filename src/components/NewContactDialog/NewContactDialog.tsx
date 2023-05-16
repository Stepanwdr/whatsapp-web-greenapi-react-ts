import { Dialog, Button, TextField, DialogTitle, DialogContent, DialogActions, fabClasses, CircularProgress } from "@mui/material"
import { FC, useState } from "react"
import { MuiTelInput } from 'mui-tel-input'
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"
interface NewContactDialogProps {
  isOpen: boolean,
  setIsOpen: (open: boolean) => void
}
const NewContactDialog: FC<NewContactDialogProps> = ({ isOpen, setIsOpen }) => {
  const [phoneValue, setPhoneValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const { fetchAddContact } = useActions()
  const { isLoading } = useTypedSelector(state => state.contacts)
  const handleContactAdd = () => {
    if (!phoneValue || !nameValue || isLoading) return
    fetchAddContact(
      nameValue,
      phoneValue,
    ()=>{
      setIsOpen(false)
    })
  }
  return <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
    <DialogTitle>New Contact</DialogTitle>
    <DialogContent>
      <div>
        <MuiTelInput value={phoneValue} onChange={(value) => setPhoneValue(value)} />
      </div>
      <div>
        <TextField
          margin="dense"
          id="name"
          label="Name"
          type="text"
          variant="standard"
          placeholder="John"
          value={nameValue}
          required={true}
          onChange={(ev) => setNameValue(ev.target.value)}
        />
      </div>
    </DialogContent>
    <DialogActions>
    <Button variant="outlined" color="success" disabled={isLoading} onClick={handleContactAdd}>
                    {isLoading ?  <CircularProgress size={18}/> :'Add'}
                </Button>
    </DialogActions>
  </Dialog>
}

export default NewContactDialog