// import WebSocket from 'websocket';
import WebSocket from 'ws';

export function connectToUbidots(deviceId, variableId, onValueUpdate) {
    const ws = new WebSocket('wss://industrial.api.ubidots.com/api/v1.6/realtime');

    ws.onopen = () => {
        console.log('WebSocket connection opened');
        ws.send(JSON.stringify({
            type: 'sub',
            token: '<YOUR_TOKEN>',
            data: [
                {
                    device: deviceId,
                    variable: variableId,
                },
            ],
        }));
    };

    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.type === 'data' && message.variable === variableId) {
            onValueUpdate(message.value);
        }
    };

    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
        console.log('WebSocket connection closed');
    };

    return ws;
}
