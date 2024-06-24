gsap.from(".hero-text h1", { duration: 1, y: -50, opacity: 0, stagger: 0.2 });
gsap.from(".hero-text h2", { duration: 1, y: -50, opacity: 0, delay: 1 });


const femaleProducts=[
{
    img1:"./images/women-col/red-mol.webp",
    img2:"./images/women-col/red.jpeg ",
    description:"Smocked-bodice dress",
    price:"Rs.1,299,00"

},
{
    img1:"./images/women-col/blk-col.webp",
    img2:"./images/women-col/blk-col-mol.jpeg",
    description:"Overlock-detail bodycon dress",
    price:"Rs.1,299.00" 
},
{   
    img1:"./images/women-col/button-col.webp" ,
    img2:"./images/women-col/button-mol.webp",
    description:"Button-top vest top",
    price:"",
},
{
    img1:"./images/women-col/gray-col.webp",
    img2:"./images/women-col/gray-col-mol.jpeg",
    description:"",
    price:"",
}
// },
// {
//     img1:"",
//     img2:"",
//     description:"",
// }
];
var procard = document.querySelector(".procard")

var container="";

femaleProducts.forEach(function(product){
    container +=`   <img src="${product.img1}" class=" h-72 object-cover object-top  rounded-md " alt="">
               
               <div class="pro-des flex justify-between mt-4">
                 <h1 class="font-bold text-xl">${product.description}</h1>
                 <h1 class="font-bold text-xl">${product.price}</h1>
                </div>`

}
);
procard.innerHTML=container;




