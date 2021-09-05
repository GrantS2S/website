---
title: "Syspro"
seoTitle: "Syspro Getting Started"
seoDescription: "Integrate your Syspro with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["Syspro", "Integrations"]
type: help
source: "syspro"
tags: ["gettingstarted", "syspro"]
draft: true
---

Syspro is a client-side ERP system. 
This means that the Syspro application is installed on a 
server at your office, on your actual work computer or on a 
server in the cloud. 

In order for Stock2Shop to provide you 
with the full integration capabilities and link Syspro 
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where your Syspro is set up. 

Below is all documentation you will need regarding your Syspro integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with Syspro ERP system, 
we require the following information:

- Server Name / IP Address
- Database Name
- Database Username (Read-Only)
- Database Password (Read-Only)
- Operator Login
- Operator Password
- Company ID
- Public SYSPRO eNet Web Services URL
- Syspro Version

The below must be taken into consideration to ensure we can manage information on a continual basis:

- Outgoing port 8080 should be open.
- The server must always be online.
- The user must have full admin rights.

With these credentials, Stock2Shop will be able to integrate with 
Syspro and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from Syspro to your Stock2Shop client console, 
the minimum required fields are:

```
| Syspro             | Stock2Shop                     | Description                                     |
| ------------------ | ------------------------------ | ----------------------------------------------- |
| StockCode          | source_product_code            | The unique identifier of a product              |
| StockCode          | source_variant_code            | The unique identifier of a product              |
| Description        | title                          | The title/name of a product                     |
| UserField1-5       | product_active                 | User field to mark product active is Stock2Shop |
| InvPrice Table     | csv_price_tiers                | Retrieves Price Code and Selling Price          |
| InvWarehouse Table | variants.qty                   | Retrives Warehouse with QtyOnHand QtyAllocated  |
| StockCode          | variants.sku                   | The unique identifier of a product              |
| true               | variants.inventory_management  | Manage whether a product is inventory managed   |
 ```

## Syncing Customers to Stock2Shop {#sync-customers}
In order to sync customers from Syspro to your Stock2Shop client console, 
the minimum required fields are:

```
| Syspro   | Stock2Shop             | Description                                                                                                          |
| -------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 'true'   | customer_active        | We will either hardcode this to true or require a field on the customer to determine whether they are active or not. |
| Customer | source_customer_code   | The account code for the customer in IQ Retail                                                                       |
| Name     | first_name             | There is no first name field, Name is used                                                                           |
| Name     | last_name              | There is no last name field, Name is used                                                                            |
| Email    | email                  | email field for the email address of the customer                                                                    |
 ```
Note that customers can only be synced with Stock2Shop's B2B Trade Store sales channel and no other sales channels.

## Syncing Orders to Syspro {#raise-orders}
If you require Stock2Shop to insert sales orders or invoices into your SYSPRO, then we need you to install the SYSPRO eNet Web Services. 
If you are not sure how to do this or need help, please contact your SYSPRO representative to guide you through the process.

We require the eNet Web Services to be installed and, at a minimum, the “SORTOI” business object to be enabled for our Operator. 
The web service should be accessible via a public URL or IP address, e.g.: http://123.123.123.123/sysprowebservices/utilities.asmx 
Along with the aforementioned we would also require the following details:

- Operator Login
- Operator Password
- Company ID

By default, Stock2Shop raises orders to Syspro with the following order details:

```
| Syspro      | Stock2Shop             | Description                                                          |
| ----------- | ---------------------- | -------------------------------------------------------------------- |
| Salesperson | sales_rep_id           | Sale Rep for the order                                               |
| OrderType   | order_type             | Should the order be an Invoice or                                    |
| Customer    | source_customer_code   | The name/code of the customer account to process the order against   |
| StockCode   | line_item.sku          | Unique identifier of the line item                                   |
| OrderQty    | line_item.qty          | Qty of the line item that was ordered                                |
| Price       | line_item.price        | Price of the line item that the customer paid ex tax and ex discount |
 ```
 
 There are many other settings we can change for each order. For a complete example of the SYSPRO sales order payload and required information, please view [this document]().

## Features specific to Syspro
To get the most out of your Syspro integration with Stock2shop, 
head over to our [Syspro](/help/features-syspro "Syspro features") documentation.

## Important concepts 
It is important to understand how Stock2Shop interprets data from your source 
along with the terminology we use. Added to that, there are certain concepts that you 
the client have the ability to manage in your own capacity. We have prepared 
documentation that describes all our concepts, [here](/help/how-it-works "How it works")

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com