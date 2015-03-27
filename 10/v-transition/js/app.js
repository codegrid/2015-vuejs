var animate = Velocity;
Vue.transition('fade', {
  beforeEnter: function(el) {
    el.style.opacity = 0;
  },
  enter: function(el, done) {
    animate(el, {
      opacity: 1
    }, done);
  },
  leave: function(el, done) {
    animate(el, {
      opacity: 0
    }, done);
  }
});

Vue.component('app-editor', {
  replace: true,
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
      this.$dispatch('add:memo', { content: this.inputText });
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
  '<section class="memos">' +
    '<h3>メモリスト</h3>' +
    '<ul>' +
      '<li v-repeat="memos" class="memo" v-transition="fade">' +
        '{{content}}<button v-on="click: removeMemo">削除</button>' +
      '</li>' +
    '</ul>' +
  '</section>'
});

var app = new Vue({
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
