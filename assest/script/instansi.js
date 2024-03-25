const instansi = document.querySelector(".instansi");

const yrbnBtn = document.querySelectorAll(".button-second")[0];
const smpBtn = document.querySelectorAll(".button-second")[1];
const smkBtn = document.querySelectorAll(".button-second")[2];

const yrbn = `<div>
  <h1 class="rh1 mb-10 text-center" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">Balanta</h1> 
  <p class="text-center" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia delectus facere ullam iusto deleniti, maxime vero ipsum praesentium expedita. Quaerat suscipit velit dicta facilis, earum voluptatum ea maxime voluptatibus maiores, voluptate temporibus at in eius quos quod dolorem. Eius, maxime!</p>
  <ul class="list-image-[url(../assest/images/list/list.png)] list-inside mx-auto text-nowrap mt-8">
      <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" data-aos-offset="-100" data-aos-once="true">desain visual komunikasi</li>
      <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="150" data-aos-offset="-100" data-aos-once="true">perhotelan</li>
      <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" data-aos-offset="-100" data-aos-once="true">manajemen perkantoran lembaga bisnis</li>
      <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="250" data-aos-offset="-100" data-aos-once="true">akutasni</li>
</ul>

  </div>
<div class="text-center">
<img src="../assest/images/tbb.png" alt="icon" class="lg:w-[1200px] " data-aos="zoom-out-left" data-aos-duration="500" data-aos-once="true">
<div data-aos="fade-down-left" data-aos-offset="-100" data-aos-duration="500" data-aos-once="true"  class="relative flex flex-col text-gray-700 bg-gray-200 shadow-lg bg-clip-border rounded-xl w-52 mx-auto mt-10">
  
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
<h1  data-aos="fade-right" data-aos-duration="500" data-aos-once="true" class="rh1 mb-10 text-center">Smp prima bangsa</h1> 
<p  data-aos="fade-up" data-aos-duration="500" data-aos-once="true" class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia delectus facere ullam iusto deleniti, maxime vero ipsum praesentium expedita. Quaerat suscipit velit dicta facilis, earum voluptatum ea maxime voluptatibus maiores, voluptate temporibus at in eius quos quod dolorem. Eius, maxime!</p>
<ul class="list-image-[url(../assest/images/list/list.png)] list-inside mx-auto text-nowrap mt-8">
   <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" data-aos-offset="-100" data-aos-once="true">desain visual komunikasi</li>
   <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="150" data-aos-offset="-100" data-aos-once="true">perhotelan</li>
   <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" data-aos-offset="-100" data-aos-once="true">manajemen perkantoran lembaga bisnis</li>
   <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="250" data-aos-offset="-100" data-aos-once="true">akutasni</li>
</ul>

</div>
<div class="text-center">
<img  src="../assest/images/Pb.png" alt="icon" class="lg:w-[1200px] " data-aos="zoom-out-left" data-aos-duration="500" data-aos-once="true">
<div data-aos="fade-down-left" data-aos-offset="-100" data-aos-duration="500" data-aos-once="true" class="relative flex flex-col text-gray-700 bg-gray-200 shadow-lg bg-clip-border rounded-xl w-52 mx-auto mt-10">

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
<h1  data-aos="fade-right" data-aos-duration="500" data-aos-once="true"  class="rh1 mb-10 text-center">Smk Taruna Budi Bangsa</h1> 
<p data-aos="fade-up" data-aos-duration="500" data-aos-once="true" class="text-center" class="text-center" data-aos="zoom-out-left" data-aos-duration="500" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia delectus facere ullam iusto deleniti, maxime vero ipsum praesentium expedita. Quaerat suscipit velit dicta facilis, earum voluptatum ea maxime voluptatibus maiores, voluptate temporibus at in eius quos quod dolorem. Eius, maxime!</p>
<ul class="list-image-[url(../assest/images/list/list.png)] list-inside mx-auto text-nowrap mt-8">
  <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" data-aos-offset="-100" data-aos-once="true">desain visual komunikasi</li>
  <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="150" data-aos-offset="-100" data-aos-once="true">perhotelan</li>
  <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" data-aos-offset="-100" data-aos-once="true">manajemen perkantoran lembaga bisnis</li>
  <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="250" data-aos-offset="-100" data-aos-once="true">akutasni</li>
</ul>
</div>
<div class="text-center">
<img src="../assest/images/tbb.png" alt="icon" class="lg:w-[1200px] " data-aos="zoom-out-left" data-aos-duration="500" data-aos-once="true">
<div data-aos="fade-down-left" data-aos-offset="-100" data-aos-duration="500" data-aos-once="true"  class="relative flex flex-col text-gray-700 bg-gray-200 shadow-lg bg-clip-border rounded-xl w-52 mx-auto mt-10">

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
  yrbnBtn.classList.add('button-seconds')
  smpBtn.classList.remove('button-seconds')
  smkBtn.classList.remove('button-seconds')
});

smpBtn.addEventListener("click", () => {
  instansi.innerHTML = smp;
  smpBtn.classList.add('button-seconds')
  yrbnBtn.classList.remove('button-seconds')
  smkBtn.classList.remove('button-seconds')
});

smkBtn.addEventListener("click", () => {
  instansi.innerHTML = smk;
  smkBtn.classList.add('button-seconds')
  yrbnBtn.classList.remove('button-seconds')
  smpBtn.classList.remove('button-seconds')
});

