<script setup>
import InputText from '@/components/InputText.vue';
const props = defineProps({
    title: String,
    state: {
        maxlength: Number,
        type: String,
        placeholder: String,
        // value: String,
        // id: String,
        name: String,
    },
});
</script>

<template>
    <h3>{{ props.title }}</h3>
    <InputText v-bind="props.state" />
</template>