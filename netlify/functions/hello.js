
const flowA = require('./hello/flowA.js');

let i=0;

async function handler(event) {

    const subject = event.queryStringParameters.name || 'World'
    const res = await flowA.startFlowA(7);
    i=i+1;
    return {
        statusCode: 200,
        body: `Hello ${subject}! result: ${i}, ${process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE}, ${process.env.AWS_LAMBDA_RUNTIME_API}`,
    }
}

module.exports = { handler }; 
