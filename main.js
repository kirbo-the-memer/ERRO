//comece aqui
var nomeestudantes=[];


function submit(){
var displayestudantes=[];
for(var j=1;j<=4;j++){
   var estudante=document.getElementById(estudante+j).value ;
    nomeestudantes.push(estudante);

}
var comprimentonomeestudante=nomeestudantes.length;

for( var k=1;k<=comprimentonomeestudante;k++){
    displayestudantes.push("<h4>NAME - "+ nomeestudantes[k] + "</h4>")
}
document.getElementById("displayNameWithCommas").innerHTML=displayestudantes;
var removeCommas=displayestudantes.join(" ");
document.getElementById("displayNameWithoutCommas").innerHTML=removeCommas;
document.getElementById("submitButton").style.display="none";
document.getElementById("sortButton").style.display="inline-block";
}
function sorting(){
    nomeestudantes.sort();
    var displaysort=[];
    var comprimentonomeestudante=nomeestudantes.length;
    for(var p=0;p<comprimentonomeestudante;p++){
        displaysort.push("<h4>NAME - "+ nomeestudantes[p] + "</h4>");

    }
    var removeCommas=displaysort.join(" ");
document.getElementById("displayNameWithoutCommas").innerHTML=removeCommas;
}