<template>
  <div>
    <div
      class="text-xl text-zinc-900 font-nunito flex justify-center lg:ml-[40px] lg:text-4xl mb-[20px] lg:mb-[24px] lg:mt-[48px]"
    >
      What are we doing?
    </div>
    <div class="text-sm grid grid-rows-4 gap-4 place-content-center">
      <div class="flex flex-col justify-center space-y-4">
        <a href="/services" class="text-royal-blue-500 underline-offset-1"
          >Evacuation planner</a
        >
        <p class="font-openSans">
          Recommendation system based on reviews from real people about services
          that really helped them to solve their issues with easy search.
        </p>
      </div>
      <div class="space-y-4">
        <a href="/guest" class="text-royal-blue-500 underline-offset-1"
          >Accommodation</a
        >
        <p>
          Improve the matching process and make Refugee, Host, Shelter Operator
          and Volunteer happy.
        </p>
      </div>
      <div class="space-y-4">
        <a href="/exchange" class="text-royal-blue-500 underline-offset-1"
          >UAH Exchange in EU</a
        >
        <p>
          We unite in order to solve this issue together.
        </p>
      </div>
      <div class="space-y-4">
        <a href="text-bold">Solve Big Problems</a>
        <p>
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
