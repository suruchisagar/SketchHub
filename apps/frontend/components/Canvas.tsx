import { initDraw } from "@/draw";
import { Socket } from "dgram";
import { useEffect, useRef } from "react";

export function Canvas({
    roomId,
    socket
}:{
    socket: WebSocket,
    roomId: string;
}){
  
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{

        if(canvasRef.current){
            initDraw(canvasRef.current, roomId, socket);
        }

    }, [canvasRef])

    return <div style={{
        height: "100vh",
        background: "black",
        overflow: "hidden"
    }}>
        <canvas ref = {canvasRef} width = {2000} height={1000}></canvas>
        <div style={{
            position: "fixed",
            top: 10,
            left: 10
        }}> hi there</div>
    </div>
}