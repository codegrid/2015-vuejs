Vue.component('app-editor', {
  replace: true,
  data: function() {
    return {
      inputText: '',
      maxInputCount: 15
    }
  },
  computed: {
    inputCount: function() {
      return this.inputText.length;
    },
    countOver: function() {
      return (this.inputCount > this.maxInputCount);
    }
  },
  methods: {
    addMemo: function() {
      this.$dispatch('add:memo', { content: this.inputText });
      this.inputText = '';
    }
  },
  template:
  '<section class="editor">' +
    '<h3>エディタ</h3>' +
    '<input v-model="inputText">' +
    '<button v-on="click: addMemo" v-attr="disabled: countOver || !inputText">追加</button>' +
    '<p v-class="over: countOver">' +
      '{{maxInputCount - inputCount}}' +
    '</p>' +
  '</section>'
});

Vue.component('app-memolist', {
  replace: true,
  methods: {
    removeMemo: function(e) {
      var memo = e.targetVM;
      if(window.confirm(memo.content + ' を削除しますか？')) {
        this.$dispatch('remove:memo', memo.$index);
      }
    }
  },
  template:
  '<section class="memo">' +
    '<h3>メモリスト</h3>' +
    '<ul>' +
      '<li v-repeat="memos">' +
        '{{content}}<button v-on="click: removeMemo">削除</button>' +
      '</li>' +
    '</ul>' +
  '</section>'
});

var vm = new Vue({
  el: '#app',
  data: {
    memos: [
      { content: "公共料金払う" },
      { content: "来週打ち合わせあり" }
    ]
  },
  events: {
    'add:memo': '_onAddMemo',
    'remove:memo': '_onRemoveMemo'
  },
  methods: {
    _onAddMemo: function(memo) {
      this.memos.push(memo);
    },
    _onRemoveMemo: function(index) {
      this.memos.splice(index, 1);
    }
  }
});

vm.$.editor.$log();

vm.$.memolist.$log();
