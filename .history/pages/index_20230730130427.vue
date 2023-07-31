<script>
    definePageMeta({layout: 'custom'})
    export default{

    }
</script>


<template>

    <Nav />

 
    <main className="relative w-full h-[600px] flex justify-between items-center overflow-hidden">
        <div className="w-screen h-screen -z-10 absolute top-0 left-0">
          <img className="w-screen h-screen" src="../assets/img/Pattern.png" alt="pattern"/>
        </div>

        <div className="absolute flex items-ce
     m-auto">
         <AuthCardWrapper />
        </div>

      </main>




    <div>
        <Footer />
    </div>
</template>