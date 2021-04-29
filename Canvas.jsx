import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import JPanel from './JPanel'
import Picture from './Picture'
import Paper from '@material-ui/core/Paper';



const Canvas = forwardRef((props, ref) => {

  const canvasRef = useRef(null)

  let x=100;
  let y = 100;
  let dragging=false;
  let panel=new JPanel(100,50,50,50);
  let target=null;
  let mouseDragXStart=0;
  let mouseDragYStart=0;
  let targetXStart=0;
  let targetYStart=0;
  let canvas=null;
  let ctx=null;
  let canvasReady=false;
  let isVisible=true;
  let picture=null;
  let panelAlreadyHit=false;



  const callback = () => {
      props.callback(panel.x,panel.y,panel.width,panel.height);
  }


  
  const draw = () => {

    if (ctx===null) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    if (picture!==null) picture.draw(ctx);
    let dx=x-mouseDragXStart;
    let dy=y-mouseDragYStart;
    if (target!=null) panel.moveDelta(dx,dy,target);
    panel.draw(ctx);
    callback();
  }

  // called by onmousemove during dragging
   const moveCircle = (e) => {
   // e.preventDefault();
      if (canvas==null) return;
    if (canvas===null) canvas = canvasRef.current
    if (ctx==null) ctx = canvas.getContext('2d')
    if (!dragging) return;
    x=e.offsetX;
    y=e.offsetY;
    draw()
  } 

  const startDrag = (e) => {
    e.preventDefault();
    let xx=e.offsetX;
    let yy=e.offsetY;
    target=handleHit(xx,yy);
    if (target!==null) {
        mouseDragXStart=xx;
        mouseDragYStart=yy;
        panel.setStartXY(panel.x,panel.y);
        dragging=true;
    } 
  }

  const stopDrag = (e) => {
    e.preventDefault();
    dragging=false;
  }


  const handleHit = (x,y) => {

    let dl=5;
    if (x>panel.x+dl && x<panel.width+panel.x-dl  && y>panel.y+dl && y<panel.height+panel.y-dl ) {
      return panel;
    }
    target=null;
    let d=100000;
    let cd=0;
    cd = getDistance(x,y,panel.NW);
    if (cd<d) {
      d=cd;
      target=panel.NW;
    }
    cd = getDistance(x,y,panel.NE);
    if (cd<d) {
      d=cd;
      target=panel.NE;
    }
    cd = getDistance(x,y,panel.SE);
    if (cd<d) {
      d=cd;
      target=panel.SE;
    }
    cd = getDistance(x,y,panel.SW);
    if (cd<d) {
      d=cd;
      target=panel.SW;
    }
    return target;
  }

  const getDistance= (x,y,h) => {
    let dx=x-h.x;
    let dy=y-h.y;
    let d=dx*dx+dy*dy;
    return d;
  }

  const initCanvasEvents = () => {
    if (canvas===null) return;

   
    canvas.style.touchAction="none";
    canvas.addEventListener('pointerdown', (e) => startDrag(e));
    canvas.addEventListener('pointerup', (e) => stopDrag(e));
    canvas.addEventListener('pointermove', (e) => moveCircle(e));
    picture=new Picture('./images/car1.png',0,0,canvas.width,canvas.height);
    canvasReady=true;
  }

  useImperativeHandle(ref, () => {
    return {
        loadImage:loadImage
    };
  });

  const loadImage = (url) => {
    if (picture==null) picture=new Picture(url,0,0,canvas.width,canvas.height);
    else {
            global.amount+=0.05;
            picture.image.onload= () =>{
            draw();
        }
    }
    if (!url.includes(".")) url="data:image/png;base64, "+url;
    picture.image.src=url;
  
  }
  
  useEffect(() => {

    if (canvas==null) {
      canvas = canvasRef.current
      let w=500;
      if (window.innerWidth<w) w=window.innerWidth;
      canvas.width=w;
      canvas.height =(w*60)/100;
    }
    if (ctx==null) ctx = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    if (canvas!==null) {
        if (!canvasReady) initCanvasEvents();
    }
    

    const render = () => {
      frameCount++
      draw(ctx, frameCount)
 
    }
    render()
    
    return () => {
    //  window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  

  return (
    <div>
    <Paper> <canvas ref={canvasRef} {...props}/> </Paper>
    <p></p>

    </div>
    )

});

export default Canvas