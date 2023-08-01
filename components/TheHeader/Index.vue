<template>
  <nav class="w-full h-[72px] bg-white flex justify-between items-center py-[16px] px-[120px] max-h-full md:px-[70px]">

    <!-- NAV LEFT PART  -->
    <div class="flex items-center jutify-center gap-[7px]">
      <button
          @click.prevent="navigateTo('signup')"
          class="bg-[linear-gradient(44deg,#B51F4F_0%,#FD2F70_100%)] p-2 w-[84px] text-white rounded-lg
                hover:bg-[linear-gradient(44deg,#FD2F70_0%,#B51F4F_100%)] transition-all duration-1000 ease-linear">
        ثبت نام
      </button>

      <button
          @click.prevent="navigateTo('login')"
          class="bg-white p-2 w-[84px] border text-[#FD2F70] border-[#FD2F70] rounded-lg">
        ورود
      </button>
    </div>

    <!--NAV RIGHT PART  -->
    <TheHeaderNavbar :links="headerNavLink"/>
  </nav>
</template>

<script setup>

  const headerNavLink = [
    {title: "2P2 معامله"},
    {title: "معامله سریع"},
    {title: "ثبت درخواست معامله"},
    {title: "درباره ما"},
    {title: "تماس با ما"},
    {title: "وبلاگ"},
  ]
</script>