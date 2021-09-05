---
title: "Sage Business Cloud Accounting"
seoTitle: "Sage Business Cloud Accounting Getting Started"
seoDescription: "Integrate your Sage Business Cloud Accounting with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["Sage Business Cloud Accounting", "Integrations"]
type: help
source: "sage-business-cloud-accounting"
tags: ["gettingstarted", "sage-business-cloud-accounting"]
draft: true
---

Sage Business Cloud Accounting is an online accounting system. 
This means the application lives in the “cloud”. Enabling Stock2Shop to work with 
Sage Business Cloud Accounting is relatively simple. 

In order for Stock2Shop to provide you with the full integration features and link your Sage Business Cloud Accounting system 
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot, we need access to your Sage Business Cloud Accounting account.

Below is all documentation you will need regarding your Sage Business Cloud Accounting integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with Sage Business Cloud Accounting accounting system, 
we require the following information:

- Sage Business Cloud Accounting accounting Username/Email
- Sage Business Cloud Accounting accounting Password
- Sage Business Cloud Accounting accounting Company ID

With these credentials, Stock2Shop will be able to integrate with 
Sage Business Cloud Accounting and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers (Not Supported)](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from Sage Business Cloud Accounting to your Stock2Shop client console, 
the minimum required fields are:

```
| Sage Business Cloud Accounting  | Stock2Shop                     | Description                                                                          |
| ------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------ |
| Code                            | source_product_code            | Product Parent Code for Stock2Shop.                                                  |
| Code                            | source_variant_code            | Product Variant Code for Stock2Shop.                                                 |
| Description                     | title                          | Product Title field for Stock2Shop to be used for creating product on Sales Channels |
| Active                          | product_active                 | Active field for Stock2Shop to sync the product                                      |
| *PriceInclusive/PriceExclusive  | variant.price_tier             | Tax Inclusive/Exclusive Price                                                        |
| *QuantityOnHand                 | variants.qty                   | Quantity on Hand for the Product                                                     |
| Code                            | variants.sku                   | Sku code field for Stock2Shop                                                        |
| *true                           | variants.inventory_management  | Control qty syncing and updating on the Sales Channel                                |
```

## Syncing Customers to Stock2Shop  {#sync-customers}
Stock2Shop currently does not support the syncing of customers from {{connector_name}} to Stock2Shop. 
At this point in time there are no plans to build out this functionality. 
If customers are a requirement, please read up on how to import customers manually in to your client console, [here](/help/how-it-works-customer-import "Manually import customers into Stock2Shop").
 
## Syncing Orders to Sage Business Cloud Accounting {#raise-orders}
By default, Stock2Shop raises orders to Sage Business Cloud Accounting with the following order details:

```
| Sage Business Cloud Accounting | Stock2Shop                                   | Description                                           |
| ------------------------------ | -------------------------------------------- | ----------------------------------------------------- |
| Date                           | created_at                                   | Customer Name                                         |
| CustomerId                     | system_order_default_address.customer_id     | Customer ID to send to SageOne                        |
| DueDate                        | createdDate                                  | Due Date for Tax Invoice on SageOne                   |
| Item                           | line_item.sku                                | Products being Ordered                                |
| Qty                            | line_item.qty                                | Total Qty for each line item being ordered            |
| Tax Code                       | param_tax_code                               | Tax Code to used for Orders marked as Taxed           |
| Tax Exempt Code                | param_tax_exempt_code                        | Tax Code to used for Orders marked as Tax Exempt      |
| Quote/Tax Invoice              | Order                                        | Create Quote instead of Sales Invoice                 |
| Delivery Charge                | Order                                        | Fixed code for processing Shipping Line Items against |
```

## Features specific to Sage Business Cloud Accounting
To get the most out of your Sage Business Cloud Accounting integration with Stock2shop, 
head over to our [Sage Business Cloud Accounting](/help/features-sage-business-cloud-accounting "Sage Business Cloud Accounting features") documentation.

## Important concepts 
It is important to understand how Stock2Shop interprets data from your source 
along with the terminology we use. Added to that, there are certain concepts that you 
the client have the ability to manage in your own capacity. We have prepared 
documentation that describes all our concepts, [here](/help/how-it-works "How it works")

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com
