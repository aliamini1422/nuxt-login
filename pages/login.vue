<template>
  <NuxtLayout name="wrapper" title="ورود">
    <form @submit.prevent="login" class="w-full flex flex-col items-center justify-center gap-4">
      <TheInput
          type="email"
          placeHolder="آدرس ایمیل"
          v-model="email">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M5.8327 17.7083H14.1661C17.2078 17.7083 18.9578 15.9583 18.9578 12.9166V7.08329C18.9578 4.04163 17.2078 2.29163 14.1661 2.29163H5.8327C2.79102 2.29163 1.04102 4.04163 1.04102 7.08329V12.9166C1.04102 15.9583 2.79102 17.7083 5.8327 17.7083ZM2.29102 7.08329C2.29102 4.69996 3.44936 3.54163 5.8327 3.54163H14.1661C16.5494 3.54163 17.7078 4.69996 17.7078 7.08329V12.9166C17.7078 15.3 16.5494 16.4583 14.1661 16.4583H5.8327C3.44936 16.4583 2.29102 15.3 2.29102 12.9166V7.08329ZM8.0492 10.0666C8.59087 10.5083 9.2992 10.7249 9.9992 10.7249C10.6992 10.7249 11.4075 10.5083 11.9409 10.0666L14.5492 7.98327C14.8242 7.77494 14.8659 7.37493 14.6492 7.10827C14.4409 6.83327 14.0409 6.7916 13.7742 7.00827L11.1659 9.0916C10.5325 9.59994 9.45753 9.59994 8.8242 9.0916L6.21586 7.00827C5.94919 6.7916 5.55752 6.8416 5.34085 7.10827C5.12419 7.37493 5.17418 7.7666 5.44085 7.98327L8.0492 10.0666Z"
                fill="#7D7D7D"/>
        </svg>
      </TheInput>

      <TheInput
          placeHolder="رمز عبور"
          v-model="password">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
              d="M15 8.95829C14.6584 8.95829 14.375 8.67496 14.375 8.33329V6.66663C14.375 4.04163 13.6334 2.29163 10 2.29163C6.36668 2.29163 5.62501 4.04163 5.62501 6.66663V8.33329C5.62501 8.67496 5.34167 8.95829 5 8.95829C4.65833 8.95829 4.375 8.67496 4.375 8.33329V6.66663C4.375 4.24996 4.95834 1.04163 10 1.04163C15.0417 1.04163 15.6251 4.24996 15.6251 6.66663V8.33329C15.6251 8.67496 15.3417 8.95829 15 8.95829Z"
              fill="#7D7D7D"/>
          <path
              d="M14.1661 18.9584H5.8327C2.15769 18.9584 1.04102 17.8417 1.04102 14.1667V12.5C1.04102 8.82504 2.15769 7.70837 5.8327 7.70837H14.1661C17.8411 7.70837 18.9578 8.82504 18.9578 12.5V14.1667C18.9578 17.8417 17.8411 18.9584 14.1661 18.9584ZM5.8327 8.95837C2.84936 8.95837 2.29102 9.52504 2.29102 12.5V14.1667C2.29102 17.1417 2.84936 17.7084 5.8327 17.7084H14.1661C17.1494 17.7084 17.7078 17.1417 17.7078 14.1667V12.5C17.7078 9.52504 17.1494 8.95837 14.1661 8.95837H5.8327Z"
              fill="#7D7D7D"/>
          <path
              d="M6.66732 14.1667C6.55899 14.1667 6.45065 14.1417 6.35065 14.1001C6.24232 14.0584 6.15899 14 6.07566 13.925C5.92566 13.7667 5.83398 13.5584 5.83398 13.3334C5.83398 13.2251 5.85897 13.1167 5.90064 13.0167C5.94231 12.9084 6.00066 12.8251 6.07566 12.7417C6.15899 12.6667 6.24232 12.6084 6.35065 12.5667C6.65065 12.4334 7.02565 12.5084 7.25898 12.7417C7.33398 12.8251 7.39234 12.9167 7.434 13.0167C7.47567 13.1167 7.50066 13.2251 7.50066 13.3334C7.50066 13.5501 7.40898 13.7667 7.25898 13.925C7.10065 14.075 6.88399 14.1667 6.66732 14.1667Z"
              fill="#7D7D7D"/>
          <path
              d="M9.99935 14.1667C9.78268 14.1667 9.56602 14.075 9.40769 13.925C9.25769 13.7667 9.16602 13.5583 9.16602 13.3333C9.16602 13.225 9.18267 13.1167 9.23267 13.0167C9.27434 12.9167 9.33269 12.825 9.40769 12.7417C9.59936 12.55 9.89102 12.4583 10.1577 12.5167C10.216 12.525 10.266 12.5417 10.316 12.5667C10.366 12.5833 10.416 12.6084 10.466 12.6417C10.5077 12.6667 10.5493 12.7083 10.591 12.7417C10.666 12.825 10.7244 12.9167 10.766 13.0167C10.8077 13.1167 10.8327 13.225 10.8327 13.3333C10.8327 13.5583 10.741 13.7667 10.591 13.925C10.5493 13.9583 10.5077 13.9917 10.466 14.025C10.416 14.0583 10.366 14.0834 10.316 14.1C10.266 14.125 10.216 14.1417 10.1577 14.15C10.1077 14.1584 10.0494 14.1667 9.99935 14.1667Z"
              fill="#7D7D7D"/>
          <path
              d="M13.3333 14.1667C13.1083 14.1667 12.9 14.075 12.7417 13.925C12.6667 13.8417 12.6083 13.75 12.5667 13.65C12.525 13.55 12.5 13.4417 12.5 13.3333C12.5 13.1167 12.5917 12.9 12.7417 12.7417C12.7833 12.7083 12.825 12.675 12.8667 12.6417C12.9167 12.6084 12.9667 12.5833 13.0167 12.5667C13.0667 12.5417 13.1167 12.525 13.1667 12.5167C13.4417 12.4583 13.725 12.55 13.925 12.7417C14.075 12.9 14.1667 13.1083 14.1667 13.3333C14.1667 13.4417 14.1417 13.55 14.1 13.65C14.0584 13.7583 14 13.8417 13.925 13.925C13.7667 14.075 13.55 14.1667 13.3333 14.1667Z"
              fill="#7D7D7D"/>
        </svg>
      </TheInput>

      <p class="w-full flex justify-end text-right text-[#7D7D7D] text-[12px] font-bold mb-2 hover:text-[#FD2F70]">
        رمزعبور خود
        را فراموش کرده ام</p>

      <TheMainButton title="ورود"/>

      <TheGoogleLoginBtn/>

      <div class="w-full flex justify-end gap-1.5 text-[#4F4F4F] text-[14px]">
        <NuxtLink href="/signup" class="text-[#07bc93] underline">ثبت نام</NuxtLink>
        <h3>حساب کاربری ندارید؟</h3>
      </div>
    </form>

  </NuxtLayout>
</template>


<script setup>

import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


const email = ref("")
const password = ref("")

const login = async () => {
  await $fetch('/api/login', {
    baseURL: 'http://localhost:3333',
    method: "POST",
    body: {
      email: email.value,
      password: password.value,
    },
    onResponse({response}) {
      if (response._data.errors[0].message === "E_INVALID_AUTH_PASSWORD: Password mis-match") {
          toast.error("پسورد مطابقت ندارد", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
      } else if (response._data.errors[0].message === "E_INVALID_AUTH_UID: User not found") {
        console.log(response._data.errors[0].message)
          toast.error("کاربری با این ایمیل یافت نشد", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
      }

      // if (response.status === 200) {
      //   toast.success("خوش آمدید", {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      //   const user = useCookie('user')
      //   user.value = response._data
      //   navigateTo('/')
      // } else {
      //   toast.error(response._data, {
      //     position: toast.POSITION.BOTTOM_LEFT,
      //   });
      // }
    },


  })

}
</script>