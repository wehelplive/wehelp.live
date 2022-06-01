<template>
  <div>
    <div
      class="text-xl text-zinc-900 font-nunito flex justify-center lg:text-4xl mb-[20px] mt-[32px] lg:mb-[24px] lg:mt-[48px]"
    >
      <h3>
        What are we doing?
      </h3>
    </div>
    <div class="text-sm grid grid-rows-4 gap-4 place-content-center mx-[20px]">
      <div class="space-y-4">
        <a href="/" class="font-bold font-nunito underline-offset-1"
          ><h3>Evacuation planner</h3></a
        >
        <p class="font-openSans text-zinc-700">
          Recommendation system based on reviews from real people about services
          that really helped them to solve their issues with easy search.
        </p>
      </div>
      <div class="space-y-4">
        <a href="/" class="font-bold font-nunito underline-offset-1"
          ><h3>Accommodation</h3></a
        >
        <p class="font-openSans text-zinc-700">
          Improve the matching process and make Refugee, Host, Shelter Operator
          and Volunteer happy.
        </p>
      </div>
      <div class="space-y-4">
        <a href=" /" class="font-bold font-nunito underline-offset-1"
          ><h3>UAH Exchange in EU</h3></a
        >
        <p class="font-openSans text-zinc-700">
          We unite in order to solve this issue together.
        </p>
      </div>
      <div class="space-y-4">
        <a href="/" class="font-bold font-nunito underline-offset-1"
          ><h3>Big Problems</h3></a
        >
        <p class="font-openSans text-zinc-700">
          We bring experts to solve big problems. There are no unsolvable tasks.
        </p>
      </div>
    </div>
    <div class="flex justify-center mt-14">
      <NuxtLink
        to="/"
        class="flex font-openSans items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-white-500 bg-red-500 hover:bg-zinc-500 md:py-4 md:text-lg md:px-10"
      >
        Suggest New
      </NuxtLink>
    </div>
  </div>
</template>
