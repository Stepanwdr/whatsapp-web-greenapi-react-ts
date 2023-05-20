
export interface IMessage {
    chatId: string,
    senderId: string,
    senderName?: string,
    idMessage:string,
    textMessage: string,
    timestamp: number,
    type: "incoming" | "outgoing",
    receiptId?:number
}