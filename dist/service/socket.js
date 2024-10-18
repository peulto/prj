"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
class Socket {
    wss;
    constructor(server) {
        this.wss = new ws_1.default.Server({ server, path: '/api/websocket' });
        this.wss.on('connection', (ws, req) => {
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            console.log('새로운 클라이언트 접속', ip);
            ws.on('message', (message) => {
                console.log(message);
            });
            ws.on('error', (err) => {
                console.error(err);
            });
            ws.on('close', () => {
                console.log('클라이언트 접속 해제', ip);
            });
        });
    }
}
exports.default = Socket;
