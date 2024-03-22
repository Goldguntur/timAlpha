const btnCheker = document.querySelectorAll("#link span a");
const inputCheker = document.querySelectorAll("#link span input[type=checkbox]");
const containerGallery = document.getElementById("img-gallery")




const arrayBtn = Array.from(btnCheker);
const arrayInput = Array.from(inputCheker);

arrayBtn.forEach((Btn, index,) => {
 
    

    
   Btn.addEventListener('click', () => {
    
       
                arrayInput[index].checked = !arrayInput[index].checked;
                 if (arrayInput[index].checked == true) {
               
                     inputCheker.forEach((otherCheckbox) => {
                         btnCheker.forEach((b) => {
                            if (otherCheckbox !== inputCheker[index] && b !== btnCheker[index]) {
                                otherCheckbox.checked = false;
                               b.classList.remove("checked-link")
                            }   
                         })   
                        });
                        arrayBtn[index].classList.add("checked-link")
                 
                } else {
                    arrayBtn[index].classList.remove("checked-link")
               }
       // containerGallery.innerHTML = showGallery(imgBtn)
       const imgBtn = Btn.innerText
         containerGallery.innerHTML = showGallery(imgBtn)
            })
        
  
  
    })
              
   
    import data from "../script/data/gallery.json" assert {type : 'json'}


   


function showGallery(img) {

return  `<div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
           <img src="${data[img]["b"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
             <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
              <p class="text-white absolute font-medium uppercase">buka</p> 
          </span>
         </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["b"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["c"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["d"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["e"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["f"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["g"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["h"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["i"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["j"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["k"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["l"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
 
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["m"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
 
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["n"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
 
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["o"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
 
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="${data[img]["p"]}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full py-6 inline-flex justify-center items-center bg-black opacity-0 group-hover:opacity-70 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>


   `
  }



