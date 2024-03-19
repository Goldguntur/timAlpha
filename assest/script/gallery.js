const btnCheker = document.querySelectorAll("#link span a");
const inputCheker = document.querySelectorAll("#link span input[type=checkbox]");
const containerGallery = document.getElementById("img-gallery")




const arrayBtn = Array.from(btnCheker);
const arrayInput = Array.from(inputCheker);

arrayBtn.forEach((Btn, index,) => {
    const imgBtn = Btn.innerText


    
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
                
            })
  
    })
              
   import data from "../script/data/gallery.json" assert {type : 'json'}


      console.log(data)
   


    function showGallery(img) {
      return `<img src="${data.img.a}" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="../assest/images/default.jpg" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="../assest/images/default.jpg" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="../assest/images/default.jpg" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="../assest/images/default.jpg" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="../assest/images/default.jpg" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="../assest/images/default.jpg" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="../assest/images/default.jpg" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="../assest/images/default.jpg" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="../assest/images/default.jpg" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   
    <div class="rounded group   flex flex-col   flex-nowrap relative overflow-hidden aspect-square w-auto mx-auto">
      <img src="../assest/images/default.jpg" alt="" class="object-cover cover h-full w-full -z-40 group-hover:scale-150 transition-transform ease-linear ">
      <span class="w-full p-8 inline-flex justify-center items-center bg-blue-600 opacity-0 group-hover:opacity-90 translate-y-10 group-hover:translate-y-0 transition-all duration-200 ease-linear absolute bottom-0">
         <p class="text-white absolute font-medium uppercase">buka</p> 
      </span>
   </div>
   `
  }



