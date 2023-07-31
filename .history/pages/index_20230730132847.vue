<script>
    definePageMeta({layout: 'custom'})
    export default{

    }
</script>


<template>

    <Nav />

 
    <main className="relative w-full h-[600px] flex justify-between items-center overflow-hidden">

        <div className="w-100 h-100 -z-10 absolute top-0 left-0">
          <img className="w-screen h-screen" src="../assets/img/Pattern.png" alt="pattern"/>
        </div>

        <div className=" top-[114px]">
         <AuthCardWrapper />
        </div>

        </main>

        <Footer />

</template>