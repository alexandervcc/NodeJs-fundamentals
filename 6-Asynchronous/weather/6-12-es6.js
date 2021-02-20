//Object property shorthand

const name="Cosme";
const userage=27;

const user={
    name,
    userage,
    loc:"Quito"
}

console.log(user)

//Destructuring
const product={
    label:"XDD",
    price:3.5,
    stock:55,
    salePrice:100
}


const {label,price,stock,sp} =product
console.log(stock,sp)

const trans=(type,{label,stock})=>{
    console.log(type,label,stock)
}

trans("Xd",product)