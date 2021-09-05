---
title: "Sage 50cloud Pastel Xpress"
seoTitle: "Sage 50cloud Pastel Xpress Getting Started"
seoDescription: "Integrate your Sage 50cloud Pastel Xpress with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["Sage 50cloud Pastel Xpress", "Integrations"]
type: help
source: "sage-50cloud-pastel-xpress"
tags: ["gettingstarted", "sage-50cloud-pastel-xpress"]
draft: true
---

Sage 50cloud Pastel Xpress is a client-side accounting system. 
This means that the Sage 50cloud Pastel Xpress application is installed on a 
server at your office, on your actual work computer or on a 
server in the cloud. 

In order for Stock2Shop to provide you 
with the full integration capabilities and link Sage 50cloud Pastel Xpress
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where your Sage 50cloud Pastel Xpress is set up. 

Below is all documentation you will need regarding your Sage 50cloud Pastel Xpress integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with Sage 50cloud Pastel Xpress accounting system, 
we require the following information:

- Server Name 
- Database Name
- Database Path (c:\Pastel18\abc)
- Version of Sage 50cloud Pastel Xpress (Pastel 18)
- DBQ (DDF Builder DB Name)
- Database Username (Read-Only)
- Database Password (Read-Only)
- Paster Partner SDK

The below must be taken into consideration to ensure we can manage information on a continual basis:

- Outgoing port 8080 should be open.
- The server must always be online.
- The user must have full admin rights.

With these credentials, Stock2Shop will be able to integrate with 
Sage 50cloud Pastel Xpress and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from Sage 50cloud Pastel Xpress to your Stock2Shop client console, 
the minimum required fields are:

```
| Sage 50cloud Pastel Xpress | Stock2Shop                     | Description                                                                                                                                           |
| --------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inventory.ItemCode          | source_product_code            | This is used to group variable products                                                                                                               |
| Inventory.ItemCode          | source_variant_code            | This is a unique code for each variation                                                                                                              |
| Inventory.Description       | title                          | Product title that will be synced to the website                                                                                                      |
| Inventory.UDField           | product_active                 | User defined field that indicates whether the product should sync or not sync to the website. The indicator has 3 options; active, ignore and delete. |
| MultiStoreTrn.SellInc       | csv_price_tiers                | The price of the product syncing to the website                                                                                                       |
| MultiStoreTrn.OpeningQty    | variants.qty                   | This is the available quantity to                                                                                                                     |
| Inventory.ItemCode          | variants.sku                   | Unique code for a product syncing to the channel                                                                                                      |
| true                        | variants.inventory_management  | Shows that S2S is managing and updating inventory                                                                                                     |
 ```

## Syncing Customers to Stock2Shop {#sync-customers}
Stock2Shop currently does not support the syncing of customers from Sage 50cloud Pastel Xpress to Stock2Shop. 
At this point in time there are no plans to build out this functionality. 
If customers are a requirement, please read up on how to import customers manually in to your client console, [here](/help/how-it-works-customer-import "Manually import customers into Stock2Shop").
 
## Syncing Orders to Sage 50cloud Pastel Xpress {#raise-orders}
If you require Stock2Shop to insert sales orders or invoices into Sage 50cloud Pastel Xpress, 
then we need you to install the Pastel Xpress SDK (Software Developers’ Kit) client connector. 
This process is done directly with Sage and is fairly straightforward. They will ask for a valid Pastel account. 
The SDK client connector is free for Pastel Xpress. The process is:

- Phone Sage 50cloud Pastel Xpress Sales and request the “Pastel Xpress SDK client connector”.
- They will send you an indemnity form. Fill this form out and send it back to them. They will then send you a registration code.
- Phone Sage 50cloud Pastel Xpress registrations and ask them to “register” the SDK connector.

Once this is done you should see the module available in your Sage 50cloud Pastel Xpress by viewing “help > about”.

By default, Stock2Shop raises orders to Sage 50cloud Pastel Xpress with the following order details:

```
| Sage 50cloud Pastel Xpress    | Stock2Shop           | Description                                                       |
| ------------------------------ | -------------------- | ----------------------------------------------------------------- |
| DeliveryAddresses.CustomerCode | customer.first_name  | First name of the customer                                        |
| DeliveryAddresses.CustomerCode | customer.last_name   | Last name of the customer                                         |
| DeliveryAddresses.email        | customer.email       | Customer's email address                                          |
| HistoryLines.ItemCode          | line_item.sku        | Unique code for a product syncing from the website.               |
| HistoryLines.Description       | line_item.title      | Product title of a product from the website                       |
| HistoryLines.Qty               | line_item.qty        | Qty orderd by the customer                                        |
| HistoryLines.InclusivePrice    | line_item.price      | Price of the product on the website                               |
| Shipping_code                  | Order                | Inventory code for shipping line items, created as a service item |
| Customer_code                  | Order                | Used to process orders for cash customers                         |
| Multi_Store                    | Order                | Orders raised into this warehouse                                 |

 ```

## Features specific to Sage 50cloud Pastel Xpress
To get the most out of your Sage 50cloud Pastel Xpress integration with Stock2shop, 
head over to our [Sage 50cloud Pastel Xpress](/help/features-sage-50cloud-pastel-xpress "Sage 50cloud Pastel Xpress features") documentation.

## Important concepts 
It is important to understand how Stock2Shop interprets data from your source 
along with the terminology we use. Added to that, there are certain concepts that you 
the client have the ability to manage in your own capacity. We have prepared 
documentation that describes all our concepts, [here](/help/how-it-works "How it works")

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com