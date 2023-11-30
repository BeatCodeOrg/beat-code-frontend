 const  SocketHelper = {
    createSocket(uri,body){
         const webSocket =  new WebSocket(`ws://localhost:8080/socket/${uri}`);
         return webSocket;
        
     }
 }

 export default SocketHelper;
