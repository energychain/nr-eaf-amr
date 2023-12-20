module.exports = function(RED) {
    function CredentialsNode(n) {
        RED.nodes.createNode(this,n);
        this.host = n.host;
        this.port = n.port;
        this.baseUrl = n.baseUrl; 
        this.meterId = n.meterId;
        this.activationSecret = n.activationSecret;
        this.readingToken = n.readingToken;
        this.name = n.name;
    }
    RED.nodes.registerType("eaf-credentials",CredentialsNode);
}