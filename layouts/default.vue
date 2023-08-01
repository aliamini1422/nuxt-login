<template>
  <div>
    <TheHeader />
      <main class="relative w-full max-h-screen flex justify-between items-center py-14 overflow-hidden">
        <div class="w-100 h-100 -z-10 absolute top-0 left-0">
          <img class="w-screen h-screen object-cover" src="../assets/img/Pattern.png" alt="pattern"/>
        </div>
        <div class="m-auto">
          <slot />
        </div>
      </main>
    <Footer />
  </div>

</template>