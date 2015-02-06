var vm = new Vue({
  el: '#app',
  data: {
    todos: [
      { content: '原稿締切', completed: false, style: { color: 'red' }, size: 20 },
      { content: '書類提出', completed: false, style: { color: 'blue' , fontSize: '12px' } },
      { content: '最終納品', completed: false, style: { color: 'green' } }
    ]
  }
});
