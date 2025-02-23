import('hud-sdk/register')
import { flowA } from './flowA.cjs';

export async function handler(event) {

    const subject = event.queryStringParameters.name || 'World'
    const res = await flowA.startFlowA(5);
    return {
        statusCode: 200,
        body: `Hello ${subject}! result: ${res}, ${process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE}, ${process.env.AWS_LAMBDA_RUNTIME_API}`,
    }
}



// (async () => {
//     await import('hud-sdk/register'); // Dynamically import ESM module
//   })();
  
  
// const flowA = require('./flowA.cjs');
// // import { flowA } from './flowA.cjs';

// export const handler = async event => {
//     const subject = event.queryStringParameters.name || 'World'
//     const res = await flowA.startFlowA(5);
//     return {
//         statusCode: 200,
//         body: `Hello ${subject}! result: ${res}, ${process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE}, ${process.env.AWS_LAMBDA_RUNTIME_API}`,
//     }
// }