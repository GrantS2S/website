---
title: "Sage 300cloud"
seoTitle: "Sage 300cloud Getting Started"
seoDescription: "Integrate your Sage 300cloud with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["Sage 300cloud", "Integrations"]
type: help
source: "sage-300cloud"
tags: ["gettingstarted", "sage-300cloud"]
draft: true
---

Sage 300cloud is a client-side ERP system. 
This means that the Sage 300cloud application is installed on a 
server at your office, on your actual work computer or on a 
server in the cloud. 

In order for Stock2Shop to provide you 
with the full integration capabilities and link Sage 300cloud
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where your Sage 300cloud is set up. 

Below is all documentation you will need regarding your Sage 300cloud integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with Sage 300cloud ERP system, 
we require the following information:

- Server Name / IP Address (The Windows name of the server)
- Database Name
- Database Username (Read-Only)
- Database Password (Read-Only)
- WebScreens Installed

The below must be taken into consideration to ensure we can manage information on a continual basis:

- Outgoing port 8080 should be open.
- The server must always be online.
- The user must have full admin rights.

With these credentials, Stock2Shop will be able to integrate with 
Sage 300cloud and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from Sage 300cloud to your Stock2Shop client console, 
the minimum required fields are:

```
| Sage 300                            | Stock2Shop                     | Description                                     |
| ----------------------------------- | ------------------------------ | ----------------------------------------------- |
| ITEMNO                              | source_product_code            | The unique identifier of a product              |
| ITEMNO                              | source_variant_code            | The unique identifier of a product              |
| [DESC]                              | title                          | The title/name of a product                     |
| Userdefined                         | product_active                 | User field to mark product active is Stock2Shop |
| ICPRICP.UNITPRICE                   | variants.retail_price          | Price lists of the product                      |
| ICILOC.QTYONHAND - ICILOC.QTYCOMMIT | variants.qty                   | Stock qty of the product                        |
| ITEMNO                              | variants.sku                   | The unique identifier of a product              |
| TRUE                                | variants.inventory_management  | Manage whether a product is inventory managed   |

 ```

## Syncing Customers to Stock2Shop {#sync-customers}
In order to sync customers from Sage 300cloud to your Stock2Shop client console, 
the minimum required fields are:

```
| Sage 300   | Stock2Shop             | Description                                                                                                                |
| ---------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| CUSTACTIVE | customer_active        | This field would be used to manage whether a customer has access to the trade store (A = Active | D = Delete | I = Ignore) |
| IDCUST     | source_customer_code   | The account code for the customer in Sage 300                                                                              |
| IDCUST     | first_name             | There is no first name field, Name is used                                                                                 |
| NAMECTAC   | last_name              | There is no last name field, Name is used                                                                                  |
| EMAIL1     | email                  | email field for the email address of the customer                                                                          |

 ```

## Syncing Orders to Sage 300cloud {#raise-orders}
If you require Stock2Shop to insert sales orders or invoices into your Sage 300cloud, you need to have Web Screens installed and setup. 
If you are not sure how to do this or need help, please contact your Sage 300cloud representative to guide you through the process.
Below are some usefull links to get you started:

- [Sage 300cloud Web Services](https://smist08.wordpress.com/2016/02/15/sage-300c-web-services/ "Sage 300c web services")
- [Installing the Sage 300cloud web UI’s](https://smist08.wordpress.com/2015/08/02/installing-the-sage-300c-web-uis/ "Installing the sage 300 web uis")
- [Installing the new Sage 300cloud web UI’s securely](https://smist08.wordpress.com/2015/08/08/installing-the-new-sage-300-web-uis-securely/ "Installing the new Sage 300 web uis securely")

By default, Stock2Shop raises orders to Sage 300cloud with the following order details:

```
| Sage 300        | Stock2Shop             | Description                                                          |
| --------------- | ---------------------- | -------------------------------------------------------------------- |
| CustomerNumber  | source_customer_code   | The name/code of the customer account to process the order against   |
| Location        | location_code          | Warehouse location of Item                                           |
| Item            | line_item.sku          | Unique identifier of the line item                                   |
| QuantityOrdered | line_item.qty          | Qty of the line item that was ordered                                |
| OrderUnitPrice  | line_item.price        | Price of the line item that the customer paid ex tax and ex discount |
 ```

## Features specific to Sage 300cloud
To get the most out of your Sage 300cloud integration with Stock2shop, 
head over to our [Sage 300cloud](/help/features-sage-300cloud "Sage 300cloud features") documentation.

## Important concepts 
It is important to understand how Stock2Shop interprets data from your source 
along with the terminology we use. Added to that, there are certain concepts that you 
the client have the ability to manage in your own capacity. We have prepared 
documentation that describes all our concepts, [here](/help/how-it-works "How it works")

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com
