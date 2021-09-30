---
title: "Shopify"
seoTitle: "Shopify Getting Started"
seoDescription: "Integrate your Shopify with supported ERP / Accounting Systems and 3rd Party Logistics services through Stock2Shop"
type: setup
source: ""
channel: "shopify"
fulfillment: ""
aliases:
    - /documentation/getting-started/shopify-install/
---

## Shopify
Shopify is a fully hosted eCommerce software solution. This means that Shopify manages the hosting of your solutions.
The information below will guide you in confirming the Shopify API has been configured correctly and tested, 
and lastly that the Shopify orders webhook has been setup. Stock2Shop requires all settings to be setup prior to configuration.
 For technical information about the Shopify API visit [this page]().

1. [Prerequisites](#prerequisites) 
2. [Sync products](#sync-products) 
3. [Raise Orders](#raise-orders) 

## Prerequisites {#prerequisites}
For the integration between Stock2Shop and Shopify to work without any issues, you need to make sure you have the following:

- A Staging or production Shopify Store

## Syncing Products to Shopify {#sync-products}
The only requirement for Stock2Shop to sync products to Shopify is that the API is enabled. 
Follow these steps below:

- In Shopify navigate to  Apps > Manage Private Apps and click Create a new private app.
- Set the Private app name to Stock2Shop
- Add in an email address to be notified of any communication regarding the Shopify API
- Set all permissions to the highest possible, either Read / Write or just Read permission.

Once you have completed filling out all the details and setting permission, be sure to save the app. A pop-up modal will appear asking to confirm you understand. 
Click I understand, Create the app. You will be directed to a page that will display the API key and API Password. Send the following to Stock2Shop:

- API Key
- API Password

## Syncing Orders to Stock2Shop {#raise-orders}
The only requirement for Stock2Shop to sync orders from Shopify back to Stock2Shop is that the Shopify Webhook is enabled. Follow these steps below:

- In Shopify navigate to Settings > Notifications
- Navigate to Webhooks and click Create webhook
- Set the Webhook event to Order update
- Set the format to JSON
- Stock2Shop will supply you with the URL
- Set Webhook API version latest stable version

Note, that Stock2Shop will only provide the URL when we are ready to start receiving orders.
