import products from "./datasets/products.json"
import users from "./datasets/users.json"
console.log(products)
console.log(users)
export function findData(fileName: string, key: string, value: string | number): void {
    try {
        if (products.keys===users.keys){
            console.log(output.JSON);
        }else console.log([]);
     
    } catch (error) {
        throw(error)
    }
}
