const flowB = require('./flowB.cjs'); 

const flowA = {
    startFlowA: async function (num) {
        console.log(`[FlowA] Starting process with number: ${num}`);
        // await new Promise(resolve => setTimeout(resolve, 1000));
        return this.complexLoop(num);
    },

    complexLoop: function (num) {
        let sum = 0;
        for (let i = 0; i < num; i++) {
            sum += i * 2;
            if (sum % 3 === 0) {
                console.log(`[FlowA] Sum (${sum}) is divisible by 3, calling FlowB`);
                flowB.triggerFlowB(sum);
            }
        }
        return this.decisionMaker(sum);
    },

    decisionMaker: function (sum) {
        if (sum > 20) {
            console.log(`[FlowA] Large sum detected (${sum}), calling special action`);
            return this.specialAction();
        } else {
            console.log(`[FlowA] Small sum, doing normal action`);
            return this.normalAction();
        }
    },

    specialAction: function () {
        console.log(`[FlowA] Executing special action!`);
        return flowB.advancedProcessing(10);
    },

    normalAction: function () {
        console.log(`[FlowA] Executing normal action.`);
        return "Normal execution completed";
    }
};

module.exports = { flowA };
