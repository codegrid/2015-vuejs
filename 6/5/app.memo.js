Vue.component('app-memolist', {
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
    '<h3>メモリスト</h3>' +
    '<ul>' +
      '<li v-repeat="memos">' +
        '{{content}}<button v-on="click: removeMemo">削除</button>' +
      '</li>' +
    '</ul>' +
  '</section>'
});
