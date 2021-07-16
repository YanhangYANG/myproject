<template>
  <div class="events">
      <Student v-for="student in students" :key="student" :student="student" />
    
  </div>
</template>
<script>
// @ is an alias to /src
import Student from '@/services/Student.js'
import Student from "@/components/Student.vue";
export default {
  name: "Student",
  components: {
      Student,
       // register it as a child component
  },
  data() {
    return {
      student:  null
    }
  },
  created(){
Student.getStudent()
.then((response) => {
  this.student =response.data
})
.catch((error) => {
  console.log(error)
})
  }
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
