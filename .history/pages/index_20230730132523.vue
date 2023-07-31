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

        <div div className="w-[736px] rel
         m-auto">
         <AuthCardWrapper />
        </div>

        </main>

        <Footer />

</template>