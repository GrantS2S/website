---
title: "WooCommerce"
seoTitle: "WooCommerce Getting Started"
seoDescription: "Integrate your WooCommerce with supported ERP / Accounting Systems and 3rd Party Logistics services through Stock2Shop"
type: setup
source: ""
channel: "woocommerce"
fulfillment: ""
aliases:
    - /documentation/getting-started/woocommerce/
---

## WooCommerce
WooCommerce is a self hosted eCommerce software solution. This means that you (or your developers) deploy and manage the system entirely.
The information below will guide you in confirming the standard WooCommerce Legacy API has been configured correctly and tested, 
and lastly that the WooCommerce orders webhook has been setup. Stock2Shop requires all settings to be setup prior to configuration.

1. [Prerequisites](#prerequisites) 
2. [Sync products](#sync-products) 
3. [Raise Orders](#raise-orders) 

## Prerequisites {#prerequisites}
For the integration between Stock2Shop and WooCommerce to work without any issues, you need to make sure you have the following:

- WooCommerce 2.4+
- WordPress 4.1+
- Pretty permalinks is enabled. This you can find under Settings > Permalinks – make sure the “Post name” option is selected under “Common Settings”.
- Valid SSL certificate – your site needs to run on HTTPS to allow Stock2Shop and WooCommerce to communicate securely

## Syncing Products to WooCommerce {#sync-products}
The only requirement for Stock2Shop to sync products to WooCommerce is that the Legacy API is enabled. Follow these steps below:

- Navigate to WooCommerce > Settings and select Advanced > Legacy API Check the “Enable the Legacy REST API” box and save the changes.
- Navigate to WooCommerce > Settings and select Advanced > REST API > Add key
- Set Key Description to **Stock2Shop**
- Set the user to a user that will not be deleted
- Set the permissions to **Read/Write** and click **Generate API key**
- Send the **Consumer key** and **Consumer secret** to Stock2shop

To test that you have set Legacy API correctly by running the following link in your browser:
https://yourwebsite.com/wc-api/v3 (replace yourwebsite.com with your actual website URL).


## Syncing Orders to Stock2Shop {#raise-orders}
The only requirement for Stock2Shop to sync orders from WooCommerce back to Stock2Shop is that the WooCommerce Webhook is enabled. Follow these steps below:

- Navigate to WooCommerce > Settings select Advanced > Webhooks > Add webhook
- Set Name to **Stock2Shop**
- Set Status to **Disabled** until we are ready to test
- Set the Topic to **Order Updated**
- Set the API Version to **Legacy API v3 (deprecated)**