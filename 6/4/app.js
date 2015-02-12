var Editor = Vue.extend({
  replace: true,
  inherit: false,
  data: function() {
    return {
      inputText: '',
      inputCount: 0,
      maxInputCount: 15,
      countOver: false
    }
  },
  methods: {
    addMemo: function() {
      var newMemo = { content: this.inputText };
      this.memos.push(newMemo);
      this.inputText = '';
      this.inputCount = 0;
    },
    countText: function() {
      this.inputCount = this.inputText.length;
      this.countOver = (this.inputCount > this.maxInputCount);
    },
  },
  template:
  '<section class="editor">' +
    '<h3>エディタ</h3>' +
    '<input v-on="keyup:countText" v-model="inputText">' +
    '<button v-on="click: addMemo" v-attr="disabled: countOver || !inputText">追加</button>' +
    '<p v-class="over: countOver">' +
      '{{maxInputCount - inputCount}}' +
    '</p>' +
  '</section>'
});
Vue.component('app-editor', Editor);

var Memo = Vue.extend({
  replace: true,
  inherit: false,
  methods: {
    removeMemo: function(e) {
      var memo = e.targetVM;
      if(window.confirm(memo.content + ' を削除しますか？')) {
        this.memos.splice(memo.$index, 1);
      }
    }
  },
  template:
  '<section class="memo">' +
    '<h3>メモ</h3>' +
    '<ul>' +
      '<li v-repeat="memos">' +
        '{{content}}<button v-on="click: removeMemo">削除</button>' +
      '</li>' +
    '</ul>' +
  '</section>'
});
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
