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
// props.name -> ユニークにすること、データのKey
const userStore = useStoreTest1();
const infoStore = useStoreTest2();
const namePrefix = props.name?.match(/^[a-z]+/);

const inputValue = ref("");
const setStoreData = (e: Event) => {
  if ((e.target as HTMLInputElement).value === undefined) {
    return;
  }
  inputValue.value = (e.target as HTMLInputElement).value;
  // console.log(inputValue.value);

  // if (stateNameArray.includes(props.name as string)) {
    // const stateName = props.name as NameArray;  
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
    // } else {
    //   throw new Error("StateName not found. Invalid data collumn's name");
    // }
  }
}
</script>

<template>
  <input
    :type="props.type"
    :maxlength="props.maxlength"
    :placeholder="props.placeholder"
    :name="props.name"
    @change="setStoreData"
    :value="inputValue"
  />
  {{ inputValue.value }}
</template>