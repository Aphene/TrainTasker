import Handle from './Handle'


export default class JPanel {

    x=0;
    y=0;
    width=0;
    height=0;
    NW={};
    NE={};
    SE={};
    SW={};
    mouseDragXStart=0;
    mouseDragYStart=0;
    dragStartWidth=0;
    dragStartHeight=0;

    constructor(x,y,width,height) {
        this.x=x;        
        this.y=y;
        this.width=width;
        this.height=height;
        this.NW = new Handle(x,y);
        this.NE = new Handle(x+width,y);
        this.SE = new Handle(x+width,y+height);
        this.SW = new Handle(x,y+height);
    }

    draw = function(ctx) {
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.strokeStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.rect(this.x-1, this.y-1, this.width+2, this.height+2);
        ctx.stroke();
        ctx.strokeStyle = "#FF0000";
        ctx.beginPath();
        ctx.rect(this.x-2, this.y-2, this.width+4, this.height+4);
        ctx.stroke();
        ctx.strokeStyle = "#000000";
        this.NW.draw(ctx);
        this.NE.draw(ctx);
        this.SE.draw(ctx);
        this.SW.draw(ctx);
    }

    moveDelta = function(dx,dy,target) {
        let mx=this.mouseDragXStart;
        let my = this.mouseDragYStart;
        if (target==this) {
            this.x=mx+dx;
            this.y=my+dy;
        }
        if (target==this.NW) {
            this.x=mx+dx;
            this.width=this.dragStartWidth-dx;
            this.y=my+dy;
            this.height=this.dragStartHeight-dy;
        }
        if (target==this.NE) {

            this.width=this.dragStartWidth+dx;
            this.y=my+dy;
            this.height=this.dragStartHeight-dy;
        }
        if (target==this.SE) {
            this.width=this.dragStartWidth+dx;
            this.height=this.dragStartHeight+dy;
        }
        if (target==this.SW) {
            this.x=mx+dx;
            this.width=this.dragStartWidth-dx;
            this.height=this.dragStartHeight+dy;
        }
        if (this.width<20) this.width=10;
        if (this.height<20) this.height=10;
        this.NW.move(this.x,this.y);
        this.NE.move(this.x+this.width,this.y);
        this.SE.move(this.x+this.width,this.y+this.height);
        this.SW.move(this.x,this.y+this.height);
    }





    setStartXY = function(x,y) {
        this.mouseDragXStart=x;
        this.mouseDragYStart=y;
        this.dragStartWidth=this.width;
        this.dragStartHeight=this.height;
    }

}

