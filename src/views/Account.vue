<template>
  <div id="account" class="works">
    <div class="menu_inner">
    <a href="#">Sites</a> |
    <a href="#">Publications</a> |
    <a href="#">Arts</a>
    </div>
    <modal></modal>
    <div v-for="user in users" :key="user.id">Hello,
      {{ user.name }},
      from {{ user.location.city }}, <br />
      {{ user.email }} !
      <hr/>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import {onMounted, ref} from "vue";
import axios from "axios";
export default {
  name: 'Account',
  components: {
    Modal
  },
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
<style lang="scss">
 .works {
   width:660px;
   margin: 0 auto;
 }
</style>
