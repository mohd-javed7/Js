// The Array Filterer:
// You are building a search feature for your e-commerce site. Write a function 
// named filterProducts that takes an array of product objects and a filter criterion. 
// The function should return a new array containing only the products that match the filter criterion.

function filterProducts(arrObj,criterion){
    const result = arrObj.filter(product=>product.section.toLowerCase().includes(criterion.toLowerCase())).map(product=> product.item);
    return result;
}

const ArrayObjects = [
    {
        section : "Beverages",
        item : "Coffe,Coca-cola,Pepsi,Red Bull"
    },
    {
        section : "Furniture",
        item : "Bed , Sofa , Chair , Table ,Cupboard"
    },
    {
        section : "Electronics",
        item : "Headphones, Mics , Mouse, Keyborad, Computer , Laptop"
    }
]
console.log(filterProducts(ArrayObjects,"Electro"));