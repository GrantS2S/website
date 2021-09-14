---
title: "The specified resource name cannot be found in the image file"
issue: "SAP Business One: The specified resource name cannot be found in the image file"
seoTitle: "The specified resource name cannot be found in the image file"
seoDescription: "The SAP license server cannot be reached, either due to a temporary lapse in connectivity or an issue with the SAP One server."
type: "solution"
source: "sap-business-one"
channel: ""
fulfillment: ""
process: "orders"
headless: true
---

#### Error description
Failed to create order at source

#### Error solution
The SAP license server cannot be reached, either due to a temporary lapse in connectivity or an issue with the SAP One server.

To resolve this issue, simply attempt to reprocess the order in the S2S console.  *S2S Console > Queue > View > Find queue error -> Retry*.

In the event that this does not resolve the issue, you may need to reach out to your SAP consultant in order to:

- Start the license server or verify the license server address and TCP IP port. 
- Disable IPv6.
- Make sure the SLD Address is correct.
- Flush the DNS with the command *ipconfig /flushdns*
- Restart SAP Business One Integration Service.
- Retry the order
  



