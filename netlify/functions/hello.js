
const flowA = require('./hello/flowA.js');

async function handler(event) {

    const subject = event.queryStringParameters.name || 'World'
    const res = await flowA.startFlowA(5);
    return {
        statusCode: 200,
        body: `Hello $x{subject}! result: ${res}, ${process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE}, ${process.env.AWS_LAMBDA_RUNTIME_API}`,
    }
}

module.exports = { handler }; 
