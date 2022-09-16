var table= document.getElementById("table"),sumVal=0;
let Result=0;
for(var i=1; i<table.rows.length; i++){
    sumVal=sumVal + parseInt(table.rows[i].innerHTML);
}
document.getElementById("val").innerHTML= sumVal;
console.log(sumVal);

for(var j=1; i<table.columns.length; i++){
    sumVal=sumVal + parseInt(table.columns[j].innerHTML);
}
document.getElementById("val").innerHTML= sumVal;
console.log(sumVal);

// function Insert(){
//     document.getElementById("n1").Value;
// }

function handleAdd(){
    var val = document.getElementById("val").innerHTML;
    document.getElementById("n1").Value = val;
    console.log(val);
    Result+=sumVal;
    console.log("sumVal");
}

function handleDel(){
    console.log("sumVal");
}