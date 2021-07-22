---
title: "Sage 100 Evolution"
seoTitle: "Sage 100 Evolution Getting Started"
seoDescription: "Integrate your Sage 100 Evolution with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["Sage 100 Evolution", "Integrations"]
type: help
source: "sage-100-evolution"
tags: ["gettingstarted", "sage-100-evolution"]
draft: true
---

Sage 100 Evolution is a client-side ERP system. 
This means that the Sage 100 Evolution application is installed on a 
server at your office, on your actual work computer or on a 
server in the cloud. 

In order for Stock2Shop to provide you 
with the full integration capabilities and link Sage 100 Evolution
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where your Sage 100 Evolution is set up. 

Below is all documentation you will need regarding your Sage 100 Evolution integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with Sage 100 Evolution ERP system, 
we require the following information:

- Server Name / IP Address
- Database Name
- Evolution Version (Found under help > about on the Evolutions main menu)
- Read-Only Database Username & Password (Provide sql read only username and password for pulling product and customer data.)
- Read / Write Database Username & Password (The SDK requires a sql user with readwrite permissions, provide username and password.)

The below must be taken into consideration to ensure we can manage information on a continual basis:

- Outgoing port 8080 should be open.
- The server must always be online.
- The user must have full admin rights.

With these credentials, Stock2Shop will be able to integrate with 
Sage 100 Evolution and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from Sage 100 Evolution to your Stock2Shop client console, 
the minimum required fields are:

```
| Sage 100 Evolution                             | Stock2Shop            | Description                                                                      |
| ---------------------------------------------- | --------------------- | -------------------------------------------------------------------------------- |
| StkItem.Code                                   | source_product_code   | Used for Grouping Variable Products. Equal to Item Code for simple product setup |
| StkItem.StockLink                              | source_variant_code   | Product Ref Code/ Item No                                                        |
| StkItem.Description_1                          | title                 | Used as the title on the product                                                 |
| _etblPriceListPrices, _etblPriceListName       | csv_price_tiers       | Array of the price list on the item from the Master warehouse                    |
| WhseStk, WhseMaster                            | variants.qty          | Item Quaties and warehouses                                                      |
| StkItem.Code                                   | variants.sku          | Can be StkItem.Code if syncing simple products only                              |
| StkItem. {{User Defined - S2S Status switch }} | product_active        | User Defined field with 3 options: Ignore, Active, Delete                        |

 ```

## Syncing Customers to Stock2Shop {#sync-customers}
In order to sync customers from Sage 100 Evolution to your Stock2Shop client console, 
the minimum required fields are:

```
| Sage 100 Evolution     | Stock2Shop             | Description                                               |
| ---------------------- | ---------------------- | --------------------------------------------------------- |
| Client.On_Hold         | customer_active        | User Defined Field with 3 Options: Ignore, Active, Delete |
| Client.Account         | source_customer_code   | Client Account number                                     |
| Client.Contact_Person  | first_name             | Client First Name from Contact Person field               |
| Client.Contact_Person  | last_name              | Client Lastname from Contact Person field                 |
| Clinet.E-Mail          | email                  | Client E-mail                                             |
 ```

## Syncing Orders to Sage 100 Evolution {#raise-orders}
If you require Stock2Shop to insert sales orders or invoices into your Sage 100 Evolution, then we need you to install the Pastel Evolution SDK (Software Developers’ Kit) client connector. 
This process needs to be done directly with Sage and is fairly straightforward. 
They will require a valid Pastel account. The SDK client connector has an annual fee which is paid to Sage directly. The process is:

- Phone Sage Evolution Sales and request the “Pastel Evolution SDK client connector”.
- They will send you an indemnity form. Fill this form out and send it back to them. They will then send you back a registration code.
- Phone up Sage Evolution registrations and ask them to “register” the SDK connector.

Once this is done you should see the module available in your Sage 100 Evolution by viewing “help > about” in Sage 100 Evolution.

By default, Stock2Shop raises orders to Sage 100 Evolution with the following order details:

```
| Sage 100 Evolution | Stock2Shop              | Description                                           |
| ------------------ | ----------------------- | ----------------------------------------------------- |
| Date               | sytem_order.createdate  | Date the order is created on S2S                      |
| CustomerID         | customer_code           | Default Customer Account if not specified on customer |
| Delivery Date      | sytem_order.createdate  | Same as Create Date, Req for Sales Orders             |
| Item               | line_item.sku           | Unique code for a product syncing from the website.   |
| Qty                | line_item.qty           | Qty orderd by the customer                            |
| Price              | line_item.price         | Price of the product on the website                   |
 ```

## Features specific to Sage 100 Evolution
To get the most out of your Sage 100 Evolution integration with Stock2shop, 
head over to our [Sage 100 Evolution](/help/features-sage-100-evolution "Sage 100 Evolution features") documentation.

## Important concepts 
It is important to understand how Stock2Shop interprets data from your source 
along with the terminology we use. Added to that, there are certain concepts that you 
the client have the ability to manage in your own capacity. We have prepared 
documentation that describes all our concepts, [here](/help/how-it-works "How it works")

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com