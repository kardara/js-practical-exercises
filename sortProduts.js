let sortProduct= product => product.sort((a,b) => a.price - b.price)

let pro=[{name: 'nike', price: 2024},
        {name: 'nike', price: 2023},
        {name: 'aple', price: 2022},
        {name: 'puma', price: 2021}]
console.log(sortProduct(pro))