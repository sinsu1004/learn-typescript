// function fechItems(): string[] {
//     var items = ['a','b','c'];
//     return items;
// }

// let result = fechItems();
// console.log(result);

function fechItems(): Promise<string[]> {
    let items: string[] = ['a','b','c'];
    return new Promise(function(resolve){
        resolve(items);
    });
}

fechItems();