export const genereteId=()=>{
    let id=0
    return ()=>{
        return id++
    }
}