<template>
  <div class="relative w-44 sm:w-60 p-1">
    <Listbox v-model="selectedItem">
      <div class="relative">
        <ListboxButton
          class="relative w-full cursor-default rounded-lg bg-white-500 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-zinc-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="block truncate">{{
            selectedItem ? selectedItem : defaultItem
          }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <SelectorIcon class="h-5 w-5 text-grey-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white-500 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-for="item in items"
              v-slot="{ active, selected }"
              :key="item.name"
              :value="item.name"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-orange-100 text-orange-900' : 'text-grey-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ item.name }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
<script>
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  MenuItems,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
export default {
  name: 'ListBox',
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    SelectorIcon,
  },
  emits: ['selected'],
  props: {
    items: {
      type: Array,
      default: () => [],
    },

    defaultValue: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    selectedItem: '',
  }),
  computed: {
    defaultItem() {
      return this.items.map((item) => item.name).includes(this.defaultValue)
        ? this.defaultValue
        : 'select'
    },
  },
  watch: {
    selectedItem(newItem, _) {
      this.$emit('selected', newItem)
    },
  },
}
</script>
