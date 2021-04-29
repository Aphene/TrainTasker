export default class Picture {
    image=null
    x=0;
    y=0;
    width=0;
    height=0;

    constructor(url,x,y,width,height) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image = new Image();
        this.onload= () =>{

        }
        if (!url.includes(".")) url="data:image/png;base64, "+url;
        this.image.src=url;
    }

    draw = (ctx) => {
        let w=this.width;
        if (window.innerWidth<w) w=window.innerWidth;
        ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.x,this.y, ctx.canvas.width, ctx.canvas.height);
    }
}