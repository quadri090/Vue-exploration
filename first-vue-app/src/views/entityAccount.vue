<script setup>
    import navigation from "../components/navigation.vue"
</script>

<template>
    <navigation />
    <div class="flex flex-col justify-between h-screen md:h-auto ">

        <div class="h-auto md:w-[500px] md:ml-[380px] md:mt-[170px]">
            <div class="mx-[20px] md:mx-0 my-[30px] md:my-0 text-[24px] md:text-[42px] font-semibold">
                <p>Enter Entity Info</p>
            </div>
            <div class="mx-[20px] md:mx-0 md:mt-[40px] text-zinc-600">
                <p class=" mt-[20px] text-[14px] md:text-[18px] font-normal md:font-normal">Entity Name</p>
                <input type="dropdown" class="w-[100%] mt-[5px] mx-auto h-[50px] md:h-[60px] border-[1px] rounded-[4px] active:outline-none">
                <div class="mt-[20px]">
                    <p class="text-[14px] md:text-[18px] font-normal md:font-normal">Legal Form of Your Entity  <RouterLink to="/legalform"><i class="md:hidden fa fa-exclamation-circle"></i></RouterLink> </p>
                    <input type="text" id="entity" class="w-[100%] mt-[5px] mx-auto h-[50px] md:h-[60px] border-[1px] rounded-[4px] text-[14px] pl-[10px]" placeholder="Choose a legal type"  />
    
                    <!-- <label for="entity" class=" text-[14px] md:text-[18px] font-light md:font-normal">Legal Form of Your Entity</label>
                    <select type="dropdown" name="entity" id="entity" placeholder="choose a legal entity" class="w-[100%] mx-auto h-[50px] md:h-[60px] text-[12px] md:text-[16px] font-normal border-[1px] rounded-[4px]">
                                <option Value=""></option>
                                <option value="">Company Limited By Shares or guarantee</option>
                                <option Value="">Trust</option>
                                <option value="">Patnership</option>
                                <option Value="">Limited Liability Company</option>
                                <option value="">Segregated Portfolio/Protected Cell/<br>Variable Capital Type Companies</option>
                                <option Value="">Foundations / Co-Ops / Unions / Associations / Clubs / Societies</option>
                                <option value="">Government Body/Agency</option>
                    </select> -->
                </div>
                <button class="w-[100%] h-[50px] md:h-[60px] mt-[20px] md:mt-[30px] md:text-[20px] bg-yellow-400 rounded-[4px] text-black">Next</button>
                <p class="mt-[20px] text-[14px] md:text-[18px] font-normal text-zinc-600">Not looking for an entity account?<span class="ml-[5px] text-yellow-600"> <RouterLink to="/">Sign up for a normal account</RouterLink> </span></p>
            </div>
        </div>
        <div class="mx-[20px] h-auto my-[15px] md:mt-[50px]">
            <p class=" flex justify-center items-center text-[12px] md:text-[16px] font-normal text-zinc-600">© 2017 - 2023 Binance.com. All rights reserved <span class="ml-[30px] md:ml-[60px]">Cookie Preferences</span></p>
        </div>
    </div>
</template>