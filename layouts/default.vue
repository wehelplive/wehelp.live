<template>
  <div>
    <header class="bg-indigo-600">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div
          class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none"
        >
          <div class="flex items-center">
            <a href="/" class="text-white font-bold">
              <span>WeHelp</span>
            </a>
            <div class="hidden ml-10 space-x-8 lg:block">
              <a
                v-for="link in navigation"
                :key="link.name"
                :href="link.href"
                class="text-base font-medium text-white hover:text-indigo-50"
              >
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
        <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <a
            v-for="link in navigation"
            :key="link.name"
            :href="link.href"
            class="text-base font-medium text-white hover:text-indigo-50"
          >
            {{ link.name }}
          </a>
        </div>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  data: () => ({
    navigation: [
      { name: "Ссылки", href: "/" },
      { name: "Добавить ссылку", href: "/add" },
      { name: "Обмен валют", href: "/exchange" },
      { name: "Есть идея!", href: "/suggest" },
      { name: "Запись в волонтеры", href: "/get-involved" },
      { name: "О проекте", href: "/about" },
    ],
  }),
};
</script>
