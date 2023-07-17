<script setup lang="ts">
import { articlesData } from './articlesData';
type ArticleList = {
  id: string;
  title: string;
  article?: string;
  url?: string
}
// console.log(articlesData);
let titles: ArticleList[] = [];

articlesData.forEach((v) => {
  // console.log(v);
  titles.push({id: v.id, title: v.title});
  
});
// console.log(titles);

</script>

<template>
  <ul>
    <li v-for="item in titles" :key="item.id">
      <router-link :to="{
        name: 'article',
        params: {id: item.id } 
      }">
      {{ item.title }}
      </router-link>
    </li>
    <!-- <li>i</li>
    <li>i</li> -->
  </ul>
</template>