Vue.partial('my-partial', 'name: {{name}}');

var vm = new Vue({
  el: '#app',
  data: {
    people: [
      { firstName: 'Naohiro', lastName: 'Nakajima' },
      { firstName: 'Kazuhito', lastName: 'Hokamura' },
      { firstName: 'Takeshi',  lastName: 'Takatsudo' },
      { firstName: 'Akihiro',  lastName: 'Oyamada' },
      { firstName: 'Kazunori',  lastName: 'Tokuda' },
      { firstName: 'Yukihisa',  lastName: 'Yamada' }
    ]
  },
  template:
    '<div v-repeat="person: people">' +
      '<span>{{person.firstName}} {{person.lastName}}</span>' +
    '</div>'
});
