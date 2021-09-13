---
title: "Parcelninja"
seoTitle: "Parcelninja Getting Started"
seoDescription: "Integrate your Parcelninja with supported ERP / Accounting Systems and B2B and B2C sales channels through Stock2Shop"
type: setup
source: ""
channel: ""
fulfillment: "parcelninja"
---

## Parcelninja
Parcelninja is an outsourced e-commerce warehousing and order fulfillment service, allowing you to run your e-commerce business from anywhere. 
Using their feature-rich API or plugin for your existing cart system, cloud integration is seamless and fulfillment is no longer a headache. 
Through Parcelninja’s Courier LiveQuote™ they’ll get you the cheapest possible delivery price — instantly.
The information below will guide you in confirming the Parcelninja API has been configured correctly and tested.

1. [Prerequisites](#prerequisites) 
2. [Sync products](#sync-products) 
3. [Fulfill Orders](#fulfill-orders) 

## Prerequisites {#prerequisites}
For the integration between Stock2Shop and Takealot to work without any issues, you need to make sure you have the following:

- You have a Parcelninja account.
- You already have products receipted into Parcelninja's warehouse.

## Syncing Products to Stock2Shop {#sync-products}
Parcelninja can be used in a number of ways with Stock2Shop and other applications. If you are not making use of an ERP / Accounting System you can use the product information in Parcelinja to create basic products in Stock2Shop.
These products can be further enriched on Stock2Shop and then distributed to one or many supported sales channels. 
Parcelninja can also be used to link warehousing information like quantiry to products being created by your ERP / Accounting System.

In both of these scenarios, The only requirement for Stock2Shop to sync and or update products in Stock2Shop is that the API is enabled. 
Follow these steps below:

- In Parcelninja Navigate to User Management
- Scroll down to API Keys > Add Key
- Set the description to “Stock2Shop”
- Select (tick) all the roles, except for (View Virtual / Update Virtual / Delete Virtual)
- Click Add Key
- Copy the API Username and Password and send to Stock2Shop

In order to sync products from Parcelninja to your Stock2Shop client console, the minimum required fields are:


| Parcelninja | Stock2Shop                     | Description                                                                                         |
| ----------- | ------------------------------ | --------------------------------------------------------------------------------------------------- |
| itemNo      | source_product_code            | The product code is the same as the variant code as there is no concept of grouping in Parcelninja  |
| itemNo      | source_variant_code            | This is a unique code for each variation product in Parcelninja                                     |
| name        | title                          | Product title that will be synced to the website                                                    |
| true        | product_active                 | Hard coded to "true" as all products in Parcelninja will need to sync to Stock2Shop                 |
| instock     | variants.qty                   | This is the available quantity in Parcelninja                                                       |
| itemNo      | variants.sku                   | Unique code for a product syncing to the channel                                                    |
| true        | variants.inventory_management  | Shows that S2S is managing and updating inventory                                                   |

## Fulfill orders in Parcelninja {#fulfill-orders}
Stock2Shop will handle the posting of fulfillment requests to Parcelninja once an order is ready to be fulfilled.





