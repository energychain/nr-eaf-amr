module.exports = function(RED) {
    function Reader(config) {
        RED.nodes.createNode(this,config);
        const EAC = require("eaf-amr-client");
        const node = this;
        const eafcredentials =  RED.nodes.getNode(config.eafcredentials);
        node.on('input', async function(msg) {
            node.status({ fill: "yellow", shape: "dot", text: "fetching"});
            try {
                let requestConfig = node.context().get("consensus");
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

                const instance = new EAC(requestConfig);
                let res = await instance.retrieveTariff();
                node.context().set("consensus",instance.config);
                node.status({ fill: "green", shape: "dot", text: ""+res[0].price+"/kWh"});
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
    RED.nodes.registerType("Tariff",Reader);
}
