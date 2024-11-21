function convertNullableValues(object){
    for(key in object){
        if (object[key]===null){
            object[key]=0
        }
        else if(object[key]===undefined){
            object[key]=''
        }
    }
    return object

}

let a={
    a:'zakaria',
    b: null,
    c: undefined
}

let b=convertNullableValues(a)
console.log(b)