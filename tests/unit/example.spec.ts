// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

// test('two plus two is four', () => {
//   expect(1 + 2).toEqual(4);
// });

import { mount } from '@vue/test-utils';

const App = {
  template: `
  <div>Hello World</div>
  <p>test</p>
  <ul>
  <li>TESTA</li>
  <li>TESTB</li>
  <li>TESTC</li>
  </ul>
  `,
};

test('test App Component', () => {
  const wrapper = mount(App);
  console.log(wrapper.text());
  console.log(wrapper.html());
});

import JestTest from '@/components/JestTest.vue';
test('test JestTest Component', () => {
  const wrapper = mount(JestTest);
  // expect(wrapper.text()).toBe('HelloWorld');
  // toBe -> 文字列が完全にマッチするか
  // toContain -> 文字列の中に含まれるかどうか
  // toMatch -> 文字列の検索に引っかかるかどうか
  // expect(wrapper.text()).toBe('Hello');
  expect(wrapper.text()).toContain('Hello');
  expect(wrapper.text()).toMatch('Hello');
});

// Propsの渡し方
test('test props of JestTest Component', () => {
  const wrapper = mount(JestTest, {
    props: {
      msg: 'Jest',
    },
  });
  // expect(wrapper.text()).toBe('Hello Jest');
  expect(wrapper.text()).toMatch('Hello Jest');
});

/*
// OptionsAPIのdataプロパティを読めるらしい
// CompositionAPIの場合がよく分からない。。。ので、要調査
test('test to access properties from vue instance', () => {
  const wrapper = mount(JestTest);
  console.log(wrapper.vm);
});
*/

// computed, watchの単独テストはなく、結果が幾つになったかをみる
// →テストはあくまでブラックボックス、入出力が期待値通りになるように書く

describe('JestTest', () => {
  const wrapper = mount(JestTest);
  // beforeEach(() => {
  // });

  it('test Jest get/find methods.', () => {
    const profileGet = wrapper.get('#profile');
    console.log(profileGet.text());
    const profileFind = wrapper.find('#profile');
    console.log(profileFind.text());
  });

  /*
  it('test get method.', () => {
    // #admin が見つからない場合はエラーになる
    const adminGet = wrapper.get('#admin');
    // ここまで到達しない
    console.log(adminGet.text());
  });

  it('test find method.', () => {
    // #admin が見つからなくてもエラーにはならない
    const adminFind = wrapper.find('#admin');
    // ここでエラーになる
    console.log(adminFind.text());
  });
  */

  // v-if/v-else, v-show のテスト方法.1
  it('test v-if/v-else or v-show method.', () => {
    const admin = wrapper.find('#admin');
    expect(admin.exists()).toBe(false);
  });

  // v-if/v-else, v-show のテスト方法.2
  // FAILED
  // 想定内だがadminに到達できていないので OptionsAPI での操作方法を確認すること
  it('test v-if/v-else or v-show method.', async () => {
    const wrapper = mount(JestTest);
    await wrapper.setData({
      admin: true,
    });
    const admin = wrapper.find('#admin');
    expect(admin.exists()).toBe(true);
  });
});

import { nextTick } from 'vue';
// クリックイベント
describe('JestTest', () => {
  // カウントアップするのを防ぐため、毎回初期化させる
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(JestTest);
  });
  // const wrapper = mount(JestTest);

  // 非同期で実施しなければならないので、async/awaitで対応
  it('click button count up', async () => {
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('Count is: 1');
  });

  // nextTick でDOMを更新させることも可能
  it('click button count up', async () => {
    wrapper.get('button').trigger('click');
    await nextTick();
    expect(wrapper.text()).toContain('Count is: 1');
  });

  // nextTick はインポートしなくても使用可能
  it('click button count up', async () => {
    wrapper.get('button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Count is: 1');
  });
});
