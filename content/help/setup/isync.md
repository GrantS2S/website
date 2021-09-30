---
title: "iSync"
seoTitle: "iSync Getting Started"
seoDescription: "Integrate your iSync with supported B2B and B2C Systems through Stock2Shop"
type: setup
source: "isync"
channel: ""
fulfillment: ""
aliases:
    - /documentation/getting-started/isync/
---

## iSync
iSync is an online accounting system. This means the application lives in the “cloud”. Enabling Stock2Shop to work with iSync is relatively simple. 
In order for Stock2Shop to provide you with the full integration features and link your iSync system to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot, we need access to your iSync.

Below is all documentation you will need regarding your iSync integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with iSync system, 
we require the following information:

- iSync Username/Email
- iSync Password

With these credentials, Stock2Shop will be able to integrate with 
iSync and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers (Not Supported)](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from iSync to your Stock2Shop client console, 
the minimum required fields are:

| iSync                             | Stock2Shop            | Description                                                                      |
| --------------------------------- | --------------------- | -------------------------------------------------------------------------------- |
| JobProductID                      | source_product_code   | Used for Grouping Variable Products. Equal to Item Code for simple product setup |
| SKU                               | source_variant_code   | Product Ref Code/ Item No                                                        |
| JobDescription                    | title                 | Used as the title on the product                                                 |
| RetailSellingPrice / SellingPrice | csv_price_tiers       | Array of the price list on the item from the Master warehouse                    |
| AvailableUnits                    | variants.qty          | Stock quantity of the product                                                    |
| SKU                               | variants.sku          | Can be StkItem.Code if syncing simple products only                              |
| WebSale                           | product_active        | User Defined field with 3 options: Ignore, Active, Delete                        |
| TRUE                              | inventory_management  | This will be hardcoded to "true" in Stock2Shop                                   |

## Syncing Customers to Stock2Shop  {#sync-customers}
Stock2Shop currently does not support the syncing of customers from iSync to Stock2Shop. 
At this point in time there are no plans to build out this functionality. 
If customers are a requirement, please read up on how to import customers manually in to your client console, [here](/help/how-it-works-customer-import "Manually import customers into Stock2Shop").
 
## Syncing Orders to iSync {#raise-orders}
By default, Stock2Shop raises orders to iSync with the following order details:

| iSync          | Stock2Shop           | Description                                                                                      |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------ |
| PONumber       | channel_order_code   | The transaction number generated for orders posted to iSync                                      |
| DeliveryDetail | shipping_address     | Shipping address as entered on the website                                                       |
| ProductStockID | line_item.sku        | The unique sku code, as entered on the website, that is ordered as a line item                   |
| Units          | line_item.qty        | Quantity of each line item on an order                                                           |
| SellingPrice   | line_item.price      | Price of the line item as it appears on the website                                              |
| ProductStockID | shipping_code        | Shipping charge applied to the order, processed against a single, pre-defined, service line item |
