---
title: "iQ Retail"
seoTitle: "iQ Retail Getting Started"
seoDescription: "Integrate your iQ Retail with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["iQ Retail", "Integrations"]
type: help
source: "iq-retail"
tags: ["gettingstarted", "iq-retail"]
draft: true
---

iQ Retail is a client-side ERP system. 
This means that the iQ Retail application is installed on a 
server at your office, on your actual work computer or on a 
server in the cloud. 

In order for Stock2Shop to provide you 
with the full integration capabilities and link iQ Retail 
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where your iQ Retail is set up. 

Below is all documentation you will need regarding your iQ Retail integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with iQ Retail ERP system, 
we require the following information:

- Database Name
- Server Name / IP Address (The Windows name of the server)
- Database Username (Read-Only)
- Database Password (Read-Only)
- IQRetail user Username
- IQRetail user Password
- 32-bit DBISAM ODBC Driver (To be installed on server by Stock2)

The below must be taken into consideration to ensure we can manage information on a continual basis:

- Outgoing port 8080 should be open.
- The server must always be online.
- The user must have full admin rights.

With these credentials, Stock2Shop will be able to integrate with 
iQ Retail and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from iQ Retail to your Stock2Shop client console, 
the minimum required fields are:

```
| iQ Retail           | Stock2Shop                     | Description                                        |
| ------------------- | ------------------------------ | -------------------------------------------------- |
| CODE                | source_product_code            | The unique identifier of a product                 |
| CODE                | source_variant_code            | The unique identifier of a product                 |
| DESCRIPT            | title                          | The title/name of a product                        |
| WebItem             | product_active                 | This is a default field in IQ Retail as a tick box |
| sellprice1          | variants.retail_price          | Price lists of the product                         |
| onhand - salesorder | variants.qty                   | Stock qty of the product                           |
| CODE                | variants.sku                   | The unique identifier of a product                 |
| true                | variants.inventory_management  | Manage whether a product is inventory managed      |

 ```

## Syncing Customers to Stock2Shop  {#sync-customers}
In order to sync customers from iQ Retail to your Stock2Shop client console, 
the minimum required fields are:

```
| iQ Retail | Stock2Shop             | Description                                                                                                                |
| --------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| status    | customer_active        | This field would be used to manage whether a customer has access to the trade store (A = Active | D = Delete | I = Ignore) |
| account   | source_customer_code   | The account code for the customer in IQ Retail                                                                             |
| name      | first_name             | There is no first name field, Name is used                                                                                 |
| name      | last_name              | There is no last name field, Name is used                                                                                  |
| email     | email                  | email field for the email address of the customer                                                                          |

 ```
 
## Syncing Orders to iQ Retail {#raise-orders}
By default, Stock2Shop raises orders to iQ Retail with the following order details:

```
| iQ Retail                     | Stock2Shop                    | Description                                                          |
| ----------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| iQ_Company_Number             | iq_company_number             | Company id/number that the orders must process into                  |
| iQ_Terminal_Number            | iq_terminal_number            | Terminal number that orders must be processed against                |
| Sales_Representative_Number   | sales_representative_number   | Sales representative number that orders must be processed with       |
| Debtor_Account                | source_customer_code          | The name/code of the customer account to process the order against   |
| Stock_Code                    | line_item.sku                 | Unique identifier of the line item                                   |
| Quantity                      | line_item.qty                 | Qty of the line item that was ordered                                |
| unit_ex_discount_ex_tax       | line_item.price               | Price of the line item that the customer paid ex tax and ex discount |

 ```

## Features specific to iQ Retail
To get the most out of your iQ Retail integration with Stock2shop, 
head over to our [iQ Retail](/help/features-iq-retail "iQ Retail features") documentation.

## Important concepts 
It is important to understand how Stock2Shop interprets data from your source 
along with the terminology we use. Added to that, there are certain concepts that you 
the client have the ability to manage in your own capacity. We have prepared 
documentation that describes all our concepts, [here](/help/how-it-works "How it works")

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com