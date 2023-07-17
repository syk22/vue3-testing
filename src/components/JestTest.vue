<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  msg: String,
});
const admin = ref(false);
const count = ref(0);
const onClickAction = () => count.value += 1;
</script>

<template>
  <div>Hello {{ props.msg }}</div>
  <a href="/profile" id="profile">My Profile</a>
  <a v-if="admin" href="/admin" id="admin">Admin</a>
  <button @click="onClickAction">Increment+</button>
  <p>Count is: {{ count }}</p>
</template>
