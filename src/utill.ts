const checkTypeFunction = (value:any):boolean =>{
    return !value || typeof value !== "function" ? false : true  
}

export{
    checkTypeFunction
}