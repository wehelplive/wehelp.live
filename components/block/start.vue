<template>
  <div class="bg-gradient-to-r from-blue-500">
    <div
      class="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-yellow-100"
    >
      <main>
        <div class="max-w-7xl px-4 sm:mt-24">
          <div class="text-center">
            <h1
              class="text-4xl mt- tracking-tight uppercase font-extra text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">Evacuation to EU</span>
            </h1>
            <p
              class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              We help to solve complex problems in the Ukrainian refugee crisis
              in EU
            </p>
            <div
              class="mt-8 max-w-3xl mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <div class="rounded-3xl shadow">
                <NuxtLink
                  to="/request"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                >
                  I need help
                </NuxtLink>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <NuxtLink
                  to="/get-involved"
                  class="w-full underline underline-offset-1 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 hover:text-green-800 md:py-4 md:text-lg md:px-10"
                >
                  I can help
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-no-repeat bg-top bg-favicon-transp h-60 w-full"></div>
      </main>
    </div>
  </div>
</template>
