<template>
  <div class="bg-white-500">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center divide-y divide-neutral-500">
        <h2
          class="font-nunito font-semibold text-headline-6 mb-10 tracking-tight sm:text-headline-4"
        >
          FAQ
        </h2>
        <FaqItem title="What is the organisation structure?" faq-id="1">
          <img
            class="object-cover w-full h-full"
            src="/structure.jpg"
            alt="organisation structure"
          />
        </FaqItem>
        <FaqItem title="How can I meet my team?" faq-id="2">
          <ol class="pl-8 list-decimal break-words">
            <li class="text-subtitle p-2">
              Where can I find the full schedule? Subscribe to calendar -
              <a
                class="text-black hover:text-grey-300 underline"
                href="https://wehelp.live/calendar/"
                >https://wehelp.live/calendar/</a
              >
            </li>
            <li class="text-subtitle p-2">
              How to join a team meeting? Follow the Welcome Guide on Slack
              (channel #welcome).
            </li>
            <li class="text-subtitle p-2">
              How do I join Slack? Sign up as a volunteer at
              <a
                class="text-black hover:text-grey-300 underline"
                href="https://wehelp.live/get-involved/"
                >https://wehelp.live/get-involved/</a
              >
              and you will get an invitation to our Slack.
            </li>
          </ol>
        </FaqItem>
        <FaqItem title="How to schedule a Meeting?" faq-id="3">
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
        <FaqItem title="Where do I get WeHelp brand assets?" faq-id="4">
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
        <FaqItem
          title="Where do I find all available information about WeHelp?"
          faq-id="5"
        >
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
