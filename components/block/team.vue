<template>
  <div class="bg-white">
    <div
      class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="space-y-8 sm:space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Team
          </h2>
        </div>
        <ul
          role="list"
          class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
        >
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4">
              <img
                class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                :src="person.imageUrl"
                alt=""
              />
              <div class="space-y-2">
                <div class="text-xs font-medium lg:text-sm">
                  <h3>{{ person.name }}</h3>
                  <p class="text-zinc-600">{{ person.role }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="mt-4 mb-6 ml-10 mr-10 max-w-3xl mx-auto sm:flex sm:justify-center md:mt-16"
    >
      <div class="mt-2 sm:mt-0 sm:ml-3">
        <NuxtLink
          to="/"
          class="w-full underline underline-offset-1 flex font-openSans items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 hover:text-zinc-500 md:py-4 md:text-lg md:px-10"
        >
          Meet everyone from our team
        </NuxtLink>
      </div>
      <div class="rounded-3xl mt-4 shadow">
        <NuxtLink
          to="/"
          class="w-full flex font-openSans items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-white-500 bg-green-500 hover:bg-zinc-500 md:py-4 md:text-lg md:px-10"
        >
          Join Our Team
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: 'Gulnara Mustafaeva',
    role: 'Partnerships',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Yulia Movsesova',
    role: 'Communications',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Olga Alilovic',
    role: 'Mission',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Aleksey Razabakov',
    role: 'Coordination',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // More people...
]
</script>
