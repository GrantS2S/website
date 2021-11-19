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

In order for Stock2Shop to provide you with the full integration features and link your IQ Retail system 
to other sales channels and fulfilment services such as Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot, we need access to your IQ Retail ERP via the IQ API Interface.

Below is all documentation you will need regarding your IQ Retail integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with your IQ Retail ERP system, we require the following information:

- IQ Retail API is registered, setup and configured
- Request URL
- IQ Company Number
- IQ User Number
- IQ User Password

With these credentials, Stock2Shop will be able to integrate with 
IQ Retail and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers (Not Supported)](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from iQ Retail to your Stock2Shop client console, 
the minimum required fields are:

| IQ Retail           | Stock2Shop                     | Description                                        |
| ------------------- | ------------------------------ | -------------------------------------------------- |
| code                | source_product_code            | The unique identifier of a product                 |
| code                | source_variant_code            | The unique identifier of a product                 |
| descript            | title                          | The title/name of a product                        |
| WebItem             | product_active                 | This is a default field in IQ Retail as a tick box |
| sellprice1          | variants.price                 | Price lists of the product                         |
| onhand              | variants.qty                   | Stock qty of the product                           |
| code                | variants.sku                   | The unique identifier of a product                 |
| true                | variants.inventory_management  | Manage whether a product is inventory managed      |

## Syncing Customers to Stock2Shop  {#sync-customers}
Stock2Shop currently does not support the syncing of customers from IQ Retail to Stock2Shop. 
At this point in time there are no plans to build out this functionality. 
If customers are a requirement, please read up on how to import customers manually in to your client console, [here](/help/guides/customers/ "Manually import customers into Stock2Shop").

## Syncing Orders to IQ Retail {#raise-orders}
By default, Stock2Shop raises orders to IQ Retail with the following order details:

| IQ Retail                     | Stock2Shop                    | Description                                                          |
| ----------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| iQ_company_number             | iq_company_number             | Company id / number that the orders must process into                  |
| iQ_terminal_number            | iq_terminal_number            | Terminal number that orders must be processed against                |
| sales_representative_number   | sales_representative_number   | Sales representative number that orders must be processed with       |
| debtor_account                | source_customer_code          | The name / code of the customer account to process the order against   |
| stock_code                    | line_item.sku                 | Unique identifier of the line item                                   |
| quantity                      | line_item.qty                 | Qty of the line item that was ordered                                |
| unit_ex_discount_ex_tax       | line_item.price               | Price of the line item that the customer paid ex tax and ex discount |


