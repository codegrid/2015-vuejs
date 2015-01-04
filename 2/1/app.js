var people =  [
{ firstName: 'Naohiro', lastName: 'Nakajima' },
{ firstName: 'Kazuhito', lastName: 'Hokamura' },
{ firstName: 'Takeshi',  lastName: 'Takatsudo' },
{ firstName: 'Akihiro',  lastName: 'Oyamada' },
{ firstName: 'Kazuhori',  lastName: 'Tokuda' },
{ firstName: 'Yukihisa',  lastName: 'Yamada' }
];

Vue.partial("person","<span>{{firstName}} {{lastName}}</span>");


var vm = new Vue({
  el: "#app",
  data: {
    people: [
      { firstName: 'Naohiro', lastName: 'Nakajima' },
      { firstName: 'Kazuhito', lastName: 'Hokamura' },
      { firstName: 'Takeshi',  lastName: 'Takatsudo' },
      { firstName: 'Akihiro',  lastName: 'Oyamada' },
      { firstName: 'Kazuhori',  lastName: 'Tokuda' },
      { firstName: 'Yukihisa',  lastName: 'Yamada' }
    ],
    colors: [
      {name: "red", colorCode: ["#ff0000", "#aa0000", "#770000"] },
      {name: "green", colorCode: ["#00ff00", "#00aa00", "#007700"] },
      {name: "blue", colorCode: ["#0000ff", "#0000aa", "#000077"] },  
    ]
  },
  template: 
    '<div v-repeat="colors">' +
      '<span v-repeat="color: colorCode">{{$index}}: {{color}} </span>'+
    '</div>'
});
// vm.$set("name", "nakajmg");
// vm.$set("people", people);
// console.log(vm.$el)
// var vm = new Vue();
// var el = document.querySelector("#app");
// vm.$mount(el);
