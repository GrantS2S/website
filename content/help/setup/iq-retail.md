---
title: "IQ Retail"
seoTitle: "IQ Retail Getting Started"
seoDescription: "Integrate your IQ Retail with supported B2B and B2C Systems through Stock2Shop"
type: setup
source: "iq-retail"
channel: ""
fulfillment: ""
aliases:
    - /documentation/getting-started/iq-retail/
---

## IQ Retail
IQ Retail is a client-side ERP system. 
This means that the IQ Retail application is installed on a server at your office, on your actual work computer or on a server in the cloud.

In order for Stock2Shop to provide you with the full integration capabilities and link IQ Retail to other sales channels and fulfilment services such as Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where your IQ Retail is set up. 
For more information on the installation of Stock2Shop's software, see our guide on [installing Stock2Shop](/help/setup/installing-stock2shop/ "Installing Stock2Shop for on Premise ERP / Accounting Systems") for on premise ERP / Accounting Systems.

Below is all documentation you will need regarding your IQ Retail integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with IQ Retail ERP system, 
we require the following information:

- Database Name
- Server Name / IP Address (The Windows name of the server)
- Database Username (Read-Only)
- Database Password (Read-Only)
- IQRetail user Username
- IQRetail user Password
- 32-bit DBISAM ODBC Driver (To be installed on server by Stock2)

With these credentials, Stock2Shop will be able to integrate with 
IQ Retail and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from iQ Retail to your Stock2Shop client console, 
the minimum required fields are:

| IQ Retail           | Stock2Shop                     | Description                                        |
| ------------------- | ------------------------------ | -------------------------------------------------- |
| CODE                | source_product_code            | The unique identifier of a product                 |
| CODE                | source_variant_code            | The unique identifier of a product                 |
| DESCRIPT            | title                          | The title/name of a product                        |
| WebItem             | product_active                 | This is a default field in IQ Retail as a tick box |
| sellprice1          | variants.retail_price          | Price lists of the product                         |
| onhand - salesorder | variants.qty                   | Stock qty of the product                           |
| CODE                | variants.sku                   | The unique identifier of a product                 |
| true                | variants.inventory_management  | Manage whether a product is inventory managed      |

## Syncing Customers to Stock2Shop  {#sync-customers}
In order to sync customers from IQ Retail to your Stock2Shop client console, 
the minimum required fields are:

| IQ Retail | Stock2Shop             | Description                                                                                                                |
| --------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| status    | customer_active        | This field would be used to manage whether a customer has access to the trade store (A = Active | D = Delete | I = Ignore) |
| account   | source_customer_code   | The account code for the customer in IQ Retail                                                                             |
| name      | first_name             | There is no first name field, Name is used                                                                                 |
| name      | last_name              | There is no last name field, Name is used                                                                                  |
| email     | email                  | email field for the email address of the customer                                                                          |

## Syncing Orders to IQ Retail {#raise-orders}
By default, Stock2Shop raises orders to IQ Retail with the following order details:

| IQ Retail                     | Stock2Shop                    | Description                                                          |
| ----------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| iQ_Company_Number             | iq_company_number             | Company id/number that the orders must process into                  |
| iQ_Terminal_Number            | iq_terminal_number            | Terminal number that orders must be processed against                |
| Sales_Representative_Number   | sales_representative_number   | Sales representative number that orders must be processed with       |
| Debtor_Account                | source_customer_code          | The name/code of the customer account to process the order against   |
| Stock_Code                    | line_item.sku                 | Unique identifier of the line item                                   |
| Quantity                      | line_item.qty                 | Qty of the line item that was ordered                                |
| unit_ex_discount_ex_tax       | line_item.price               | Price of the line item that the customer paid ex tax and ex discount |


