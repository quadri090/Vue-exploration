<template>
    <div class="flex flex-col h-screen justify-between">
        <div class="md:flex h-auto justify-center items-center gap-8 md:mt-[50px]">
            <div class="md:w-[500px]">
                <div class="mx-[20px] md:mx-0 my-[30px] md:my-0 text-[24px] md:text-[38px] font-semibold">
                    <p>Log In</p>
                </div>
                <div class="mx-[20px] md:mx-0 md:mt-[40px]">
                    <p class="text-[14px] md:text-[18px] font-light md:font-normal">Email / Phone Number</p>
                    <input type="email" class="w-[100%] mt-[10px] mx-auto h-[50px] md:h-[60px] border-[1px] rounded-[4px] active:outline-none">
                    <button class="w-[100%] h-[50px] md:h-[60px] mt-[20px] md:mt-[30px] md:text-[20px] bg-yellow-400 rounded-[4px]">Next</button>
                    <div class="flex mt-[15px] items-center">
                        <span class="border-b-[1px] w-[42%]"></span>
                        <p class="flex w-[16%] mb-[5px] items-center justify-center">or</p>
                        <span class="border-b-[1px] w-[42%]"></span>
                    </div>
                    <google />
                    <apple />
                    <div class="mt-[30px]">
                        <RouterLink to="/createAccount" class="text-yellow-700 text-[15px] md:text-[18px] font-semibold md:mt-[30px]">Create a Binance Account</RouterLink>                
                    </div>
                </div>
            </div>

            <div class="hidden md:flex md:w-[500px] outline">
                <div>
                    
                </div>
            </div>

        </div>
        <div class="h-[40px] mx-[20px] md:mt-[]">
            <p class=" flex justify-center items-center text-[12px] md:text-[16px] font-normal text-zinc-600">© 2017 - 2023 Binance.com. All rights reserved <span class="ml-[30px] md:ml-[60px]">Cookie Preferences</span></p>
        </div>
    </div>
</template>

<script setup>
    import google from "../components/google.vue"
    import apple from "../components/apple.vue"
</script>