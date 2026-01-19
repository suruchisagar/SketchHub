"use client"

import { WS_URL } from "@/config";
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas";


export function RoomCanvas({roomId}: {roomId: string}){

     const canvasRef = useRef<HTMLCanvasElement>(null);
     const [socket , setSocket] = useState<WebSocket |null >(null);

     useEffect(()=>{
        const ws= new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjODIyYWYxMC0xM2Y5LTQ4NWEtOGYyZC03YzU4NjRkN2FjNTUiLCJpYXQiOjE3Njg2NzQzNDh9.0WUJUPP4I62P4cRuWUZeV5HhSw_59wsXby70fqXu3o8`)

        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type: "join_room",
                roomId
            }))
        }
     }, [])
    

    if(!socket){
        return <div>
            Connecting to server ..........
        </div>
    }
    return <div>
        <Canvas roomId={roomId} socket={socket} />       
    </div>

}