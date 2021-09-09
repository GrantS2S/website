---
title: "Omni Accounts"
seoTitle: "Omni Accounts Getting Started"
seoDescription: "Integrate your Omni Accounts with supported B2B and B2C Systems through Stock2Shop"
type: setup
source: "omni-accounts"
channel: ""
fulfillment: ""
---

## Omni Accounts
Omni Accounts is a client-side accounting system. 
This means that the Omni Accounts application is installed on a 
server at your office, on your actual work computer or on a 
server in the cloud. 

In order for Stock2Shop to provide you with the full integration capabilities and link Omni Accounts
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where your Omni Accounts is set up. 

Below is all documentation you will need regarding your Omni Accounts integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with Omni Accounts accounting system, 
we require the following information:

- Database Name
- Omni Accounts Company name
- Database Username (Read-Only)
- Database Password (Read-Only)
- Omni Accounts Username
- Omni Accounts Password
- [Automation switch (SF187)](https://www.omniaccounts.co.za/switch/omni-automation "Omni Accounts automation switch")
- [Imports sales document switch (SF109)](https://www.omniaccounts.co.za/switch/import-sales-documents "Omni Accounts import sales document switch")
- OmniWebServiceREST
- Omni Accounts v7.13.63 3345 or later

The below must be taken into consideration to ensure we can manage information on a continual basis:

- Outgoing port 8080 should be open.
- The server must always be online.
- The user must have full admin rights.

With these credentials, Stock2Shop will be able to integrate with 
Omni Accounts and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers (Not Supported)](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from Omni Accounts to your Stock2Shop client console, 
the minimum required fields are:

| Omni Accounts | Stock2Shop                     | Description                                                                                  |
| ------------- | ------------------------------ | -------------------------------------------------------------------------------------------- |
| STOCKCODE     | source_product_code            | The unique identifier of a product                                                           |
| STOCKCODE     | source_variant_code            | The unique identifier of a product                                                           |
| DESCRIPTION   | title                          | The title/name of a product                                                                  |
| EXTRADTLS8    | product_active                 | This is an additional field - values to be populated in the field : ACTIVE | DELETE | IGNORE |
| SELLINGPRICE1 | variants.retail_price          | Price lists of the product                                                                   |
| OAvailable    | variants.qty                   | Stock qty of the product                                                                     |
| STOCKCODE     | variants.sku                   | The unique identifier of a product                                                           |
| true          | variants.inventory_management  | Manage whether a product is inventory managed                                                |

## Syncing Customers to Stock2Shop  {#sync-customers}
Stock2Shop currently does not support the syncing of customers from Omni Accounts to Stock2Shop. 
At this point in time there are no plans to build out this functionality. 
If customers are a requirement, please read up on how to import customers manually in to your client console, [here](/help/how-it-works-customer-import "Manually import customers into Stock2Shop").
 
## Syncing Orders to Omni Accounts {#raise-orders}
By default, Stock2Shop raises orders to Omni Accounts with the following order details:

| Omni Accounts               | Stock2Shop             | Description                                                        |
| --------------------------- | ---------------------- | ------------------------------------------------------------------ |
| customer_account_code       | source_customer_code   | The name/code of the customer account to process the order against |
| warehouse_code              | warehouse_code         | The warehouse that the order must be rocessed against              |
| order_lines.stock_code      | line_item.sku          | Unique identifier of the line item                                 |
| order_lines.description     | line_item.title        | Title of the line item that was ordered                            |
| order_lines.quantity        | line_item.qty          | Qty of the line item that was ordered                              |
| order_lines.selling_price   | line_item.price        | Price of the line item that the customer paid                      |
| order_lines.vat_code        | default_tax_code       | Tax code used for taxed items                                      |