const allBox = document.getElementsByClassName("box");
const totElem = [];

for (const x of allBox){
    x.addEventListener("click",function(){
        
        const idOfElement = x.getAttribute("id");
        const innerHTML = document.getElementById(idOfElement).innerHTML;

        if(totElem.length > 0){
            totElem[0].removeAttribute("style");
            totElem.length = 0;
        }

     if(innerHTML.includes("br") || 
        innerHTML.includes("bn") ||
        innerHTML.includes("bb") ||
        innerHTML.includes("bq") ||
        innerHTML.includes("bk") ||
        innerHTML.includes("bp")){
            document.getElementById(idOfElement).style.backgroundColor = "#c4c46c"
            totElem.push(x);
            
        }
     if(innerHTML.includes("wr") || 
        innerHTML.includes("wn") ||
        innerHTML.includes("wb") ||
        innerHTML.includes("wq") ||
        innerHTML.includes("wk") ||
        innerHTML.includes("wp")){
            document.getElementById(idOfElement).style.backgroundColor = "#c4c46c"
            totElem.push(x);
        }
    });
}