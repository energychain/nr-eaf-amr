# nr-eaf-amr
**Node-RED Automated Meter Reading client for [STROMDAO Energy Application Framework](https://github.com/energychain/STROMDAO_EAFs) to allow dynamic electricity tariffs without decicated SmartMeter-Gateway (iMSys).**

[![Downloads](https://img.shields.io/npm/dt/nr-eaf-amr.svg)](https://www.npmjs.com/package/nr-eaf-amr)
[![License](https://img.shields.io/npm/l/nr-eaf-amr.svg)](https://github.com/energychain/nr-eaf-amr/blob/master/LICENSE)

A NodeRED node package that simplifies the integration and automation of dynamic electricity tariffs within energy management systems. By leveraging the capabilities of the [node-eaf-amr-client](https://github.com/energychain/node-eaf-amr-client) library, it provides an effective solution for interacting with the STROMDAO Energy Application Framework (EAF), enhancing the ability to respond to variable energy pricing in real-time.

The package includes three distinct nodes, each serving specific roles within the energy management and automated meter reading (AMR) processes:

1.  **SendReading:** Enables the secure transmission of meter readings to utilities. This node ensures proper authorization and communication, facilitating the retrieval of settlements between the consumer and the utility company.
    
2.  **Tariff:** Retrieves price signals, which are forecasts of electricity prices from the utility. It allows for strategic planning and proactive adjustments within home energy management systems, ensuring users can take advantage of favorable pricing conditions.
    
3.  **BestPrice:** Utilizes the tariff signal to control devices or consumers, turning them on or off during periods of low electricity prices. This capability is instrumental in optimizing energy costs by shifting energy consumption to the most economical time frames.
    
Overall, `nr-eaf-amr` abstracts the intricacies involved in the communication and management of dynamic tariffs. Its integration into NodeRED environments empowers users to focus more on the automation and optimization aspects of energy management without the need to handle the underlying complexity of tariff-based interactions.

Through the use of `nr-eaf-amr`, anyone from hobbyists to professional energy managers can easily implement smart, adaptive energy systems that optimize utility costs and contribute to more efficient energy consumption. Whether you're managing a small home setup or a larger scale operation, `nr-eaf-amr` provides the tools needed to make dynamic, informed decisions about energy usage.

## License

Distributed under the Apache-2.0 License. See [License](./LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Maintainer / Imprint

<addr>
STROMDAO GmbH  <br/>
Gerhard Weiser Ring 29  <br/>
69256 Mauer  <br/>
Germany  <br/>
  <br/>
+49 6226 968 009 0  <br/>
  <br/>
dev@stromdao.com  <br/>
  <br/>
Handelsregister: HRB 728691 (Amtsgericht Mannheim)<br/>
  <br/>
https://stromdao.de/<br/>
</addr>


