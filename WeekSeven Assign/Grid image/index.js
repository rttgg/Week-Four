var elements = document.getElementById("column");

let picture = '<img src="./puppies.jpg"/>'

let rowOfPuppies = [];


function row (){
    rowOfPuppies.push("<tr>");
    for (var i = 0; i< 9; i++){
        rowOfPuppies.push("<td>" + picture + "</td>");

    };
    rowOfPuppies.push("</tr>");
    }

// we want this function to make my pictures wrapped in table tags

function table (){
    rowOfPuppies.push("<tbody>");
    for (var i=0; i < 9; i++ ){
        row();
    }
    
    rowOfPuppies.push("</tbody>");
    return rowOfPuppies;
}

elements.innerHTML = table().join(" ");





















// var i;
// function one(){
//     for(i = 0; i<elements.length; i++){
//         elements[i].style.flex = "100%"
//     }
// }
// function two(){
//     for (i=0; i < elements.length; i++){
//         elements[i].style.flex = "50%"
//     }
// }
// function four(){
//     for (i=0; i<elements.length; i++){
//         elements[i].style.flex = "25%"
//     }
// } 
