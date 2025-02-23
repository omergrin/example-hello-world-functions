let i =0;
const flowB = {
    triggerFlowB: function (num) {
        console.log(`[FlowB] Received number: ${num}, processing...`);
        return this.iterateData(num);
    },

    iterateData: function (num) {
        let count = 0;
        while (count < num) {
            count += Math.floor(Math.random() * 5);
            if (count % 2 === 0) {
                console.log(`[FlowB] Count (${count}) is even, executing deep logic`);
                this.deepLogic(count);
            }
        }
        return this.finalize(count);
    },

    deepLogic: function (value) {
        console.log(`[FlowB] Deep logic processing: ${value}`);
        if (value > 15) {
            console.log(`[FlowB] High value detected, adjusting...`);
            return this.advancedProcessing(value);
        }
    },

    advancedProcessing: function (num) {
        console.log(`[FlowB] Performing advanced processing on ${num}`);
        let product = 1;
        for (let i = 1; i <= num; i++) {
            product *= i % 3 === 0 ? 2 : 1;  // Conditional inside loop
        }
        return `Advanced processing completed with product: ${product}`;
    },

    finalize: function (count) {
        i=i+1;
        console.log(`[FlowB] Finalizing with count: ${i}`);
        return { status: "Finalized", i };
    }
};

module.exports = { flowB };