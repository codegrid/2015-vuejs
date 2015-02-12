Vue.component('app-editor', Editor);
Vue.component('app-memo', Memo);

var vm = new Vue({
  data: {
    memos: [
      { content: "公共料金払う" },
      { content: "来週打ち合わせあり" }
    ]
  },
  template:
  '<app-editor v-with="memos: memos"></app-editor>' +
  '<app-memo v-with="memos: memos"></app-memo>'
});
vm.$mount();
vm.$appendTo('body');
