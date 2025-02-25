
const flowA = require('./hello/flowA.js');

let i=0;

async function handler(event) {

    const subject = event.queryStringParameters.name || 'World'
    const res = await flowA.startFlowA(7);
    i=i+1;
    console.log(`Hello ${subject}! result: ${i}`);
    return {
        statusCode: 200,
        body: `Hello ${subject}! result: ${i}`,
    }
}

module.exports = { handler }; 
