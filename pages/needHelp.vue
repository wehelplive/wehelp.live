<template>
  <div>
    <NeedHelpService
      v-if="
        !$route.query.service &&
          !$route.query.location &&
          !$route.query.contact &&
          !$route.query.cards
      "
    />
    <NeedHelpDuration
      v-if="
        $route.query.service &&
          !$route.query.duration &&
          !$route.query.location &&
          !$route.query.contact &&
          !$route.query.cards
      "
    />
    <NeedHelpLocation
      v-if="
        $route.query.service &&
          $route.query.duration &&
          !$route.query.location &&
          !$route.query.contact &&
          !$route.query.cards
      "
    />
    <NeedHelpContact
      v-if="
        $route.query.service &&
          $route.query.duration &&
          $route.query.location &&
          !$route.query.contact &&
          !$route.query.cards
      "
    />
    <NeedHelpCards
      v-if="
        $route.query.service &&
          $route.query.duration &&
          $route.query.location &&
          $route.query.contact &&
          !$route.query.cards
      "
    />
  </div>
</template>
<script></script>
