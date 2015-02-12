var vm = new Vue({
  el: '#app',
  data: {
    memos: [
      { content: "公共料金払う" },
      { content: "来週打ち合わせあり" }
    ],
    inputText: '',
    inputCount: 0,
    maxInputCount: 20,
    countOver: false
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
    removeMemo: function(e) {
      var memo = e.targetVM;
      if(window.confirm(memo.content + ' を削除しますか？')) {
        this.memos.splice(memo.$index, 1);
      }
    }
  }
});
