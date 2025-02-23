// hello there!
// 
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that. 
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.


  
const flowA = require('./flowA.cjs');


export const handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
    const res = await flowA.startFlowA(5);
    return {
        statusCode: 200,
        body: `Hello ${subject}! result: ${res}, ${process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE}, ${process.env.AWS_LAMBDA_RUNTIME_API}`,
    }
}