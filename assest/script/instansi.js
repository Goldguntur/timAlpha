const instansi = document.querySelector(".instansi");

const yrbnBtn = document.querySelectorAll(".button-second")[0];
const smpBtn = document.querySelectorAll(".button-second")[1];
const smkBtn = document.querySelectorAll(".button-second")[2];

const yrbn = `<div>
  <h1 class="rh1 mb-10 text-center">Balanta</h1> 
  <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia delectus facere ullam iusto deleniti, maxime vero ipsum praesentium expedita. Quaerat suscipit velit dicta facilis, earum voluptatum ea maxime voluptatibus maiores, voluptate temporibus at in eius quos quod dolorem. Eius, maxime!</p>
  <ul class="list-image-[url(../assest/images/list/list.png)] list-inside mx-auto text-nowrap mt-8">
      <li>desain visual komunikasi</li>
      <li>perhotelan</li>
      <li>manajemen perkantoran lembaga bisnis</li>
      <li>akutasni</li>
</ul>

  </div>
<div class="text-center">
<img src="../assest/images/tbb.png" alt="icon" class="lg:w-[1200px] ">
<div class="relative flex flex-col text-gray-700 bg-gray-200 shadow-lg bg-clip-border rounded-xl w-52 mx-auto mt-10">
  
  <div class="relative mx-2 mt-5 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-auto">
    <img src="https://source.unsplash.com/random/300×300/?batman" alt="profile-picture" />
  </div>
  <div class="p-5 text-center">
    <h4 class="block  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      pak bob
    </h4>
    <p
      class="block  text-xs antialiased md:text-base font-medium leading-relaxed opacity-55 bg-clip-text bg-gradient-to-tr ">
      Owner / Leader
    </p>
  </div>
  
</div>
</div>`;

const smp = `<div>
<h1 class="rh1 mb-10 text-center">Smp prima bangsa</h1> 
<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia delectus facere ullam iusto deleniti, maxime vero ipsum praesentium expedita. Quaerat suscipit velit dicta facilis, earum voluptatum ea maxime voluptatibus maiores, voluptate temporibus at in eius quos quod dolorem. Eius, maxime!</p>
<ul class="list-image-[url(../assest/images/list/list.png)] list-inside mx-auto text-nowrap mt-8">
   <li>desain visual komunikasi</li>
   <li>perhotelan</li>
   <li>manajemen perkantoran lembaga bisnis</li>
   <li>akutasni</li>
</ul>

</div>
<div class="text-center">
<img src="../assest/images/Pb.png" alt="icon" class="lg:w-[1200px] ">
<div class="relative flex flex-col text-gray-700 bg-gray-200 shadow-lg bg-clip-border rounded-xl w-52 mx-auto mt-10">

<div class="relative mx-2 mt-5 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-auto">
  <img src="https://source.unsplash.com/random/300×300/?batman" alt="profile-picture" />
</div>
<div class="p-5 text-center">
  <h4 class="block  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    pak firman
  </h4>
  <p
    class="block  text-xs antialiased md:text-base font-medium leading-relaxed opacity-55 bg-clip-text bg-gradient-to-tr ">
    Leader / president
  </p>
</div>

</div>
</div>`;

const smk = `<div>
<h1 class="rh1 mb-10 text-center">Smk Taruna Budi Bangsa</h1> 
<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia delectus facere ullam iusto deleniti, maxime vero ipsum praesentium expedita. Quaerat suscipit velit dicta facilis, earum voluptatum ea maxime voluptatibus maiores, voluptate temporibus at in eius quos quod dolorem. Eius, maxime!</p>
<ul class="list-image-[url(../assest/images/list/list.png)] list-inside mx-auto text-nowrap mt-8">
  <li>desain visual komunikasi</li>
  <li>perhotelan</li>
  <li>manajemen perkantoran lembaga bisnis</li>
  <li>akutasni</li>
</ul>
</div>
<div class="text-center">
<img src="../assest/images/tbb.png" alt="icon" class="lg:w-[1200px] ">
<div class="relative flex flex-col text-gray-700 bg-gray-200 shadow-lg bg-clip-border rounded-xl w-52 mx-auto mt-10">

<div class="relative mx-2 mt-5 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-auto">
  <img src="https://source.unsplash.com/random/300×300/?batman" alt="profile-picture" />
</div>
<div class="p-5 text-center">
  <h4 class="block  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    pak wisnu
  </h4>
  <p
    class="block  text-xs antialiased md:text-base font-medium leading-relaxed opacity-55 bg-clip-text bg-gradient-to-tr ">
    Leader / president
  </p>
</div>

</div>
</div>`;

yrbnBtn.addEventListener("click", () => {
  instansi.innerHTML = yrbn;
});

smpBtn.addEventListener("click", () => {
  instansi.innerHTML = smp;
});

smkBtn.addEventListener("click", () => {
  instansi.innerHTML = smk;
});
