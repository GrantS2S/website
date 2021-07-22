---
title: "connector_name"
# Search engine optimisation
seoTitle: "connector_name Getting Started (no more than 60 characters)"
seoDescription: "Integrate your connector_name with supported B2B and B2C Systems through Stock2Shop (no more than 160 characters)"
seoKeyword: ["connector_name", "Integrations"]
# Categorisation & redirecting
type: "help"
tags: ["gettingstarted", "connector-name"]
aliases: "link"
draft: true
---

{{connector_name}} is an online accounting system. 
This means the application lives in the “cloud”. Enabling Stock2Shop to work with 
{{connector_name}} is relatively simple. 

In order for Stock2Shop to provide you with the full integration features and link your {{connector_name}} system 
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot, we need access to your {{connector_name}} account.

Below is all documentation you will need regarding your {{connector_name}} integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with {{connector_name}} {{ERP / accounting system}}, 
we require the following information:

- Username
- Password
- API credentials

With these credentials, Stock2Shop will be able to integrate with 
{{connector_name}} and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers (Not Supported)](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from {{connector_name}} to your Stock2Shop client console, 
the minimum required fields are:

```
| {{connector_name}}   | Stock2Shop                    |  Description                  |
| ---------------------|-------------------------------|-------------------------------|
| Prod                 | source_product_code           |                               |
| SKU                  | source_variant_code           |                               |
| WebName              | title                         |                               |
| product_active       | product_active                |                               |
| qty                  | variants.retail_price         |                               |
| price                | variants.qty                  |                               |
| SKU                  | variants.sku                  |                               |
| true                 | variants.inventory_management |                               |

 ```

## Syncing Customers to Stock2Shop  {#sync-customers}
In order to sync customers from {{connector_name}} to your Stock2Shop client console, 
the minimum required fields are:

```
| {{connector_name}}   | Stock2Shop                    |  Description                  |
| ---------------------|-------------------------------|-------------------------------|
| Prod                 | source_product_code           |                               |
| SKU                  | source_variant_code           |                               |
| WebName              | title                         |                               |
| product_active       | product_active                |                               |
| qty                  | variants.retail_price         |                               |
| price                | variants.qty                  |                               |
| SKU                  | variants.sku                  |                               |
| true                 | variants.inventory_management |                               |

 ```
 
Stock2Shop currently does not support the syncing of customers from {{connector_name}} to Stock2Shop. 
At this point in time there are no plans to build out this functionality. 
If customers are a requirement, please read up on how to import customers manually in to your client console, [here](/help/how-it-works-customer-import "Manually import customers into Stock2Shop").
 
 
## Syncing Orders to {{connector_name}} {#raise-orders}
By default, Stock2Shop raises orders to {{connector_name}} with the following order details:

```
| {{connector_name}}   | Stock2Shop                    |  Description                  |
| ---------------------|-------------------------------|-------------------------------|
| Prod                 | source_product_code           |                               |
| SKU                  | source_variant_code           |                               |
| WebName              | title                         |                               |
| product_active       | product_active                |                               |
| qty                  | variants.retail_price         |                               |
| price                | variants.qty                  |                               |
| SKU                  | variants.sku                  |                               |
| true                 | variants.inventory_management |                               |

 ```

## Features specific to {{connector_name}}
To get the most out of your {{connector_name}} integration with Stock2shop, 
head over to our [{{connector_name}}](/help/# "{{connector_name}} features") documentation.


## Important concepts 
It is important to understand how Stock2Shop interprets data from your source 
along with the terminology we use. Added to that, there are certain concepts that you 
the client have the ability to manage in your own capacity. We have prepared 
documentation that describes all our concepts, [here](/help/how-it-works "How it works")

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com
