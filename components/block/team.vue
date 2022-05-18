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
          class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4"
        >
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4">
              <img
                class="mx-auto h-24 w-24 rounded-full lg:w-30 lg:h-30"
                :src="person.imageUrl"
                alt=""
              />
              <div class="space-y-4">
                <div class="text-xs font-medium lg:text-sm">
                  <h3>{{ person.name }}</h3>
                  <p class="mt-2 text-zinc-600">{{ person.role }}</p>
                </div>
                <div class="space-y-4">
                  <ul role="list" class="flex justify-center space-x-2">
                    <li>
                      <a
                        :href="person.twitterUrl"
                        class="text-slate-500 hover:text-slate-400"
                      >
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        :href="person.linkedinUrl"
                        class="text-slate-500 hover:text-slate-400"
                      >
                        <span class="sr-only">LinkedIn</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clip-rule="evenodd"
                          />
                        </svg>
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
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Yulia Movsesova',
    role: 'Communications',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Olga Alilovic',
    role: 'Mission',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Aleksey Razabakov',
    role: 'Coordination',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]
</script>
