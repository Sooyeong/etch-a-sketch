// Get number of grid by user



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
// We'll select var later 

var n_box=prompt("Please enter number of grid between 2-64");

n_box=Number(n_box);

if (typeof(n_box)=="number" && 2<=n_box && n_box<=64){
    var pixelSize=(960/n_box)-6;


    for (let i =0 ; i<n_box*n_box; i++){
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
            boxes[i].style.backgroundColor="grey";
        });

        boxes[i].addEventListener('click', function style(){
            boxes[i].style.backgroundColor="white";
        });
    }



    var clear_button = document.createElement("BUTTON");
    clear_button.textContent="Clear All";

    clear_button.addEventListener('click', function clear(){
        // forEach --> call back 
        boxes.forEach(box=> box.style.backgroundColor="white");
    });

    document.body.appendChild(clear_button);



    var btn_color = document.createElement("BUTTON");
    btn_color.textContent="Grey";

    btn_color.addEventListener('click', function clear(){
        // forEach --> call back 
        boxes.forEach(box=> box.addEventListener('mouseover', function style(){
            box.style.backgroundColor="grey";
        }));
    });

    document.body.appendChild(btn_color);

    var btn_color2 = document.createElement("BUTTON");
    btn_color2.textContent="Mixed";

    btn_color2.addEventListener('click', function clear(){
        // forEach --> call back 
        boxes.forEach(box=> box.addEventListener('mouseover', function style(){
            var color=["gold","blue","red","green","purple","grey","pink"]

            let i=Math.floor(Math.random()*6);
            box.style.backgroundColor=color[i];
        }));
    });

    document.body.appendChild(btn_color2);







    document.body.appendChild(container);



    /* Three buttons will be added- 
        1. Clear All
        2. Adjust Size of the grid
    */

}