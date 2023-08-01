<template>
  <div class="flex flex-col items-center justify-center py-32">
    <h2>Welcome,</h2>
    <p> {{user?.user?.email}}</p>
  </div>

</template>

<script setup>

  definePageMeta({
    layout:'dashboard'
  })
    const user = useCookie("user")

    if (!user.value) {
      navigateTo('login')
    }
</script>