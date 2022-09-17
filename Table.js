var table= document.getElementById("table");
var sum=0;
// var Result=0;
for(var i=1; i<table.rows.length; i++){
    sum=sum + parseInt(table.rows[i].cells[0].innerHTML);
}
document.getElementById("val").innerHTML= sum;
console.log(sum);

for(var j=1; i<table.columns.length; i++){
    sum=sum + parseInt(table.columns[j].cells[0].innerHTML);
}
document.getElementById("val").innerHTML= sum;
console.log(sum);



function handleAdd(){
    var val = document.getElementById("val").innerHTML;
    document.getElementById("n1").Value = val;
    console.log(val);
    Result+=sumVal;
    console.log("sum");
}

function handleDel(){
    sumVal=document.getElementsByTagName("td");
    console.log("del");
}