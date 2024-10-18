import WebSocket from "ws";
import {Server} from "http";

export default class Socket{
  private wss:WebSocket.Server;

  constructor(server:Server){
    this.wss = new WebSocket.Server({server, path: '/api/websocket'});
    this.wss.on('connection', (ws, req) => {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('새로운 클라이언트 접속', ip);
        ws.on('message', (message) => { // 클라이언트로부터 메시지 수신 시
          console.log(message);
        });
        ws.on('error', (err) => { // 에러 발생 시
          console.error(err);
        });
        ws.on('close', () => { // 연결 종료 시
          console.log('클라이언트 접속 해제', ip);
        });
    });
  }
}
