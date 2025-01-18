/** @type {CanvasRenderingContext2D} */
var ctx;
var canvas;

function main() {
   canvas = document.getElementById('example'); 
   if (!canvas) {
      console.log('Failed to retrieve the <canvas> element'); 
      return;
   }
   ctx = canvas.getContext('2d');
   ctx.fillStyle='black';
   ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawVector(v, color) {
   ctx.strokeStyle = color;
   ctx.beginPath();
   ctx.moveTo(canvas.width/2, canvas.height/2);
   //console.log(v.elements);
   ctx.lineTo(canvas.width/2+(v.elements[0]*20), canvas.height/2-(v.elements[1])*20);
   ctx.stroke();
}

function handleDrawEvent(v, color) {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.fillStyle='black';
   ctx.fillRect(0,0,canvas.width,canvas.height);
   
   var x1 = document.getElementById('v1x').value;
   var y1 = document.getElementById('v1y').value;
   var v1 = new Vector3([x1, y1, 0.0]);
   drawVector(v1, "red");
   
   var x2 = document.getElementById('v2x').value;
   var y2 = document.getElementById('v2y').value;
   var v2 = new Vector3([x2, y2, 0.0]);
   drawVector(v2, "blue");
}

function handleDrawOperationEvent(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.fillStyle='black';
   ctx.fillRect(0,0,canvas.width,canvas.height);
   
   var x1 = document.getElementById('v1x').value;
   var y1 = document.getElementById('v1y').value;
   var v1 = new Vector3([x1, y1, 0.0]);
   drawVector(v1, "red");
   
   var x2 = document.getElementById('v2x').value;
   var y2 = document.getElementById('v2y').value;
   var v2 = new Vector3([x2, y2, 0.0]);
   drawVector(v2, "blue");
   
   var v3 = new Vector3([x1, y1, 0.0]);
   
   var operator = document.getElementById("operation").value;
   if (operator == "Add"){
      v3.add(v2);
      drawVector(v3, "green");
   } else if (operator == "Subtract"){
      v3.sub(v2);
      drawVector(v3, "green");
   } else if (operator == "Multiply"){
      var s = document.getElementById('Scalar').value;
      v1.mul(s);
      drawVector(v1, "green");
      v2.mul(s);
      drawVector(v2, "green");
   } else if (operator == "Divide"){
      var s = document.getElementById('Scalar').value;
      v1.div(s);
      drawVector(v1, "green");
      v2.div(s);
      drawVector(v2, "green");
   }else if (operator == "Magnitude"){
      console.log("Magnitude v1: "+ v1.magnitude());
      console.log("Magnitude v2: "+ v2.magnitude());
   } else if (operator == "Normalize"){
      var v1n = v1.normalize();
      drawVector(v1n, "green");
      var v2n = v2.normalize();
      drawVector(v2n, "green");
   } else if (operator == "AngleBetween"){
      var alpha = Math.acos(Vector3.dot(v1, v2)/(v1.magnitude()*v2.magnitude()));
      alpha *= 180/Math.PI;
      console.log("Angle: " + alpha.toFixed(2));
   } else if (operator == "Area"){
      v3 = Vector3.cross(v1, v2);
      var v1 = new Vector3([v3.elements[0], v3.elements[1], v3.elements[2]]);
      var area = v1.magnitude()/2;
      console.log("Area of this triangle: " + area.toFixed(2));
   }
   
}
