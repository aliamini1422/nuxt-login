<template>
  <nav class="border w-full h-[72px] bg-white flex justify-between items-center py-[16px] px-[120px] max-h-full">
    <button
        @click="logout"
        class="bg-white p-2 w-[84px] border text-[#FD2F70] border-[#FD2F70] rounded-lg">
      Logout
    </button>
  </nav>
  <main class="w-full h-72 flex-col gap-4  flex justify-center items-center">
    <h2>Welcome,</h2>
    <p> {{user?.user?.email}}</p>
  </main>
</template>



<script setup>

  definePageMeta({
    layout:'dashboard'
  })
    const user = useCookie("user")

    if (!user.value.token) {
      navigateTo('login')
    }

  const logout = async ()=>{
    const {data} = await $fetch('/api/logout', {
      baseURL: 'http://localhost:3333',
      method: "POST",
      onResponse({response}) {
      if (response._data === "true") {
        const user = useCookie('user')
        user.value = response._data
        navigateTo('/login')
      }
      },
      onResponseError({ response }) {
        // Handle the response errors
        console.log(response)
      }
    })
  }


</script>