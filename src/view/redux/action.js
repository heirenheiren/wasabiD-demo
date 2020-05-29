export default{
    add:title=>{
        return{
            type:"add",
            title:title
        }
    },
    reduce:(title)=>{
        return{
            type:"reduce",
            title:title
        }
    }
}
