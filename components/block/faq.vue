<template>
  <div class="bg-neutral-300">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-grey-200">
        <h2
          class="text-center text-3xl font-extrabold text-grey-800 sm:text-4xl"
        >
          Frequently asked questions
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-grey-200">
          <Disclosure v-slot="{ open }" as="div" class="pt-6">
            <dt class="text-lg">
              <DisclosureButton
                class="text-left w-full flex justify-between items-start text-grey-400"
              >
                <span class="font-medium text-grey-800">
                  How are you different?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon
                    :class="[
                      open ? '-rotate-180' : 'rotate-0',
                      'h-6 w-6 transform',
                    ]"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12 prose">
              <ul>
                <li>
                  We feel pain of Ukrainians, because we or our friends have
                  families in Ukraine
                </li>
                <li>
                  We use
                  <a
                    target="_blank"
                    href="https://patterns.sociocracy30.org/principles.html"
                    >7 principles</a
                  >
                  that shape the organizational culture: Performance, Consent,
                  Empiricism, Continuous Development, Equivalence, Transparency,
                  Responsibility.
                </li>
                <li>
                  We
                  <a
                    href="https://designsprintkit.withgoogle.com/methodology/overview"
                    >solve big problems in 5 days</a
                  >
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import { ChevronDownIcon } from '@heroicons/vue/outline'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
}
</script>
