<script setup>
import { createDirectus, rest, readItems, staticToken } from '@directus/sdk';

const bearerToken = '213a9K7p96yQLQM4zWKUYN3uUukOedUU';
const client = createDirectus('https://staging-backend.teamwell.co').with(
  staticToken('OUTeX5b3yYi4PbtOttQMbjGfZ1iG5GRK')  // Remove the `Bearer` prefix here
).with(rest());

const result = await client.request(
  readItems('employees', {
    fields: ['*'],
  })
);

 
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>


