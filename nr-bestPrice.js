module.exports = function(RED) {
    function Reader(config) {
        RED.nodes.createNode(this,config);
        const node = this;
        node.on('input', async function(msg) {
            let periods = msg.payload;
            periods.sort((a,b) => a.price - b.price);
            let switchState = false;
            for(let i=0;i<periods.length;i++) {

                    periods[i].priceIndex = i +1;                
            }
            periods.sort((a,b) => a.time - b.time);
            for(let i=0;i<periods.length;i++) {
                if(periods[i].time < new Date().getTime()) {
                    if(periods[i].priceIndex <= config.periods) {
                        switchState = true;
                    } else {
                        switchState = false;
                    }
                }
            }
            if(switchState) {
                node.status({ fill: "green", shape: "dot", text: ""});
            } else {
                node.status({ fill: "red", shape: "dot", text: ""});
            }
            node.send({
                payload:switchState
            });
           
        });
    }
    RED.nodes.registerType("BestPrice",Reader);
}
