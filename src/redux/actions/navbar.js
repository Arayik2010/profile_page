export const CATEGORY_NAVICGATION = "CATEGORY_NAVICGATION";

export const navbarAction =(category)=>{
    return{
        type:"CATEGORY_NAVICGATION",
        payload:category
    }
}