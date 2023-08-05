const arrayofcol = document.querySelectorAll(".col");
const colName = ["a","b","c","d","e","f","g","h"]

let colNum = 0;

for(const i of arrayofcol){
    let count = 8;
    for(const el of i.children){
        el.setAttribute("id",colName[colNum] + count);
        count--;
    }
    colNum++;
} 

for(const i of arrayofcol){
    //console.log(i);
}
