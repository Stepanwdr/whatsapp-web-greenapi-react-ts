export default class Storage{
    static get(key:string){
     try{
       const item=localStorage.getItem(key) || null
       return item ? JSON.parse(item) : null
     }catch(e){
      console.log(e)
     }
    }
    static set(key:string,item:any){
       localStorage.setItem(key, JSON.stringify(item))   
    }
    static remove(key:string){
       localStorage.removeItem(key)
    }
}