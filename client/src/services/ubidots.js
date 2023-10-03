import axios from 'axios';

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://industrial.api.ubidots.com/api/v1.6/devices/cpumonitor/atmhumidity/values?page_size=100&page=1',
    headers: {
        'X-Auth-Token': 'BBFF-nGP8QTT54YpnOb6usXvT3QJaSv0oIq',
        'Content-Type': 'application/json'
    }
};

export async function getP1Temp() {
    let newConf = {
        ...config,
        url: `https://industrial.api.ubidots.com/api/v1.6/devices/cpumonitor/${"p1temp"}/values?page_size=100&page=1`
    }

    const data = await axios(newConf)
    return data.data.results
}

export async function getP1BP() {
    let newConf = {
        ...config,
        url: `https://industrial.api.ubidots.com/api/v1.6/devices/cpumonitor/${"bpm1"}/values?page_size=100&page=1`
    }

    const data = await axios(newConf)
    return data.data.results
}

export async function getP1EKG() {
    let newConf = {
        ...config,
        url: `https://industrial.api.ubidots.com/api/v1.6/devices/cpumonitor/${"ekg"}/values?page_size=100&page=1`
    }

    const data = await axios(newConf)
    return data.data.results
}

