<script setup lang="ts">
// import { storeToRefs } from 'pinia';
import { useStoreTest1 } from '@/store/input';
import { useStoreTest2 } from '@/store/info';
import { ref } from 'vue';


type Props = {
  maxlength: number,
  type: string,
  placeholder: string,
  name: string,
}
const props = defineProps<Props>();
const userStore = useStoreTest1();
const infoStore = useStoreTest2();
const namePrefix = props.name?.match(/^[a-z]+/);

// inputタグの入力値
// input.valueは常にstring
const inputValue = ref("");

// ストアへ渡す
// prefixの値でどのストアへ渡すかを決定
const setStoreData = (e: Event) => {
  if ((e.target as HTMLInputElement).value === undefined) {
    return;
  }
  inputValue.value = (e.target as HTMLInputElement).value;
  if (namePrefix !== undefined && namePrefix !== null) {
    switch (namePrefix[0]) {
      case 'user':
        userStore.addState(props.name as string, inputValue.value);
        break;
      case 'info':
        infoStore.addState(props.name as string, inputValue.value);
        break;
      default:
        break;
    }
  }
}
</script>

<template>
  <input
    :type="props.type"
    :maxlength="props.maxlength"
    :placeholder="props.placeholder"
    :name="props.name"
    @focusout="setStoreData"
    :value="inputValue"
  />
</template>