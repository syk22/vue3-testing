import { defineStore } from 'pinia';
type Inputs = {
  infoText: string;
};
const stateNameArray = ['infoText'];
type NameArray = 'infoText';

export const useStoreTest2 = defineStore('test2', {
  state: () => {
    return {
      data: {infoText: "ストアその２"} as Inputs,
    };
  },
  getters: {
    getState(): Inputs {
      return this.data;
    },
  },
  actions: {
    addState(stateName: string, value: string) {
      if (stateNameArray.includes(stateName)) {
        const property = stateName as NameArray;
        const addData: Inputs = { ...this.$state.data };
        addData[property] = value;
        this.$state.data = addData;
      }
    },
  },
});
