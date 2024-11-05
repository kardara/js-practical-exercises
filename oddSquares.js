function oddSquares(arr){
    let rslt=[]

    for(var i=0;i<arr.lenght;i++){
        if(arr[i]%2!==0){
            rslt.push(arr[i]*arr[i])
        }
    }
    return rslt
}