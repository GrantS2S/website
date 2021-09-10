---
title: "Magento 2.x"
seoTitle: "Magento 2.x Getting Started"
seoDescription: "Integrate your Magento 2.x with supported ERP / Accounting Systems and 3rd Party Logistics services through Stock2Shop"
type: setup
source: "magento-2"
channel: ""
fulfillment: ""
---

## Magento 2.x
Magento 2.x is a self hosted eCommerce software solution. This means that you (or your developers) deploy and manage the system entirely.
The information below will guide you in confirming the Magento 2.x default REST API has been configured correctly and tested, 
and lastly that the Magento 2.x orders webhook has been setup. Stock2Shop requires all settings to be configured prior to configuration.

1. [Prerequisites](#prerequisites) 
2. [Sync products](#sync-products) 
3. [Raise Orders](#raise-orders) 

## Prerequisites {#prerequisites}
You will need to have a version of Magento 2.x already up and running that is accessible via the web.

## Syncing Products to Magento 2.x {#sync-products}
In order for Stock2Shop to communicate with Magento, It is required that the REST API is enabled. 
Refer to the following [Magento REST API documentation](https://devdocs.magento.com/guides/v2.3/rest/bk-rest.html "Magento 2.x REST API Documentation") on how this can be done.

Stock2Shop requires the following:

- REST URL Endpoint
- Magento Admin Username
- Magento Admin Password

## Syncing Orders to Stock2Shop {#raise-orders}
Your Magento developers will be required to install the [Magento 2.x Webhook Module](https://github.com/stock2shop/magento2_module_webhook "Stock2Shop Magento 2.x Webhook Module"). Thereafter once the webhook module has been installed and the endpoint defined, Stock2Shop can beging to receive orders.