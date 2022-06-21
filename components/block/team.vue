<template>
  <div>
    <div class="max-w-7xl mx-auto px-4  sm:px-6 items-start text-center">
      <div class="space-y-22 sm:space-y-22">
        <div
          class="space-y-5 sm:mx-auto sm:space-y-4 gap-2 py-4 sm:py-8 px-6 sm:px-12"
        >
          <h2
            class="font-nunito font-semibold text-headline-6 tracking-tight sm:text-headline-4"
          >
            {{ t('team.title') }}
          </h2>
        </div>
        <ul
          role="list"
          class="mx-auto grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4 py-14"
        >
          <li v-for="person in people" :key="person.name">
            <TeamPerson :person="person" />
          </li>
        </ul>
      </div>
    </div>
    <div class="my-4 px-10 max-w-3xl mx-auto flex justify-center items-center">
      <div class="mt-2 ">
        <!-- <NuxtLink
          to="/"
          class="w-full underline underline-offset-1 flexfont-sans font-semibold font-body items-center justify-center px-8 py-3 border border-transparent rounded-md text-green-500 hover:text-zinc-500 md:py-4 md:text-lg md:px-10"
        >
          Meet everyone from our team
        </NuxtLink> -->
      </div>
      <div
        class="flex flex-row justify-center items-center gap-2 rounded-3xl my-4 mx-10 shadow w-72 h-12 sm:w-48 bg-green-500"
      >
        <NuxtLink
          to="/get-involved"
          class=" hover:bg-zinc-500 text-white-500 flex items-center justify-center w-full h-full capitalize rounded-3xl text-body font-sans"
        >
          {{ t('team.join') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n()
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
        name: 'Aleksey Razbakov',
        role: 'Coordination',
        imageUrl: 'team/AlekseyRazabakov.jpg',
        networks: {
          linkedin: 'https://www.linkedin.com/in/razbakov/',
          telegram: 'https://t.me/AlexRazbakov',
        },
      },
    ]

    return {
      t,
      people,
    }
  },
}
</script>
