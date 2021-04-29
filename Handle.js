export default class Handle {
    x=0;
    y=0;
    width=8;
    height=8;


    constructor(x,y) {
        this.x=x;
        this.y=y;
        
    }

    draw = function(ctx) {
        ctx.beginPath();
        ctx.rect(this.x-4, this.y-4, this.width, this.height);
        ctx.stroke();
    }

    move = function(x,y) {
        this.x=x;
        this.y=y;
    }


}