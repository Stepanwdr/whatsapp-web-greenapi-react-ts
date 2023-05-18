export interface IContact {
   name: string,
   chatId: string,
   lastSeen: string | null,
   isArchive: false,
   isDisappearing: false,
   isMute: false,
   messageExpiration: number,
   muteExpiration: null,
   email: string,
   category: string,
   description?: string,
   products: object
}