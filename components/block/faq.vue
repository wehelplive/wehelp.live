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
              {{ t('home.faq.content.firstList[0]') }}
              <a
                class="text-black hover:text-grey-300 underline"
                href="https://wehelp.live/calendar/"
                >https://wehelp.live/calendar/</a
              >
            </li>
            <li class="text-subtitle p-2">
              {{ t('home.faq.content.firstList[1]') }}
            </li>
            <li class="text-subtitle p-2">
              {{ t('home.faq.content.firstList[2]') }}
              <a
                class="text-black hover:text-grey-300 underline"
                href="https://wehelp.live/get-involved/"
                >https://wehelp.live/get-involved/</a
              >
              {{ t('home.faq.content.firstList[1]') }}
            </li>
          </ol>
        </FaqItem>
        <FaqItem :title="t('home.faq.title.third')" faq-id="3">
          <ol class="pl-8 list-decimal break-words">
            <li class="text-subtitle p-2">
              What kind of meetings do we have? 1-1 to discuss topics,
              Retrospective, Governance Meeting, Daily Standup, Planning And
              Review Meetings, Coordination Meeting, read more:
              <a
                class="text-black-500 hover:text-grey-300 underline"
                href="https://patterns.sociocracy30.org/meeting-formats.html"
                >https://patterns.sociocracy30.org/meeting-formats.html/</a
              >
            </li>
            <li class="text-subtitle p-2">
              How to prepare for a meeting?
              <a
                class="text-black-500 hover:text-grey-300 underline"
                href="https://patterns.sociocracy30.org/prepare-for-meetings.html"
                >https://patterns.sociocracy30.org/prepare-for-meetings.html</a
              >
            </li>
            <li class="text-subtitle p-2">
              Responsibilities of a meeting host
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
              All downloadable files you can find in our
              <a
                class="text-black hover:text-grey-300 underline"
                href="https://drive.google.com/drive/folders/1MwIxcYWOrFmLnq4zMPejsGFF1SRHU7Fi)"
                >Google Drive</a
              >
              in
              <span class="font-semibold">Design/Branding</span>
              folder.
            </div>
            <div class="text-subtitle p-2">
              Source files are in
              <a
                class="text-black hover:text-grey-300 underline"
                href="https://www.figma.com/file/VCJKSEBUVXn5xyGShP9LHc/WeHelp-Design?node-id=4%3A631"
                >WeHelp Figma</a
              >
            </div>
            <div class="text-subtitle p-2">What’s included:</div>
            <ul class="list-disc ml-8">
              <li class="text-subtitle p-2">Logo</li>
              <li class="text-subtitle p-2">Brand guidelines</li>
              <li class="text-subtitle p-2">Presentation templates</li>
              <li class="text-subtitle p-2">Instagram post templates</li>
            </ul>
          </div>
        </FaqItem>
        <FaqItem :title="t('home.faq.title.fifth')" faq-id="5">
          <span class="text-subtitle ml-6"
            >In our
            <a
              class="text-black hover:text-grey-300 underline"
              href="https://drive.google.com/drive/folders/1MwIxcYWOrFmLnq4zMPejsGFF1SRHU7Fi)"
              >Google Drive</a
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
