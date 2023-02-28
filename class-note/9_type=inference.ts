var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b;
}

// 타입 추론 기본 2 
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// let shoppingItem: Dropdown<string> = {
//     value:"hi",
//     title:"zz"
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<string>

// Best Common Type
var arr = [1,2,true,true,'a']