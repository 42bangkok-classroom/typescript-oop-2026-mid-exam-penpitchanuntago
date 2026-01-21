import product from "./datasets/products.json"
import user from "./datasets/users.json"
export function readJson(fileName: string): unknown[]{
    try { 
        unknown[] = product.map,user.map
        console.log(unknown[]);
    } catch (error) {
        if (){
            throw ("Invalid file")
        }
        else if()
            throw("Invalid JSON format")
    }
}