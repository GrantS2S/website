---
title: "Custom Database"
seoTitle: "Custom Database Getting Started"
seoDescription: "Integrate your Custom Database with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["Custom Database", "Integrations"]
type: help
source: "custom-database"
tags: ["gettingstarted", "custom-database"]
draft: true
---

Stock2Shop can pull inventory data from multiple databases. 
The only prerequisite is that the database can be accessed via ODBC. 
We therefore support Microsoft SQL Server, MySQL Server, Pervasive SQL, Hana and many other databases.

A Custom Database is client-side. 
This means that the Custom Database is installed on a 
server at your office, on your actual work computer or on a 
server in the cloud. 

In order for Stock2Shop to provide you 
with the full integration capabilities and link a Custom Database
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where the Custom Database is set up. 

Below is all documentation you will need regarding a Custom Database integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with a Custom Database, 
we require the following information:

- Server Name / IP Address
- Database Name
- Database Username (Read-Only)
- Database Password (Read-Only)

With these credentials, Stock2Shop will be able to integrate with a
Custom Database, and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from a Custom Database, to your Stock2Shop client console, 
the minimum required fields are:

```
| Custom Database             | Stock2Shop                     | Description                                                                      |
| --------------------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| Product Grouping Code       | source_product_code            | Used for Grouping Variable Products. Equal to Item Code for simple product setup |
| Item Code                   | source_variant_code            | Product Ref Code/ Item No                                                        |
| Item Name/Description       | title                          | The tile of the product                                                          |
| Item Price                  | csv_price_tiers                | Default Item Price                                                               |
| Qty                         | variants.qty                   | Default Qty                                                                      |
| Item Code                   | variants.sku                   | Can be the same as source\_variant\_code                                         |
| Item Active for S2S         | product_active                 | User Defined field with 3 options: Ignore, Active, Delete                        |
| Inventory Managed (boolean) | variants.inventory_management  | Used to set inventory management on the product                                  |
| Variant Option 1            | variants.option1_value         | Only for variable products : 1st Option/Selection                                |
| Variant Option 2            | variants.option2_value         | Only for variable products : 2nd Option/Selection                                |
| Variant Option 3            | variants.option3_value         | Only for variable products : 3rd Option/Selection                                |

 ```

## Syncing Customers to Stock2Shop  {#sync-customers}
In order to sync customers from a Custom Database to your Stock2Shop client console, 
the minimum required fields are:

```
| Custom Database           | Stock2Shop             | Description                                               |
| ------------------------- | ---------------------- | --------------------------------------------------------- |
| Customer Active           | customer_active        | User Defined Field with 3 Options: Ignore, Active, Delete |
| Account / Customer Number | source_customer_code   | The unique ID for a customer or customer account          |
| First Name                | first_name             | Customer first name                                       |
| Last Name                 | last_name              | Customer last name                                        |
| E-Mail                    | email                  | Customer email which cannot be blank                      |

 ```
 
## Syncing Orders to a Custom Database {#raise-orders}
Syncing orders to a Custom Database will need to be discussed in detail with our developers as the mechanism
to raise the orders will need to be confirmed. We suggest that the following fields are raised on the order:


```
| Custom Database           | Stock2Shop              | Description                                           |
| ------------------------- | ----------------------- | ----------------------------------------------------- |
| Date                      | sytem_order.createdate  | Date the order is created on Stock2Shop               |
| Account / Customer Number | customer_code           | Default Customer Account if not specified on customer |
| Item Code                 | line_item.sku           | Unique code for a product syncing from the website.   |
| Qty                       | line_item.qty           | Qty orderd by the customer                            |
| Item Price                | line_item.price         | Price of the product on the website                   |

 ```

## Features specific to Custom Database
To get the most out of a Custom Database integration with Stock2shop, 
head over to our [Custom Database](/help/features-custom-database "Custom Database features") documentation.

## Important concepts 
It is important to understand how Stock2Shop interprets data from your source 
along with the terminology we use. Added to that, there are certain concepts that you 
the client have the ability to manage in your own capacity. We have prepared 
documentation that describes all our concepts, [here](/help/how-it-works "How it works")

## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com
