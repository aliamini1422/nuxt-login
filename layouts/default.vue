<template>
  <div>
    <TheHeader />
      <main class="relative w-full h-screen flex justify-between items-start py-12 overflow-hidden">
        <div class="w-100 h-full -z-10 absolute top-0 left-0">
          <img class="w-screen h-full object-cover" src="../assets/img/Pattern.png" alt="pattern"/>
        </div>
        <div class="mx-auto ">
          <slot />
        </div>
      </main>
    <Footer />
  </div>

</template>