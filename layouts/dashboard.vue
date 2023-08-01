<template>
  <nav class="border w-full h-[72px] bg-white flex gap-4 items-center py-[16px] px-[120px] max-h-full">
    <button
        @click="logout"
        class="bg-white p-2 w-[84px] border text-[#FD2F70] border-[#FD2F70] rounded-lg">
      Logout
    </button>
    <button
        @click="deleteAccount"
        class="py-2 px-3 rounded-lg bg-red-400 text-white">
      Delete Accont
    </button>
  </nav>
  <main class="w-full h-full flex-col gap-4  flex justify-center items-center">
    <slot/>
  </main>
  <Footer position="fixed"/>
</template>


<script setup>
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

  const logout = async () => {
    await $fetch('/api/logout', {
      baseURL: 'http://localhost:3333',
      method: "POST",
      onResponse({response}) {
        if (response._data === "true") {
          const user = useCookie('user')
          user.value = response._data
          navigateTo('/login')
        }
      },
      onResponseError({response}) {
        // Handle the response errors
        console.log(response)
      }
    })
  }

  const deleteAccount = async () => {
    const user = useCookie("user")

    await $fetch(`/api/delete/${user.value.user.id}`, {
      baseURL: 'http://localhost:3333',
      method: "DELETE",
      onResponse({response}) {
        if (response.status === 200){
          toast.success(response._data, {
            position: toast.POSITION.TOP_CENTER,
          });
          user.value = null
          navigateTo("/signup")
        }else{
          toast.error(response._data, {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
       console.log(response)
      },
    })
  }
</script>
