// Registering component in box-component.js
AFRAME.registerComponent("move-box", {
  schema: {
    moveX: { type: "number", default: 1 },
    moveY: { type:"number",default:1 }
  },

  tick: function () {

    this.data.moveX = this.data.moveX + 0.01;
    this.data.moveY = this.data.moveY + 0.01;

    var pos = this.el.getAttribute("position");

    pos.x = this.data.moveX;
    pos.y = this.data.moveY

    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    
    
  }
});
