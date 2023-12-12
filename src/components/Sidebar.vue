<template>
  <div
    class="flex justify-between bg-white shadow p-5 sticky top-0 w-full z-10"
  >
    <div class="logo">
      <a href="/"
        ><h1 class="text-5xl font-bold text-green-950">Teamwell</h1></a
      >
    </div>
    <div class="flex items-center">
      <div class="flex w-12 h-12 p-2 bg-gray-200 rounded-full mx-2">
        <img src="../assets/image/question.png" class="w-8" />
      </div>
      <div class="flex bg-gray-200 p-2 rounded-full items-center">
        <img
          src="../assets/image/profile-user.png"
          alt=""
          class="w-8 h-8 mr-3"
        />
        <div class="mr-2 items-center">
          <h3 class="text-xl text-sky-950 font-bold leading-[14px]">
            Nathalie Grimont
          </h3>
          <p>Administratur</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col bg-slate-500 shadow p-5 fixed ml">
    <div class="text-white">
      <div class="p-3 rounded-md bg-white text-center">
        <img
          src="../assets/image/visiting-card.png "
          alt=""
          class="mx-auto w-[25px]"
        />
        <p class="text-black">Employes</p>
      </div>
      <div class="p-3 rounded-md text-center my-1">
        <!-- <img src="../assets/image/beach.png " alt="" class="mx-auto w-[25px]" /> -->
        <font-awesome-icon icon="umbrella-beach" />
        <i class="fa-solid fa-umbrella-beach"></i>
        <p>conges</p>
      </div>
      <div class="p-3 rounded-md text-center">
        <img src="../assets/image/laptop.png " alt="" class="mx-auto w-[25px]" />
        <p>Material</p>
      </div>
      <div class="p-3 rounded-md text-center">
        <img src="../assets/image/electric-car.png " alt="" class="mx-auto w-[25px]" />
        <p>Vehicales</p>
      </div>
      <div class="p-3 rounded-md text-center">
        <img src="../assets/image/document.png " alt="" class="mx-auto w-[25px]" />
        <p>Documents</p>
      </div>
      <div class="p-3 rounded-md text-center">
        <img src="../assets/image/calendar.png " alt="" class="mx-auto w-[25px]" />
        <p>Agenda</p>
      </div>
      <div class="p-3 rounded-md text-center">
        <img src="../assets/image/chat.png " alt="" class="mx-auto w-[25px]" />
        <p>Humeurs</p>
      </div>
      <div class="p-3 rounded-md text-center">
        <img src="../assets/image/comment.png " alt="" class="mx-auto w-[25px]" />
        <p>Posts</p>
      </div>
      <div class="p-3 rounded-md text-center">
        <img src="../assets/image/search.png " alt="" class="mx-auto w-[25px]" />
        <p>Requirement</p>
      </div>
      <div class="p-3 rounded-md text-center">
        <img src="../assets/image/settings.png " alt="" class="mx-auto w-[25px]" />
        <p>Setting</p>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "Sidebar",
  setup() {},
};
</script>
