<template>
   <nav class="border w-full h-[72px] bg-white flex justify-between items-center py-[16px] px-[120px] max-h-full">
        <!-- NAV LEFT PART  -->
        <div class="flex items-center jutify-center gap-[7px]">
            <button class="bg-[linear-gradient(44deg,#B51F4F_0%,#FD2F70_100%)] p-2 w-[84px] text-white rounded-lg
                hover:bg-[linear-gradient(44deg,#FD2F70_0%,#B51F4F_100%)] transition-all duration-1000 ease-linear">
                ثبت نام     
            </button>

            <button class="bg-white p-2 w-[84px] border text-[#FD2F70] border-[#FD2F70] rounded-lg">
                ورود
            </button>
        </div>
        <!--NAV RIGHT PART  -->
        <div class="flex gap">
            <div class="flex items-center justify-end gap-8">
                <a
          class="relative block
            after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
            after:hover:scale-x-100 hover:text-[#FD2F70]"
                >وبلاگ</a>

                <a
                class="relative block
                    after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
                    after:hover:scale-x-100 hover:text-[#FD2F70]">
                ثبت درخواست معامله
                </a>

                <a
                class="relative block
                    after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
                    after:hover:scale-x-100 hover:text-[#FD2F70]">
                درباره ما
                </a>

                <a
                class="relative block
                    after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
                    after:hover:scale-x-100 hover:text-[#FD2F70]">
                تماس با ما
                </a>

                <a
                class="relative block
                    after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
                    after:hover:scale-x-100 hover:text-[#FD2F70]">
                معامله سریع
                </a>

                <a
                class="relative block
                    after:block after:content-[''] after:absolute after:h-[1px] after:bg-[#FD2F70] after:w-full after:scale-x-0 after:transition after:duration-300
                    after:hover:scale-x-100 hover:text-[#FD2F70]">
                2P2 معامله
                </a>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M7 3.33338C7 2.78109 7.44772 2.33337 8 2.33337H48C48.5523 2.33337 49 2.78109 49 3.33337V43.3334C49 43.8857 48.5523 44.3334 48 44.3334H8C7.44772 44.3334 7 43.8857 7 43.3334V3.33338ZM15.6081 22.0142L15.6222 12.4011C18.1403 12.2346 25.0479 12.4008 28.1453 12.3791C32.7291 12.3471 35.8787 11.8897 38.0241 15.0498C40.1334 18.1565 38.8795 22.0407 36.2066 23.6826C34.832 24.5271 33.8946 24.5838 32.3595 24.595C31.6029 24.6007 31.6167 24.652 31.2209 24.2317C30.5951 23.5683 28.4216 21.5432 28.1076 21.0315C28.3492 20.55 30.8151 18.4977 31.1593 17.8119L21.0934 17.8177L21.0922 27.8812C21.5581 27.6742 24.2885 24.7229 24.3214 24.6788C25.0902 25.4443 29.1801 29.4594 29.7513 30.0034C28.9952 30.7691 27.0842 32.6156 26.4144 33.2172C25.241 32.0722 16.6209 23.0321 15.6081 22.0142ZM10.5098 40.0751L19.6223 40.0542C19.2325 39.6379 10.924 31.2274 10.5155 30.977L10.5098 40.0751ZM29.7513 30.0034C30.3444 30.4569 30.9705 31.1752 31.5148 31.7234C32.0983 32.3112 32.6048 32.8193 33.1932 33.4016L38.3201 38.5499C38.6342 38.8634 38.8807 39.1011 39.1878 39.4125C39.5061 39.735 39.6141 40.0307 40.146 40.0784L46.9969 40.0687C46.7936 39.6554 42.4819 35.4043 41.6851 34.6434L38.9468 31.9733C38.3074 31.3179 36.6191 29.7865 36.3303 29.2531L36.7147 29.0606C38.487 28.3042 39.7949 27.7252 41.2144 26.096C44.0658 22.823 45.114 18.2877 43.3031 14.1C42.4273 12.075 41.2693 10.7661 39.8691 9.63413C36.1617 6.63574 31.8521 7.28773 26.3067 7.29075C21.0578 7.29347 15.752 7.36618 10.5101 7.28623C10.5786 12.4995 10.4458 17.8065 10.5197 22.979C10.5475 24.9078 10.123 24.1714 12.3149 26.3687C15.812 29.8755 19.2062 33.3545 22.7456 36.8247C22.5917 37.1605 21.5354 38.1351 21.2177 38.4434C20.7247 38.9213 20.0199 39.525 19.6733 40.0739L29.7676 40.0675L29.7513 30.0034Z"
                        fill="#FD2F70"/>
                </svg>
            </div>
        </div>

   </nav>
</template>