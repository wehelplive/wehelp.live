<template>
  <div id="locale-switcher" class="min-w-fit">
    <div>
      <select
        v-model="$i18n.locale"
        class="form-select uppercase w-13 h-12 rounded-lg block w-full px-3 py-1.5 text-base font-normal text-slate-500 bg-white-500 bg-clip-padding bg-no-repeat border border-solid border-slate-200 transition ease-in-out m-0 focus:text-slate-500 focus:bg-white-500 focus:border-royal-blue-600 focus:outline-none"
      >
        <option
          v-for="(locale, i) in $i18n.availableLocales"
          :key="`Lang${i}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
  </div>
</template>
