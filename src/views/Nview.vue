<template>
<h1>This is new view</h1>
  <div class="events">
    <Newcom v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<script>
// @ is an alias to /src
import Newcom from "@/components/Newcom.vue";

export default {
  name: "EventList",
  components: {
    Newcom, // register it as a child component
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: "animal welfare",
          title: "cat Adoption Day",
          description: "Find your new feline friend at this event.",
          location: "Meow Town",
          data: "January 22,2022",
          time: "11:00",
          petsAllowed: false,
          organizer: "Carey Wales",
        },
      ],
    };
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>