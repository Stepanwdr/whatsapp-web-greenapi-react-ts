
export enum typeAccount{
    VIP='vip',
    TRIAL='trial',
    PRODUCTION='production' 
}
export interface ISettings{
    wid: string, 
    countryInstance: string,
    typeAccount:typeAccount
    webhookUrl: string,
    webhookUrlToken: string,
    delaySendMessagesMilliseconds: number,
    markIncomingMessagesReaded: string,
    markIncomingMessagesReadedOnReply: string,
    outgoingWebhook: string,
    outgoingMessageWebhook: string,
    stateWebhook:string,
    incomingWebhook: string,
    deviceWebhook: string,
    statusInstanceWebhook: string,
    sendFromUTC: Date,
    sendToUTC: Date
}