---
title: "Orders"
seoTitle: "Order Processing"
seoDescription: "Processing of orders relating to sources"
type: guides
tags: ["order"]
aliases:
    - 
---

Orders in Stock2Shop are received by different sales channels using a method called Webhooks.
The functionality is used in most eCommerce platforms in which Stock2Shop will provide a URL to the platform and set the trigger for the webhook to send us the order on a "Order Updated" trigger.

Once the Stock2Shop console receives the order, it will check for the specified "PAID" status aligned with what is provided by that channel, once the system confirms the order is paid it will process to the accounting system.
Stock2Shop processes orders into the accounting system using the method that is safest to write the orders with, for example, see below accounting systems and what is used to process the orders:
- Sage 200 Evolution - Pastel Evolution SDK
- Syspro - Enet Webservices (SORTOI Business module)
- SAP Business One - DI Server
- Sage Business Cloud Accounting - Sage One API
