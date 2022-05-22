<template>
  <div
    class="flex justify-center pt-40 items-center min-h-full bg-gradient-to-r from-blue-sky-200 to-yellow-sun-100"
  >
    <main class="max-w-7xl sm:-mt-24">
      <div class="px-4">
        <div class="text-center">
          <h1
            class="text-4xl mt-3 tracking-tight font-nunito uppercase font-extra text-zinc-800 sm:text-5xl md:text-6xl"
          >
            <span class="block xl:inline">Evacuation to EU</span>
          </h1>
          <p
            class="mt-5 max-w-md mx-auto text-base font-nunito text-zinc-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            We help to solve complex problems in the Ukrainian refugee crisis in
            EU
          </p>
          <div
            class="mt-16 mb-5 max-w-3xl mx-auto sm:flex sm:justify-center md:mt-16"
          >
            <div class="rounded-3xl shadow">
              <NuxtLink
                to="/guest"
                class="w-full flex font-nunito items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-white-500 bg-red-500 hover:bg-zinc-500 md:py-4 md:text-lg md:px-10"
              >
                Find Accomodation
              </NuxtLink>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <NuxtLink
                to="/host"
                class="w-full underline underline-offset-1 flex font-nunito items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 hover:text-zinc-500 md:py-4 md:text-lg md:px-10"
              >
                Offer Accomodation
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-no-repeat bg-top bg-favicon-transp h-60 w-full"></div>
    </main>
  </div>
</template>
