---
title: "Dolfin"
seoTitle: "Dolfin Getting Started"
seoDescription: "Integrate your Dolfin with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["Dolfin", "Integrations"]
type: help
source: "dolfin"
tags: ["gettingstarted", "dolfin"]
draft: true
---

Dolfin is an online accounting system. 
This means the application lives in the “cloud”. 
Enabling Stock2Shop to work with 
Dolfin is relatively simple. 

In order for Stock2Shop to 
provide you with the full integration features and link your Dolfin system 
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot, we need access to your Dolfin account.

Below is all documentation you will need regarding your Dolfin integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with Dolfin accounting system, 
we require the following information:

- Product Request URL
- Order Request URL
- Company ID
- Dolfin API Username
- Dolfin API Password

With these credentials, Stock2Shop will be able to integrate with 
Dolfin and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers (Not Supported)](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from Dolfin to your Stock2Shop client console, 
the minimum required fields are:

```
| Dolfin                                  | Stock2Shop                     | Description                                                                                                                                                                                                                                                                 |
| --------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <Prod>                                  | source_product_code            | The "group code" that associates a group of unique skus as variations of a single product.<br>All products must have a product code, and that code must be the same across each variation.<br>All variations must also have an option to differentiate them from each other |
| <SKU>                                   | source_variant_code            | The unique sku code for each variation.                                                                                                                                                                                                                                     |
| <WebName>                               | title                          | The web-friendly title for the product to be synced through.                                                                                                                                                                                                                |
| WebEnable = 1 AND SellOnWeb = 1         | product_active                 | Controls whether a product will sync through to Stock2Shop then the website.                                                                                                                                                                                                |
| <SP>; <SP2>; <SP3>; <SP4>; <PromoPrice> | csv_price_tiers                | Price lists synced for the product                                                                                                                                                                                                                                          |
| <SOH>                                   | variants.qty                   | The available quantity to be synced to Stock2Shop and the website.                                                                                                                                                                                                          |
| <SKU>                                   | variants.sku                   | The unique sku code for each variation.                                                                                                                                                                                                                                     |
| true                                    | variants.inventory_management  | Indicates that Stock2Shop will manage and update inventory to the website                                                                                                                                                                                                   |

 ```

## Syncing Customers to Stock2Shop  {#sync-customers}
Stock2Shop currently does not support the syncing of customers from Dolfin to Stock2Shop.
At this point in time there are no plans to build out this functionality. 
If customers are a requirement, please read up on how to import customers manually in to your client console, [here](/help/how-it-works-customer-import "Manually import customers into Stock2Shop").
 
## Syncing Orders to Dolfin {#raise-orders}
By default, Stock2Shop raises orders to Dolfin with the following order details:

```
| Dolfin              | Stock2Shop            | Description                                                                                      |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------ |
| <TransactionNumber> | id                    | The transaction number generated for orders posted to Dollfin                                    |
| <CSCustomerSurname> | customer.last_name    | Surname of customer on an order                                                                  |
| <CSCustomerName>    | customer.first_name   | First name of customer on an order                                                               |
| <billing_address>   | billing_address       | Billing address as entered on the website                                                        |
| <shipping_address>  | shipping_address      | Shipping address as entered on the website                                                       |
| <SKUCode>           | line_item.sku         | The unique sku code, as entered on the website, that is ordered as a line item                   |
| <SaleQty>           | line_item.qty         | Quantity of each line item on an order                                                           |
| <NetAmtStoreInc>    | line_item.price       | Price of the line item as it appears on the website                                              |
| <TaxAmtStore>       | line_item.tax_lines   | Tax applied to the line item                                                                     |
| <SKUCode>           | shipping_code         | Shipping charge applied to the order, processed against a single, pre-defined, service line item |
 ```

## Features specific to Dolfin
To get the most out of your Dolfin integration with Stock2shop, 
head over to our [Dolfin](/help/features-dolfin "Dolfin features") documentation.


## Important concepts 
It is important to understand how Stock2Shop interprets data from your source 
along with the terminology we use. Added to that, there are certain concepts that you 
the client have the ability to manage in your own capacity. We have prepared 
documentation that describes all our concepts, [here](/help/how-it-works "How it works")

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com
