const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");

/* Rectangle */

ctx.fillStyle = "skyblue";

ctx.fillRect(40,40,150,100);

/* Circle */

ctx.beginPath();

ctx.arc(320,90,50,0,2*Math.PI);

ctx.fillStyle="orange";

ctx.fill();

ctx.stroke();

/* Line */

ctx.beginPath();

ctx.moveTo(450,40);

ctx.lineTo(650,140);

ctx.lineWidth=4;

ctx.strokeStyle="red";

ctx.stroke();

/* Text */

ctx.font="30px Arial";

ctx.fillStyle="green";

ctx.fillText("Bhuvan Teja",180,250);