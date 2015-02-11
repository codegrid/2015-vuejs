var vm = new Vue({
  el: "#app",
  data: {
    colors: [
      {name: "red", colorCode: ["#ff0000", "#aa0000", "#770000"] },
      {name: "green", colorCode: ["#00ff00", "#00aa00", "#007700"] },
      {name: "blue", colorCode: ["#0000ff", "#0000aa", "#000077"] }
    ]
  },
  template: 
    '<div v-repeat="colors">' +
      '<p>{{name}}</p>' +
      '<span v-repeat="color: colorCode">{{$parent.name}}: {{color}} </span>'+
    '</div>'
});
