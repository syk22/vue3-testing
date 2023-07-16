import { defineStore } from 'pinia';
type Inputs = {
  userId: string;
  userTextValue: string;
  dummyValue?: string;
  dummyNum?: string;
};
const stateNameArray = ['userId', 'userTextValue', 'dummyValue', 'dummyNum'];
type NameArray = 'userId' | 'userTextValue' | 'dummyValue' | 'dummyNum';

export const useStoreTest1 = defineStore('test1', {
  state: () => {
    return {
      data: {userId: "0", userTextValue: "30", dummyValue: "ダミー"} as Inputs,
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

