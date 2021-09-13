---
title: "Takealot"
seoTitle: "Takealot Getting Started"
seoDescription: "Integrate your Takealot offers with supported ERP / Accounting Systems and 3rd Party Logistics services through Stock2Shop"
type: setup
source: ""
channel: "takealot"
fulfillment: ""
---

## Takealot
Takealot is South Africa's largest ecommerce website and marketplace. Takealot's marketplace allows any the ability to sell products online with the help of Takealot's seller portal.
The information below will guide you in confirming the Takealot Seller API has been configured correctly and tested, 
and lastly that the Takealot lead time orders webhook has been setup. 

1. [Prerequisites](#prerequisites) 
2. [Sync products](#sync-products) 
3. [Raise Orders](#raise-orders) 

## Prerequisites {#prerequisites}
For the integration between Stock2Shop and Takealot to work without any issues, you need to make sure you have the following:

- You have a Takealot reseller account already up and running.
- Your Takealot reseller account is not deactivated due to delivery violations.
- The products you are wanting to sell exist on your seller account.

## Syncing Products Updates to Takealot {#sync-products}
The only requirement for Stock2Shop to update products offers on Takealot is that the API is setup and enabled. Follow these steps below:

- In the Takealot Seller Portal navigate to API Integrations and select Seller API.
- Navigate to Authentication where you will see the option to Generate an API Key.
- If a key already exists, copy the existing API key.

Once you have the API Key, copy it and send it to the Stock2Shop.

## Syncing Lead Time Orders to Stock2Shop {#raise-orders}
The only requirement for Stock2Shop to sync lead time orders from Takealot back to Stock2Shop is that the Takealot Webhook is enabled. Follow these steps below:

- In the Takealot Seller Portal navigate to API Integrations and select Webhooks.
- Under Configuring Webhooks select Create Webhook.
- Stock2Shop will supply you with the URL.
- Set the Webhook event to New Leadtime Order and click Create.

Note, that Stock2Shop will only provide the URL when we are ready to start receiving lead time orders.
