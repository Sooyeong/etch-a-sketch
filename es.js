const container=document.createElement("div");


// Add it to body 


// create multiple grid box - I can use loop for the reference//


const gridBox=document.createElement("div");



// Add flex style //

document.body.style.display="flex";
document.body.style.justifyContent="center";

//Start from single item ;

// Question - How can I assign size dynamically? //
container.style.display="flex";
container.style.width="960px";
container.style.height="960px";

container.style.justifyContent="center";
container.style.alignItems="center";



container.style.flexDirection="row";
container.style.flexWrap="wrap";



var boxes=[];


// border size ==6for each grid;
var pixelSize=(960/16)-6;

for (let i =0 ; i<16*16; i++){
    boxes[i]=document.createElement("div");
    boxes[i].style.display="inline-flex";
    boxes[i].style.backgroundColor="white";

    boxes[i].style.borderColor="black";
    boxes[i].style.borderStyle="solid";
    boxes[i].style.width=`${pixelSize}px`;
    boxes[i].style.height=`${pixelSize}px`;

    

    //Add it to container
    container.appendChild(boxes[i]);

    boxes[i].addEventListener('mouseover', function style(){
        boxes[i].style.backgroundColor="yellow";
    });

    boxes[i].addEventListener('click', function style(){
        boxes[i].style.backgroundColor="white";
    });
}



document.body.appendChild(container);

