<script setup lang="ts">
import { articlesData } from './articlesData';
type ArticleList = {
  id: string;
  title: string;
  article?: string;
  url?: string
};
const props = defineProps({
  id: String,
});
const article: ArticleList | undefined = articlesData.find(item => item.id === props.id);
</script>

<template>
  <div v-if="article">
    <h3>{{ article.title }}</h3>
    <p>{{ article.article }}</p>
  </div> 
  <div v-else>
    <p>Not Found</p>
  </div>
</template>