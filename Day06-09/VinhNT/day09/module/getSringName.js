import { nameArr } from "./getLastNameArr.js";
export{string}
function getStringName(list){
    let result = ' ';
    list.map((e) => {
        result += e.concat(" ")
    })
    return result.trim();
}
let string = getStringName(nameArr)
export default getStringName;