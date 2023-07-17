<script setup lang="ts">
// import { ref } from 'vue';
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
const solidArticle = article.article.replaceAll(/\r\n/g, '<br /><br />');
</script>

<template>
  <div v-if="article">
    <h3>{{ article.title }}</h3>
    <p v-html="solidArticle"></p>
    <p><a :href="article.url" target="_blank">{{ article.url }}</a></p>
  </div> 
  <div v-else>
    <p>Not Found</p>
  </div>
</template>