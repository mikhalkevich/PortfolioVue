<template>
  <div class="tweet">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image">
            <img :src="user.picture.large">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p><strong>{{user.name.title}} {{user.name.first}} {{user.name.last}}</strong>
              from {{user.location.country}} {{user.name.state}} {{user.location.city}}, Street {{user.location.street.name}} {{user.location.street.number}}

            </p>
            <p>Contacts: email: {{user.email}}, phone: {{user.phone}}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ['user']
}
</script>

<style lang="scss">

.tweet {
  width:555px;
  float:left;
  background-color: #fff;
  color: #373737;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  .media {
    display: flex;
  }
  img {
    width: 64px;
    margin-right: 15px;
  }
  small {
    font-size: 14px;
    color: #657786;
  }
}

button {
  background-color: #43c594;
  border: 0;
  color: #fff;
  padding: 15px 20px;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
&:focus {
   outline: none;
 }
&.selected {
   background-color: darken(#43c594, 15%);
 }
}

</style>
