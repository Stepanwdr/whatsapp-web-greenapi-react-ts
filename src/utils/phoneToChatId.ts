 const phoneToChatId=(phone:string):string=>{
  let formatedPhone=phone.split('+')[1].replace(' ','').split(' ').join('')
  return formatedPhone + '@c.us'
}
export default phoneToChatId