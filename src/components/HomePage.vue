<template>
  <SideBarVue />
  <div class="flex flex-col ml-[200px]">
    <div class="">
      <div class="flex justify-between items-center py-[20px]">
        <h2 class="text-2xl">Employes </h2>
        <div class="mr-5">
          <button class="bg-slate-500 p-2 rounded-md text-white">
            Ajouter un employe
          </button>
        </div>
      </div>
      <div class="flex">
        <p
          class="text-lg mr-5 border-b-slate-700 border-[2px] border-transparent"
        >
          Liste des employes
        </p>
        <p class="text-lg mr-5">Horaires employes</p>
      </div>
    </div>
    <div class="text-right py-5">
      <input
        type="text"
        placeholder="Recherche..."
        class="rounded-md shadow-sm border-gray-700 mx-2"
      />
      <input
        type="text"
        placeholder="Toutes les status"
        class="rounded-md shadow-sm border-gray-700 mx-2"
      />
      <input
        type="text"
        placeholder="Toutes les responsibles"
        class="rounded-md shadow-sm border-gray-700 mx-2"
      />
      <input
        type="text"
        placeholder="Toutes les Departmennts"
        class="rounded-md shadow-sm border-gray-700 mx-2"
      />
      <button class="text-white p-2 px-5 bg-slate-600 rounded-md mr-5">
        Filter
      </button>
    </div>
    <div class="w-full py-5">
      <table
        class="shadow-[rgba(149,157,165,0.2)_0px_8px_24px] w-full rounded-lg p-4"
      >
        <thead class="border-b-gray-300 border border-transparent py-2">
          <tr class="text-left">
            <th class="py-4 pl-5"></th>
            <th class="py-4">TITLE</th>
            <th class="py-4">RESPONSIBLE</th>
            <th class="py-4">DEPARTMENT</th>
            <th class="py-4">DEPARTMENT</th>
            <th class="py-4">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b-gray-300 border border-transparent py-2" v-for="user in data" :key="user.id">
            <td class="py-4 px-5 text-teal-800">
              <div class="flex">
                <img
                  src="../assets/image/profile-user.png"
                  alt=""
                  class="w-10 h-10 mr-2"
                />
                <div>
                  <p class="font-bold">{{user.user.first_name}}</p>
                  <p>{{user.user.email}}</p>
                </div>
              </div>
            </td>
            <td class="py-4 px-2 text-teal-800">
              <div class="flex flex-col">
                <p class="font-bold">Department Marketing</p>
                <p> {{user.user.title ?  user.user.title : '-'}}</p>
              </div>
            </td>
            <td class="py-4 px-2 text-teal-800 font-bold">Romain Mathaieu</td>
            <td class="py-4 px-2 text-teal-800 font-bold">Back-office</td>
            <td class="py-4 px-2 text-teal-800">
              <div class="flex flex-col">
                <p class="font-bold">11 April 2018</p>
                <p> {{user.date_created}}</p>
              </div>
            </td>
            <td class="py-4 px-2 font-bold">
              <p
                class="bg-[#0080004a] p-[2px] text-[green] rounded-full font-semibold"
              >
                &nbsp &nbsp  {{user.user.status}}
              </p>
            </td>
          </tr>
       
        </tbody>
      </table>
    </div>
    <div class="flex justify-between items-center">
      <p>showing 1 To 10 of 97 Result</p>
      <div class="flex border rounded-md items-center mr-5">
        <p>
          <img
            src="../assets/image/left-chevron.png"
            alt=""
            class="p-3 border-r"
          />
        </p>
        <p class="py-2 px-4 border-r bg-teal-800 text-white">1</p>
        <p class="py-2 px-4 border-r">2</p>
        <p class="py-2 px-4 border-r">3</p>
        <p class="py-2 px-4 border-r">...</p>
        <p class="py-2 px-4 border-r">8</p>
        <p class="py-2 px-4 border-r">9</p>
        <p class="py-2 px-4 border-r">{{10}}</p>
        <p><img src="../assets/image/chevron.png" alt="" class="p-3" /></p>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted ,ref} from "vue";
import SideBarVue from "./Sidebar.vue";
import { createDirectus, rest, readItems, staticToken } from "@directus/sdk";

export default {
  components: {
    SideBarVue,
  },
  setup() {
    const data = ref([]);
    const bearerToken = "213a9K7p96yQLQM4zWKUYN3uUukOedUU";
    const client = createDirectus("https://staging-backend.teamwell.co")
      .with(
        staticToken("OUTeX5b3yYi4PbtOttQMbjGfZ1iG5GRK") // Remove the `Bearer` prefix here
      )
      .with(rest());
 
   

const result = ( async()=>{
    const user = await client.request(
          readItems("employees", {
            fields: ["*",'user.*'],
          })
        )
        
        data.value =  user
        console.log(data.value);
})
result()
        // data.value = result;
        // console.log(result,'resultresultresult');
    
    return {
        data
    }
  },
};
</script>
