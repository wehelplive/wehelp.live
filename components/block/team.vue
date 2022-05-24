<template>
  <div class="bg-white ">
    <div
      class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="space-y-22 sm:space-y-22">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2
            class=" font-nunito font-semibold md:font-extrabold text-headline-6 mb-10 tracking-tight sm:text-headline-5"
          >
            Our Team
          </h2>
        </div>
        <ul
          role="list"
          class="mx-auto grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4"
        >
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4">
              <img
                class="mx-auto h-28 w-28 rounded-full drop-shadow lg:w-40 lg:h-40"
                :src="person.imageUrl"
                :alt="person.name"
              />
              <div class="space-y-4">
                <div
                  class="text-body font-nunito text-regular font-medium lg:text-subtitle"
                >
                  <h3>{{ person.name }}</h3>
                  <p class="mt-2 text-caption lg:text-body text-zinc-600">
                    {{ person.role }}
                  </p>
                </div>
                <div class="space-y-2">
                  <ul role="list" class="flex justify-center space-x-2">
                    <li v-for="(value, key) in person.networks" :key="key">
                      <a
                        :href="value"
                        class="text-slate-500  hover:text-slate-400"
                      >
                        <span class="sr-only">{{ key }}</span>
                        <img class="fill-currentColor" :src="icons[key]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="mt-4 mb-6 pl-10 pr-10 max-w-3xl mx-auto sm:flex sm:justify-center md:justify-center lg:justify-center  md:mt-16"
    >
      <div class="mt-2 ">
        <NuxtLink
          to="/"
          class="w-full underline underline-offset-1 flex font-openSans font-semibold font-body items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 hover:text-zinc-500 md:py-4 md:text-lg md:px-10"
        >
          Meet everyone from our team
        </NuxtLink>
      </div>
      <div class="rounded-3xl mt-2 sm:ml-4 shadow">
        <NuxtLink
          to="/get-involved"
          class="w-full flex font-openSans items-center font-semibold font-body justify-center px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-white-500 bg-green-500 hover:bg-zinc-500 md:py-4 md:text-lg md:px-10"
        >
          Join Our Team
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const people = [
  {
    name: 'Gulnara Mustafaeva',
    role: 'Partnerships',
    imageUrl: 'team/GulnaraMustafaeva.jpg',
    networks: {
      linkedin: 'https://www.linkedin.com/in/gulia-mustafayeva/',
      telegram: 'https://t.me/gulnara_mustafayeva',
    },
  },
  {
    name: 'Yulia Movsesova',
    role: 'Communications',
    imageUrl: 'team/YuliaMovsesova.jpg',
    networks: {
      linkedin: 'https://www.linkedin.com/in/yuliamm/',
    },
  },
  {
    name: 'Olga Alilovic',
    role: 'Mission',
    imageUrl: 'team/OlgaAlilovic.jpg',
    networks: {
      linkedin: 'https://www.linkedin.com/in/olga-alilovic-a3516a12/',
    },
  },
  {
    name: 'Aleksey Razabakov',
    role: 'Coordination',
    imageUrl: 'team/AlekseyRazabakov.jpg',
    networks: {
      linkedin: 'https://www.linkedin.com/in/razbakov/',
      telegram: 'https://t.me/AlexRazbakov',
    },
  },
]
// eslint-disable-next-line no-unused-vars
const icons = {
  linkedin: '/icons/LinkedIn.svg',
  telegram: '/icons/Telegram.svg',
  facebook: '/icons/Facebook.svg',
  githab: '/icons/Github.svg',
  instagram: '/icons/Instagram.svg',
  twitter: '/icons/Twitter.svg',
  youtube: '/icons/YouTube.svg',
  medium: '/icons/Medium.svg',
  angellist: '/icons/Angellist.svg',
}
</script>
