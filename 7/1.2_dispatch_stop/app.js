Vue.partial('temp', 
  '<p>{{name}}</p>' +
  '<button v-on="click: trigger">trigger</button>' +
  '<span>{{message}}</span>'
);

Vue.component('child', {
  data: function() {
    return { name: 'child', message: '' }
  },
  events: {
    'test': function(message) {
      this.message = "Received " + message;
      return false;
    }
  },
  methods: {
    trigger: function() {
      this.$dispatch('test', 'dispatch From ' + this.name);
    }
  },
  template:
    '<template v-partial="temp"></template>' +
    '<div v-component="grandchild"></div>'
});

Vue.component('grandchild', {
  data: function() {
    return { name: 'grandchild', message: '' }
  },
  events: {
    'test': function(message) {
      this.message = "Received " + message;
    }
  },
  methods: {
    trigger: function() {
      this.$dispatch('test', 'dispatch From ' + this.name);
    }
  },
  template:
    '<template v-partial="temp"></template>'
});

var parent = new Vue({
  data: { name: 'parent', message: '' },
  el: '#app',
  events: {
    'test': function(message) {
      this.message = "Received " + message;
    }
  },
  methods: {
    trigger: function() {
      this.$dispatch('test', 'dispatch From ' + this.name);
    }
  },
  template:
    '<template v-partial="temp"></template>' +
    '<div v-component="child"></div>'
});
