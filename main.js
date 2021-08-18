var canvas = new fabric.Canvas ('mycanvas');

block_image_width = 30;
block_image_height = 30;

ball_X = 0;
ball_y = 0;
hole_x = 400;
hole_y = 800;

function load_img(){
    fabric.block_image_height.fromURL("hole.jpg" , function(IMG){
        hole_obj = IMG;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);
    });
}
function new_image(){
    fabric.block_image_height.fromURL("golf.jpg" , function(IMG){
        ball_obj = IMG;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_obj);
    });
}

 if((ball_x==hole_x)&&(ball_y==hole_y)){
    canvas.remove(ball_obj);
    document.getElementById("hd3").innerHTML ="You have hit the GOAALLLL!!!!";
    document.getElementById("myCanvas").style.borderColor="red";
 }


 if(keypressed == '38'){
    up();
    console.log("up");
    }

    if(keypressed == '40'){
        down();
        console.log("down");
        }
        
    if(keypressed == '37'){
    left();
    console.log("left");
    }

    if(keypressed == '39'){
        right();
        console.log("right");
        }

        function up(){
            if(ball_y >=0){
                ball_y= ball_y - block_image_height;
                console.log("block image height="+ block_image_height);
                console.log("When UP arrow key is pressed, X=" + ball_X + "y =" + ball_y);
                canvas.remove(ball_object);
                new_image();
            }
        }
    
        function down(){
            if(ball_y <=500){
                ball_y= ball_y + block_image_height;
                console.log("block image height="+ block_image_height);
                console.log("When down arrow key is pressed, X=" + ball_X + "y =" + ball_y);
                canvas.remove(ball_obj);
                new_image();
            }
        }
    
        function left(){
            if(ball_x >=0){
                ball_x= ball_x - block_image_width;
                console.log("block image width="+ block_image_width);
                console.log("When left arrow key is pressed, X=" + ball_X + "y =" + ball_y);
                canvas.remove(ball_obj);
                new_image();
            }
        }
    
        function right(){
            if(ball_x <=850){
                ball_x= ball_x + block_image_width;
                console.log("block image width="+ block_image_width);
                console.log("When right arrow key is pressed, X=" + ball_X + "y =" + ball_y);
                canvas.remove(ball_obj);
                new_image();
            }
        }
    

  