x1 = ball.x - line.x
y1 = ball.y - line.y
//rotate coorditanes
y2 = Math.cos(angle) * y1 - Math.sin(angle) * x1;

if(y2 > -ball.radius) {

  const x2 = Math.cos(angle) * x1 + Math.sin(angle) * y1,
        vx1 = Math.cos(angle) * ball.vx + Math.sin(angle) * ball.vy;
        vy1 = Math.cos(angle) * ball.vx + Math.sin(angle) * ball.vy;
  y2 = -ball.radius;
  vy1*= bounce;

  //rotate everything back
  x1 = Math.cos(angle) * x2 - Math.sin(angle) * y2;
  y1 = Math.cos(angle) * y2 + Math.sin(angle) * x2;
  ball.vx = Math.cos(angle) * vx1 - Math.sin(angle) * vy2;
  ball.vy = Math.cos(angle) * vy1 + Math.sin(angle) * vx2;
  ball.x = line.x + x1;
  ball.y = line.y + y1;
}
