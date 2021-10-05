<template>
  <div>
    <div v-for="user in users" :key="user.id">Hello,
      {{ user.name }},
      from {{ user.location.city }}, <br />
      {{ user.email }} !
      <hr/>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";
import axios from 'axios';

export default {
  name: 'About',
  setup() {
    const users = ref([]);
    onMounted(async () => {
      const response = await axios.get('https://randomuser.me/api/?results=6');
      users.value = response.data.results;
      console.log(users.value);
    });
    return {
      users
    }
  }
}
</script>
