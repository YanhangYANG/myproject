<template>
  <div class="event-cardn">
    <span>{{ event.organizer }}<br /></span>
    <span>{{ event.category }} </span>
  </div>
</template>

<script>
export default {
  name: "EventCardn",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.event-cardn {
  font-size: 30px;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: right;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>