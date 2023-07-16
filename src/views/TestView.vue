<script setup lang="ts">
import InputForm from "@/components/InputForm.vue";
import SubmitButton from "@/components/SubmitButton.vue";
const propvalue = {
    title: "userId",
    state: {
        maxlength: 15,
        type: "number",
        placeholder: "Props-placeholder",
        name: "userId",
    },
};
const propvalue2 = {
    title: "userTextValue",
    state: {
        maxlength: 20,
        type: "text",
        placeholder: "Props2-placeholder",
        name: "userTextValue",
    },
};
const propvalue3 = {
    title: "infoText",
    state: {
        maxlength: 20,
        type: "text",
        placeholder: "Props3-placeholder",
        name: "infoText",
    },
};

import { useStoreTest1 } from "@/store/input";
import { useStoreTest2 } from "@/store/info";
import { storeToRefs } from "pinia";
const storeData = useStoreTest1();
const infoData = useStoreTest2();
const { getState: userState } = storeToRefs(storeData);
const { getState: infoState } = storeToRefs(infoData);
</script>

<template>
    <InputForm v-bind="propvalue" />
    <br />
    <InputForm v-bind="propvalue2" />
    <br />
    <InputForm v-bind="propvalue3" />
    <br />
    <SubmitButton />
    <div>{{ userState }}</div>
    <div>{{ infoState }}</div>
</template>