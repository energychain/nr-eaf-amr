module.exports = function(RED) {
    function Reader(config) {
        RED.nodes.createNode(this,config);
        const EAC = require("eaf-amr-client");
        const node = this;
        const eafcredentials =  RED.nodes.getNode(config.eafcredentials);
        node.on('input', async function(msg) {
            node.status({ fill: "yellow", shape: "dot", text: "Updating"});
            try {
                let requestConfig = node.context().get("consensus");
                requestConfig.meterId = eafcredentials.meterId;
                
                if((typeof requestConfig == 'undefined') || (requestConfig == null)){
                    requestConfig = {};
                }
                if(typeof requestConfig.baseUrl == 'undefined') {
                    requestConfig.baseUrl = eafcredentials.baseUrl;
                }
                if(typeof requestConfig.meterId == 'undefined') {
                    requestConfig.meterId = eafcredentials.meterId;
                }
                if(typeof requestConfig.readingToken == 'undefined') {
                    requestConfig.readingToken = eafcredentials.readingToken;
                }
                if(typeof requestConfig.activationSecret == 'undefined') {
                    requestConfig.activationSecret = eafcredentials.activationSecret;
                }
                if((typeof msg.topic !== 'undefined') && (msg.topic !== null)) {
                    requestConfig.meterId = msg.topic;
                }
                const instance = new EAC(requestConfig);
                let res = await instance.updateReading(msg.payload);
                node.context().set("consensus",instance.config);
                if(res.processed) {
                    node.status({ fill: "green", shape: "dot", text: ""+(+res.consumption/1000).toFixed(3)+"kWh"});
                } else {
                    node.status({ fill: "yellow", shape: "dot", text: "Not processed"});
                }
                node.send({
                    payload:res
                });
            } catch(e) {
                node.status({ fill: "red", shape: "dot", text: "Error:"+e});
                node.error("Error sending Reading");
                node.error(e);
            } 
        });
    }
    RED.nodes.registerType("SendReading",Reader);
}
