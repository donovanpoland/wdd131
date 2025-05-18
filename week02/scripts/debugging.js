const radiusOutput1 = document.getElementById('radius1');
const radiusOutput2 = document.getElementById("radius2");
const radiusOutput3= document.getElementById("radius3");
const areaOutput1 = document.querySelector('#area1');
const areaOutput2 = document.querySelector("#area2");
const areaOutput3 = document.querySelector("#area3");

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput1.textContent = radius;
areaOutput1.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput2.textContent = radius;
areaOutput2.textContent = area;

radius = 30;
area = PI * radius * radius;
radiusOutput3.textContent = radius;
areaOutput3.textContent = area;