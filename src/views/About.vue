<template>
  <div class="page">
    <div class="page_text">
      My working day
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";
import axios from 'axios';

export default {
  name: 'About',
}
</script>
<style lang="scss">
.page {
   background: url("../assets/boat2.png");
  height:100%;
  width:100%;
  position: fixed;
 }
.page_text {
  width:660px;
  margin:0 auto;
  text-align: left;
  padding:10px;
  color:white;
  font-size:26pt;
  text-shadow: 1px 1px 1px gold;
}
</style>
