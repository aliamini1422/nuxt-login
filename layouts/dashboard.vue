<template>
  <nav class="border w-full h-[72px] bg-white flex justify-between items-center py-[16px] px-[120px] max-h-full">
    <button
        @click="logout"
        class="bg-white p-2 w-[84px] border text-[#FD2F70] border-[#FD2F70] rounded-lg">
      Logout
    </button>
  </nav>
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script setup>

</script>