<script setup>
    import navigation from "../components/navigation.vue"
    import google from "../components/google.vue"
    import apple from "../components/apple.vue"
</script>

<template>
    <navigation />
    <div class="mx-[20px]  flex flex-col justify-between h-screen md:h-auto ">
        <div class=" md:flex md:flex-row-reverse md:gap-36 md:justify-center items-center">
            <div class="md:w-[480px] md:mt-[100px] text-zinc-600">
                <div class="h-[250px] md:h-[300px]">
                    <img src="/src/assets/img/binance image.png" class="w-[100%] h-[200px] my-[15px] md:h-[270px]" alt="An image">
                </div>
                <p class="text-[22px] md:text-[28px] md:text-center font-semibold">Sign up to get 100 USDT trading fee rebate! <span class="sm:hidden ml-[7px] text-[12px] text-yellow-600">FAQ</span></p>
                <p class="hidden md:block text-center text-[20px] mt-[20px]">Follow the registration steps to redeem your rewards and start your crypto journey with us! <span class="ml-[7px] text-[22px] text-yellow-600">FAQ</span></p>
            </div>
    
            <div class="md:w-[480px] md:mt-[180px]">
                <p class="hidden md:flex text-[36px] font-semibold">Welcome to Binance!</p>
                <button class="w-[100%] h-[50px] md:h-[60px] flex items-center justify-center gap-[10px] mt-[15px] md:mt-[50px] bg-yellow-400 rounded-[4px] text-[15px] md:text-[20px] font-semibold">Sign Up with Email or Phone</button>
                <div class="flex mt-[15px] items-center">
                    <span class="border-b-[1px] w-[42%]"></span>
                    <p class="flex w-[16%] mb-[5px] items-center justify-center">or</p>
                    <span class="border-b-[1px] w-[42%]"></span>
                </div>
                <google />
                <apple />
                <p class="mt-[20px] text-[15px] md:text-[18px] text-zinc-600">Already Registered?<span class="ml-[5px] text-yellow-600"> <RouterLink to="/">Log In</RouterLink> </span></p>
                <div class="mt-[20px]">
                    <RouterLink to="/entityAccount" class="text-[15px] md:text-[18px] text-yellow-600">Sign up for entity account</RouterLink>
                </div>
            </div>
        </div>

        <div class="mt-[60px] my-[10px] md:mt-[100px] flex items-center justify-center text-[12px] md:text-[14px]">
            <p class="text-zinc-600">Cookie Preferences</p>
        </div>
    </div>



</template>