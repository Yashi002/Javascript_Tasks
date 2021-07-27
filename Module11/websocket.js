const websocket = new WebSocket("ws://localhost:8082");
websocket.addEventListener("open",()=>{
    console.log("Hey you!");

    ws.send("Hope ou are well tonight");
});
ws.addEventListener("message",(e)=>{
    console.log(e);
});
