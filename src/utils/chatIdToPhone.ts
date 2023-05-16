const chatIdToPhone=(chatId:string):string=>{
    const replaced=chatId.replace('@c.us','')
return replaced
}
export default chatIdToPhone