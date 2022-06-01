<template>
  <div>
    <div
      class="text-xl text-zinc-900 font-nunito flex justify-center lg:text-4xl mb-5 mt-8 lg:mb-6 lg:mt-12"
    >
      What are we doing?
    </div>
    <div
      class="text-sm grid grid-cols-2 gap-4 place-content-center lg:ml-72 mx-5"
    >
      <div class="space-y-4 max-w-sm">
        <p class="font-bold font-nunito underline-offset-1">
          Evacuation planner
        </p>
        <p class="font-openSans text-zinc-700">
          Recommendation system based on reviews from real people about services
          that really helped them to solve their issues with easy search.
        </p>
      </div>
      <div class="space-y-4 max-w-sm">
        <p class="font-bold font-nunito underline-offset-1">Accommodation</p>

        <p class="font-openSans text-zinc-700">
          Improve the matching process and make Refugee, Host, Shelter Operator
          and Volunteer happy.
        </p>
      </div>
      <div class="space-y-4 max-w-sm">
        <p class="font-bold font-nunito underline-offset-1">
          UAH Exchange in EU
        </p>
        <p class="font-openSans text-zinc-700">
          We unite in order to solve this issue together.
        </p>
      </div>
      <div class="space-y-4 max-w-sm">
        <p class="font-bold font-nunito underline-offset-1">Big Problems</p>
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
