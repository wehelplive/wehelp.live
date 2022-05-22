<template>
  <div class="bg-white ">
    <div
      class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="space-y-22 sm:space-y-22">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 class="text-3xl mb-10 font-extrabold tracking-tight sm:text-4xl">
            Our Team
          </h2>
        </div>
        <ul
          role="list"
          class="mx-auto  grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4"
        >
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4">
              <img
                class="mx-auto h-28 w-28 rounded-full drop-shadow lg:w-40 lg:h-40"
                :src="person.imageUrl"
                :alt="person.name"
              />
              <div class="space-y-4">
                <div class="text-xs font-medium lg:text-sm">
                  <h3>{{ person.name }}</h3>
                  <p class="mt-2 text-zinc-600">{{ person.role }}</p>
                </div>
                <div class="space-y-4">
                  <ul role="list" class="flex justify-center space-x-2">
                    <li v-for="icon in icons" :key="icon.name">
                      <div v-if="person.networks[icon.name]" :key="person.name">
                        <a
                          :href="person.networks[icon.name]"
                          class="text-slate-500  hover:text-slate-400"
                        >
                          <span class="sr-only">{{ icon.name }}</span>
                          <!-- <svg
                            class="w-6 h-6 "
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path :d="icon.path" />
                          </svg> -->
                          <img class="fill-currentColor" :src="icon.picture" />
                        </a>
                      </div>
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
          class="w-full underline underline-offset-1 flex font-openSans items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 hover:text-zinc-500 md:py-4 md:text-lg md:px-10"
        >
          Meet everyone from our team
        </NuxtLink>
      </div>
      <div class="rounded-3xl mt-2 sm:ml-4 shadow">
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
// eslint-disable-next-line no-unused-vars
const people = [
  {
    name: 'Gulnara Mustafaeva',
    role: 'Partnerships',
    imageUrl: '/GulnaraMustafaeva.jpg',
    // twitterUrl: '#'
    networks: {
      instagram: 'https://www.instagram.com/guliamustafayeva/',
      linkedin: 'https://www.linkedin.com/in/gulia-mustafayeva/',
      facebook: 'https://www.facebook.com/profile.php?id=100001584059213',
      telegram: 'https://t.me/gulnara_mustafayeva',
    },
  },
  {
    name: 'Yulia Movsesova',
    role: 'Communications',
    imageUrl: '/YuliaMovsesova.jpg',
    networks: {
      linkedin: 'https://www.linkedin.com/in/yuliamm/',
    },
  },
  {
    name: 'Olga Alilovic',
    role: 'Mission',
    imageUrl: '/OlgaAlilovic.jpg',
    networks: {},
  },
  {
    name: 'Aleksey Razabakov',
    role: 'Coordination',
    imageUrl: '/AlekseyRazabakov.jpg',
    networks: {
      linkedin: 'https://www.linkedin.com/in/razbakov/',
      facebook: 'https://www.facebook.com/razbakov',
      telegram: 'https://t.me/AlexRazbakov',
    },
  },
  // More people...
]
// eslint-disable-next-line no-unused-vars
const icons = [
  {
    name: 'linkedin',
    nameUrl: 'linkedinUrl',
    picture: '/icons20/LinkedIn.svg',
  },
  {
    name: 'telegram',
    nameUrl: 'telegramUrl',
    picture: '/icons20/Telegram.svg',
  },

  {
    name: 'facebook',
    nameUrl: 'facebookUrl',
    picture: '/icons20/Facebook.svg',
  },

  {
    name: 'githab',
    nameUrl: 'githabUrl',
    picture: '/icons20/Github.svg',
  },

  {
    name: 'instagram',
    nameUrl: 'instagramUrl',
    picture: '/icons20/Instagram.svg',
  },

  {
    name: 'twitter',
    nameUrl: 'twitterUrl',
    picture: '/icons20/Twitter.svg',
  },

  {
    name: 'youtube',
    nameUrl: 'youtubeUrl',
    picture: '/icons20/YouTube.svg',
  },

  {
    name: 'medium',
    nameUrl: 'mediumUrl',
    picture: '/icons20/Medium.svg',
  },

  {
    name: 'angellist',
    nameUrl: 'angellistUrl',
    picture: '/icons20/Angellist.svg',
  },

  // More icons...
]
</script>
