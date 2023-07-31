<template>
  <div>
    <Nav />
      <main class="relative w-full h-[600px] flex justify-between items-center overflow-hidden border">

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