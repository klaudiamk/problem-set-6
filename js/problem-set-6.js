/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  ctx.font = "48px sans-serif";
  ctx.strokeText ("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  var ctx = document.getElementById("canvas2").getContext("2d");

  let height = 0;
  let width = 0;
  let x = 0;
  let y = 0;

height = prompt("Height:");
while (height < 1) {
  alert("Your height is too small.");
  height = prompt("Height:");
}
width = prompt("Width:");
while (width < 1) {
  alert("Your width is too small.");
  width = prompt("Width:");
}
x = prompt("X:");
while (x < 5){
  alert("Your x-coordinate is too small.");
  x = prompt("X:");
}
y = prompt("Y:");
while(y < 5){
  alert("Your y-coordinate is too small.");
  y = prompt("Y:");
}
ctx.strokeRect(x, y, width, height);
}
/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  var ctx = document.getElementById("canvas3").getContext("2d");

let color = "";

color = prompt("Color:");

if (color == "black") {
    ctx.fillStyle = "black";
      ctx.fillRect(10, 10, 100, 50);
}
else if (color == "blue") {
    ctx.fillStyle = "blue";
      ctx.fillRect(10, 10, 100, 50);
}
else if (color == "green") {
    ctx.fillStyle = "green";
      ctx.fillRect(10, 10, 100, 50);
}
else if (color == "orange") {
    ctx.fillStyle = "orange";
      ctx.fillRect(10, 10, 100, 50);
}
else if (color == "purple") {
    ctx.fillStyle = "purple";
      ctx.fillRect(10, 10, 100, 50);
}
else if (color == "red") {
    ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 100, 50);
}
else if (color == "yellow") {
    ctx.fillStyle = "yellow";
      ctx.fillRect(10, 10, 100, 50);
}

else {
  alert ("This color is not supported by the system.");
}

}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

var ctx = document.getElementById("canvas4").getContext("2d");

let side1 = 0;
let side2 = 0;
let side3 = 0;

side1 = prompt("Side 1:");
side2 = prompt("Side 2:");
side3 = prompt("Side 3:");

if () {

}
else if (){

}
else ( ){

}

ctx.strokeRect(10, 10, width, height);

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {

var ctx = document.getElementById("canvas5").getContext("2d");

let radius = 0;

radius = prompt("Radius: ");
  ctx.fill(10, 10, 100, 50);

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

  var ctx = document.getElementById("canvas6").getContext("2d");


}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

  var ctx = document.getElementById("canvas7").getContext("2d");

  import javax.swing.*;
  import java.awt.*;
  public class StopSign extends JFrame {
  String Stop = new String("STOP");
  public void paint(Graphics gr){
  super.paint(gr);
  int[] xPoints = {90, 180, 300, 390, 390, 300, 180, 90 };
  int[] yPoints = {180, 90, 90, 180, 300, 390, 390, 300 };
  int numPoints = 8;
  gr.drawPolygon(xPoints, yPoints, xPoints.length);
  gr.setColor(Color.RED);
  gr.fillPolygon(xPoints, yPoints, numPoints);
  int[] xPoints1 = {100, 190, 290, 380, 380, 290, 190, 100 };
  int[] yPoints1 = {190, 100, 100, 190, 290, 380, 380, 290 };
  int numPoints1 = 8;
  gr.drawPolygon(xPoints1, yPoints1, xPoints1.length);
  gr.setColor(Color.white);
  gr.fillPolygon(xPoints1, yPoints1, numPoints1);
  int[] xPoints2 = {120, 200, 280, 360, 360, 280, 200, 120 };
  int[] yPoints2 = {200, 120, 120, 200, 280, 360, 360, 280 };
  int numPoints2 = 8;
  gr.drawPolygon(xPoints2, yPoints2, xPoints2.length);
  gr.setColor(Color.red);
  gr.fillPolygon(xPoints2, yPoints2, numPoints2);
  gr.setColor(Color.white);
  gr.setFont(new Font("Arial", Font.BOLD, 85));
  gr.drawString(Stop, 125, 260);


  }
  public static void main(String[] args){
  StopSign frame = new StopSign();
  frame.setSize(500,500);
  frame.setVisible(true);
  }
  }
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

  var ctx = document.getElementById("canvas8").getContext("2d");


}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

  var ctx = document.getElementById("canvas9").getContext("2d");


}
