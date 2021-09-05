---
title: "Flat File"
seoTitle: "Flat File Getting Started"
seoDescription: "Integrate your Flat File with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["Flat File", "Integrations"]
type: help
source: "flat-file"
tags: ["gettingstarted", "flat-file"]
draft: true
---

A Flat File is a source of data and can be used as a [Primary source](/help/how-it-works-primary-sources "Concept of a Primary Source in Stock2Shop") to create products,
or as a [Linked source](help/how-it-works-linked-sources "Concept of a Linked source in Stock2Shop") to only be in charge of enriching your master data from your Primary source.
This source of data (on a flat file) would typically be hosted on FTP server. Enabling Stock2Shop to work with 
Flat File source of data is relatively simple. 

In order for Stock2Shop to provide you with the full integration features and link your Flat File 
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot, we need access to your FTP Server account.

Below is all documentation you will need regarding your Flat File integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with a Flat File, 
we require the following information:

- ftp_host/file_url
- ftp_port
- ftp_file_path
- ftp_username
- ftp_password
- file_extension

To note we only support the following CSV and XML file types. 
We also only support ftp, sftp and url transfer protocols.

With these credentials, Stock2Shop will be able to integrate with 
your Flat File and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers (Not Supported)](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from a Flat File to your Stock2Shop client console, 
the minimum required fields are:

```
| Flat File                      | Stock2Shop                     | Description                                                                          |
| ------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------ |
| Product Code                   | source_product_code            | Product Parent Code for Stock2Shop.                                                  |
| Variant Code                   | source_variant_code            | Product Variant Code for Stock2Shop.                                                 |
| Title                          | title                          | Product Title field for Stock2Shop to be used for creating product on Sales Channels |
| Active                         | product_active                 | Active field for Stock2Shop to sync the product                                      |
| Price/s                        | variant.price_tier             | Price Tiers for Products                                                             |
| Qty                            | variants.qty                   | Quantity on Hand for the Product                                                     |
| Sku                            | variants.sku                   | Sku code field for Stock2Shop                                                        |
| variants.inventory_management  | variants.inventory_management  | Control qty syncing and updating on the Sales Channel                                |
 ```

## Syncing Customers to Stock2Shop  {#sync-customers} 
Stock2Shop currently does not support the syncing of customers from a Flat File to Stock2Shop. 
At this point in time there are no plans to build out this functionality. 
If customers are a requirement, please read up on how to import customers manually in to your client console, [here](/help/how-it-works-customer-import "Manually import customers into Stock2Shop").
 
 
## Syncing Orders to a Flat File {#raise-orders}
By default, Stock2Shop raises orders to a Flat File with the following order details:

```
| Flat File   | Stock2Shop       | Description                                             |
| ----------- | ---------------- | ------------------------------------------------------- |
| Customer    | customer.name    | Name of Person who placed Order                         |
| Address     | customer.address | Address of Customer                                     |
| Line Items  | line_item.sku    | Products being Ordered                                  |
| Ordered Qty | line_item.qty    | Total Qty for each line item being ordered              |
| Item Cost   | line_item.price  | Price for the items Ordered to list on the Invoice file |

 ```

## Features specific to Flat File
To get the most out of your Flat File integration with Stock2shop, 
head over to our [Flat File](/help/features-flat-file "Flat File features") documentation.

## Important concepts 
It is important to understand how Stock2Shop interprets data from your source 
along with the terminology we use. Added to that, there are certain concepts that you 
the client have the ability to manage in your own capacity. We have prepared 
documentation that describes all our concepts, [here](/help/how-it-works "How it works")

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com
