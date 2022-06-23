<template>
  <div class="flex justify-center pt-40 items-center min-h-full">
    <main class="max-w-7xl sm:-mt-24">
      <div class="px-4">
        <div class="text-center">
          <div class="flex-column gap-8">
            <h1
              class="mt-3 tracking-tight font-nunito text-headline-4 text-zinc-800 sm:text-headline-2"
            >
              <span class="block xl:inline">What help do you need?</span>
            </h1>
          </div>
          <div
            class="mt-8 gap-2 mx-auto flex flex-col items-center justify-center"
          >
            <div
              class="w-full h-1/2 flex items-center justify-center sm:w-1/2 sm:h-16"
            >
              <NuxtLink
                to="/"
                class="outline outline-1 outline-red-500 text-red-500 hover:bg-red-50 hover:outline-red-700 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body sm:rounded-xl"
              >
                Accomodations
              </NuxtLink>
            </div>
            <div
              class="w-full h-1/2 flex items-center justify-center sm:w-1/2 sm:h-16"
            >
              <NuxtLink
                to="/"
                class="outline outline-1 outline-red-500 text-red-500 hover:bg-red-50 hover:outline-red-700 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body sm:rounded-xl"
              >
                Medical assistance
              </NuxtLink>
            </div>
            <div
              class="w-full h-1/2 flex items-center justify-center sm:w-1/2 sm:h-16"
            >
              <NuxtLink
                to="/"
                class="outline outline-1 outline-red-500 text-red-500 hover:bg-red-50 hover:outline-red-700 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body sm:rounded-xl"
              >
                Mobile
              </NuxtLink>
            </div>
            <div
              class="w-full h-1/2 flex items-center justify-center sm:w-1/2 sm:h-16"
            >
              <NuxtLink
                to="/"
                class="text-zinc-500 w-full h-full flex justify-center items-center capitalize rounded-3xl text-body sm:rounded-xl"
              >
                Something Else
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  buttons: [
    {
      name: 'Accomodations',
      to: '/',
    },
    {
      name: 'Medical assistance',
      to: '/',
    },
    {
      name: 'Mobile',
      to: '/',
    },
  ],
}
</script>
