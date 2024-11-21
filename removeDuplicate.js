function removeDuplicate(arr){
    let a =[]
    for(var i=0; i<arr.length;i++){
        if(a.includes(arr[i])) continue;
        a.push(arr[i]);
    }
    return a
}

a=[3, 1,1,2,3,4,1,3]
console.log(removeDuplicate(a))
