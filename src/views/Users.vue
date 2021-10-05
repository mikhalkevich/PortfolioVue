<template>
  <div>
    <input type="number" min="0" max="1000" id="users_number" v-model="UsersNumber" @input="getUsers"/>
    <div v-for="user in users" :key="user.id">
      <UserCard :user="user"></UserCard>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";
import UserCard from '@/components/UserCard.vue'
import axios from 'axios';

export default {
  name: 'Users',
  components: {
    UserCard
  },
  setup() {
    const UsersNumber = ref(0);
    const users = ref('');
    const getUsers = async () => {
      const response = await axios.get('https://randomuser.me/api/?results=' + UsersNumber.value);
      users.value = response.data.results;
      //console.log(UsersNumber.value);
    }
    return {
      UsersNumber,
      users,
      getUsers
    }
  }
}
</script>
