<template>
  <button class="w-full bg-[linear-gradient(44deg,#B51F4F_0%,#FD2F70_100%)] px-6 py-3 text-white
                  rounded-lg hover:bg-[linear-gradient(44deg,#FD2F70_0%,#B51F4F_100%)] transition-all duration-1000 ease-linear">
    {{title.title}}
  </button>
</template>

<script setup>
  const title = defineProps(['title'])

</script>