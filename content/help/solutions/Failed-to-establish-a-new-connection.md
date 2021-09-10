---
title: "Failed to establish a new connection"
issue: "Omni Accounts: Failed to raise orders"
seoTitle: "Failed to establish a new connection"
seoDescription: "No connection could be made because the target machine actively refused it."
type: "solution"
source: "omni-accounts"
channel: ""
fulfillment: ""
process: "orders"
headless: true
---

#### Error description
Failed to raise orders in Omni Accounts

#### Error solution

The OmniWebServiceREST service is not running on the Omni Accounts server at the time of the order.
No connection could be made because the target machine actively refused it.

- Find the OmniWebServiceREST and open it. This is usually located in C:/Omni/System
- Do not close rest service, just minimise.
- If needed, stop and restart this service.
- Return the S2S queue and retry the order error and confirm the order has been processed.




