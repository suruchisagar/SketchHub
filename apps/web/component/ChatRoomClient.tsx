"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export function ChatRoomClient({
    messages,
    id
}:{
    messages : {message:string}[],
    id: string
}){
    const [chats, setChats] = useState(messages);
    const {socket, loading} = useSocket();
    const [currentMesssage, setCurrentMessage] = useState("");

    useEffect(()=>{
        if(socket && !loading){

            socket.send(JSON.stringify({
                type: "join_room",
                roomId: id
            }))
            socket.onmessage= (event) =>{
                const parsedData = JSON.parse(event.data);
                if(parsedData.type=== "chat"){
                    setChats(c=> [...c, {message: parsedData.message}])
                }
            }
        }
    }, [socket, loading, id])

    return <div>
        {chats.map(m=> <div>{m.message}</div>)}
        <input type="text" value={currentMesssage} onChange={e=> {
            setCurrentMessage(e.target.value);
        }}></input>
        <button onClick={()=> {
            socket?.send(JSON.stringify({
                type: "chat",
                roomId: id,
                messages: currentMesssage
            }))
            setCurrentMessage("");
        }}>
            Send Message
        </button>
    </div>
}