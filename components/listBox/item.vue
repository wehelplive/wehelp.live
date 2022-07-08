<template>
  <div class="w-full h-full">
    <Listbox v-model="selectedItem">
      <div class="relative">
        <ListboxButton
          class="appearance-none block w-full h-16 bg-white-500 cursor-default rounded-xl border border-zinc-50 hover:border-zinc-500 py-2 text-body pl-5 pr-12 text-left text-zinc-500 focus:outline-none focus-visible:border-zinc-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-300"
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
            class="absolute text-left mt-1 max-h-60 w-full overflow-auto rounded-md bg-white-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-body"
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
                  active
                    ? 'text-left bg-neutral-300 text-zinc-800'
                    : 'text-grey-900',
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
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-800"
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
        : 'Select'
    },
  },
  watch: {
    selectedItem(newItem, _) {
      this.$emit('selected', newItem)
    },
  },
}
</script>
