import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket(){
    const[loading, setLoading] = useState(true);
    const[socket, setSocket] = useState<WebSocket>();

    useEffect(()=>{
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MjBhODY1OS03NzYyLTQwYjMtOTU5MC1hMzljNGI1NmMwZDQiLCJpYXQiOjE3Njg0NTA3OTd9.FK1SN9C3qfzEPwsIdJ_uK4ol0n2PwIBYo2OKEO2q9fk`);
        ws.onopen= () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }

}