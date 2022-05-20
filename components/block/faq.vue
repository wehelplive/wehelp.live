<template>
  <div class="bg-white-500">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y divide-neutral-500">
        <h2 class="font-semibold text-headline-6 font-nunito text-black-500">
          {{ t('home.faq.title.main') }}
        </h2>
        <FaqItem :title="t('home.faq.title.first')" faq-id="1">
          <img
            class="object-cover w-full h-full"
            src="/structure.jpg"
            alt="organisation structure"
          />
        </FaqItem>
        <FaqItem :title="t('home.faq.title.second')" faq-id="2">
          <ol class="pl-8 list-decimal break-words">
            <li class="text-subtitle p-2">
              {{ t('home.faq.list.one[0]') }}
              <a
                class="text-black hover:text-grey-300 underline"
                href="https://wehelp.live/calendar/"
                >https://wehelp.live/calendar/</a
              >
            </li>
            <li class="text-subtitle p-2">
              {{ t('home.faq.list.one[1]') }}
            </li>
            <li class="text-subtitle p-2">
              {{ t('home.faq.list.one[2]') }}
              <a
                class="text-black hover:text-grey-300 underline"
                href="https://wehelp.live/get-involved/"
                >https://wehelp.live/get-involved/</a
              >
              {{ t('home.faq.list.one[3]') }}
            </li>
          </ol>
        </FaqItem>
        <FaqItem :title="t('home.faq.title.third')" faq-id="3">
          <ol class="pl-8 list-decimal break-words">
            <li class="text-subtitle p-2">
              {{ t('home.faq.list.two[0]') }}
              <a
                class="text-black-500 hover:text-grey-300 underline"
                href="https://patterns.sociocracy30.org/meeting-formats.html"
                >https://patterns.sociocracy30.org/meeting-formats.html/</a
              >
            </li>
            <li class="text-subtitle p-2">
              {{ t('home.faq.list.two[1]') }}
              <a
                class="text-black-500 hover:text-grey-300 underline"
                href="https://patterns.sociocracy30.org/prepare-for-meetings.html"
                >https://patterns.sociocracy30.org/prepare-for-meetings.html</a
              >
            </li>
            <li class="text-subtitle p-2">
              {{ t('home.faq.list.two[2]') }}
              <a
                class="text-black-500 hover:text-grey-300 underline"
                href=" https://patterns.sociocracy30.org/meeting-host.html"
              >
                https://patterns.sociocracy30.org/meeting-host.html</a
              >
            </li>
          </ol>
        </FaqItem>
        <FaqItem :title="t('home.faq.title.fourth')" faq-id="4">
          <div class="pl-4">
            <div class="text-subtitle p-2">
              {{ t('home.faq.subtitle.one[0]') }}
              <a
                class="text-black hover:text-grey-300 underline"
                href="https://drive.google.com/drive/folders/1MwIxcYWOrFmLnq4zMPejsGFF1SRHU7Fi)"
              >
                {{ t('home.faq.subtitle.one[1]') }}</a
              >
              {{ t('home.faq.subtitle.one[2]') }}
              <span class="font-semibold">
                {{ t('home.faq.subtitle.one[3]') }}</span
              >
              {{ t('home.faq.subtitle.one[4]') }}
            </div>
            <div class="text-subtitle p-2">
              {{ t('home.faq.subtitle.two[0]') }}
              <a
                class="text-black hover:text-grey-300 underline"
                href="https://www.figma.com/file/VCJKSEBUVXn5xyGShP9LHc/WeHelp-Design?node-id=4%3A631"
                >{{ t('home.faq.subtitle.two[1]') }}</a
              >
            </div>
            <div class="text-subtitle p-2">
              {{ t('home.faq.subtitle.three') }}
            </div>
            <ul class="list-disc ml-8">
              <li class="text-subtitle p-2">
                {{ t('home.faq.list.three[0]') }}
              </li>
              <li class="text-subtitle p-2">
                {{ t('home.faq.list.three[1]') }}
              </li>
              <li class="text-subtitle p-2">
                {{ t('home.faq.list.three[2]') }}
              </li>
              <li class="text-subtitle p-2">
                {{ t('home.faq.list.three[3]') }}
              </li>
            </ul>
          </div>
        </FaqItem>
        <FaqItem :title="t('home.faq.title.fifth')" faq-id="5">
          <span class="text-subtitle ml-6"
            >{{ t('home.faq.subtitle.four[0]') }}
            <a
              class="text-black hover:text-grey-300 underline"
              href="https://drive.google.com/drive/folders/1MwIxcYWOrFmLnq4zMPejsGFF1SRHU7Fi)"
              >{{ t('home.faq.subtitle.four[1]') }}</a
            >.</span
          >
        </FaqItem>
      </div>
    </div>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
}
</script>
