var app = new Vue({
  el: '#app',
  components: {
    'my-component': {
      data: function(){
        return {
          message: 'Hello!!'
        }
      },
      methods: {
        hello: function() {
          alert(this.message);
        }
      },
      template:
      '<button v-on="click: hello">Hello</button>'
    }
  },
  template:
  '<div v-component="my-component"></div>'
});
