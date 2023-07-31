<template>
  <p>Home page</p>
</template>

<script setup>

  const token = useCookie("token")

  if (!token.value) {
    navigateTo('login')
  }

</script>