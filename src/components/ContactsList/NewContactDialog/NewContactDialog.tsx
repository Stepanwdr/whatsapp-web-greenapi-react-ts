import { Dialog, Button,DialogTitle, DialogContent, DialogActions, CircularProgress } from "@mui/material"
import { FC, useState } from "react"
import { toast } from 'react-toastify'
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input'
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { useActions } from "../../../hooks/useActions"
import phoneToChatId from "../../../utils/phoneToChatId"
import styles from './NewContactDialog.module.css'
interface NewContactDialogProps {
  isOpen: boolean,
  setIsOpen: (open: boolean) => void
}
const NewContactDialog: FC<NewContactDialogProps> = ({ isOpen, setIsOpen }) => {
  const [phoneValue, setPhoneValue] = useState('')
  const { fetchAddContact } = useActions()
  const { isLoading, contacts } = useTypedSelector(state => state.contacts)
  const addIsPossible = (): boolean => {
    let isPossible = matchIsValidTel(phoneValue) && !isLoading
    if (!isPossible) return false
    const contactIsExscist = contacts.find(contact => contact.chatId === phoneToChatId(phoneValue))
    if (contactIsExscist) {
      toast.warning('Contact already exscist!')
      isPossible = false
    }
    return isPossible
  }
  const handleContactAdd = () => {
    if (!addIsPossible()) return
    fetchAddContact(
      phoneValue,
      () => {
        setPhoneValue('')
        setIsOpen(false)
      })
  }

  const hanlePhoneChange = (value: string) => {
    //matchIsValidTel(value)
    setPhoneValue(value)
  }
  return <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
    <DialogTitle>New Contact</DialogTitle>
    <DialogContent>
      <div>
        <p>
          Contact phone
        </p>
        <MuiTelInput
         value={phoneValue} 
         required={true} 
         onChange={hanlePhoneChange}
         placeholder="+7 012 345 67 00"
         className={styles.phoneInput}
          />
      </div>
    </DialogContent>
    <DialogActions>
      <Button
        variant="outlined"
        color="success"
        disabled={isLoading}
        onClick={handleContactAdd}>
        {isLoading ? <CircularProgress size={20} /> : 'Add'}
      </Button>
    </DialogActions>
  </Dialog>
}

export default NewContactDialog
