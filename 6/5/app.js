var vm = new Vue({
  data: {
    memos: [
      { content: "公共料金払う" },
      { content: "来週打ち合わせあり" }
    ]
  },
  template:
  '<app-editor v-with="memos: memos"></app-editor>' +
  '<app-memolist v-with="memos: memos"></app-memolist>'
});
vm.$mount();
vm.$appendTo('body');
