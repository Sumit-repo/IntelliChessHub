const arrayofpawn = [];

for (const i of colName){
    arrayofpawn.push(document.getElementById(i + 2));
}
for (const i of colName){
    arrayofpawn.push(document.getElementById(i + 7));
}

for(const i of arrayofpawn){
    i.addEventListener("click",function(){
        const clickedEl = i;

        const idOfElement = i.getAttribute("id");
        const innerHTML = document.getElementById(idOfElement).innerHTML;

        const pawnID = i.getAttribute("id");
        //console.log(pawnID);
        let change = parseInt(pawnID[1]);
        const steps = [];
        
        for (let i = 0; i<2; i++){
            if(innerHTML.includes("br") || 
                innerHTML.includes("bn") ||
                innerHTML.includes("bb") ||
                innerHTML.includes("bq") ||
                innerHTML.includes("bk") ||
                innerHTML.includes("bp")){
                    change--;
                    steps.push(document.getElementById(pawnID[0]+change));
                    //console.log(steps);
                }
        
            else if(innerHTML.includes("wr") || 
                innerHTML.includes("wn") ||
                innerHTML.includes("wb") ||
                innerHTML.includes("wq") ||
                innerHTML.includes("wk") ||
                innerHTML.includes("wp")){
                    change++;
                    steps.push(document.getElementById(pawnID[0]+change));
                    //console.log(steps);
                }
        }
        moves(steps,clickedEl);
    });
};

const trackCircleArray = [];

const moves = function(highlight,clickedEl){

    if(trackCircleArray.length!=0){
        removeCircle(trackCircleArray)
    }

    highlight.forEach(element => {
        
        element.classList.add("flex");

        element.addEventListener("click",function(){
            element.innerHTML = clickedEl.innerHTML;
            const removeCircleFromThis = highlight.filter((el)=> el !==element);
            removeCircle(removeCircleFromThis);
            clickedEl.innerHTML ="";   
        });
        
        element.innerHTML = '<div class="circle"></div>';
        trackCircleArray.push(element);
    });
};

const removeCircle = function(movesArray){
    movesArray.forEach(cur => {
        cur.innerHTML ="";
        cur.classList.remove("flex");
    });
};
