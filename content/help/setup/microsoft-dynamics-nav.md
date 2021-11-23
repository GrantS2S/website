---
title: "Microsoft Dynamics NAV"
seoTitle: "Microsoft Dynamics NAV Getting Started"
seoDescription: "Integrate your Microsoft Dynamics NAV with supported B2B and B2C Systems through Stock2Shop"
type: setup
source: "microsoft-dynamics-nav"
channel: ""
fulfillment: ""
---

## Microsoft Dynamics NAV
Microsoft Dynamics NAV is a client-side ERP system. 
This means that the Microsoft Dynamics NAV application is installed on a 
server at your office, on your actual work computer or on a 
server in the cloud. 

In order for Stock2Shop to provide you 
with the full integration capabilities and link Microsoft Dynamics NAV
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where your Microsoft Dynamics NAV is set up. 
For more information on the installation of Stock2Shop's software, see our guide on [installing Stock2Shop](/help/setup/installing-stock2shop/ "Installing Stock2Shop for on Premise ERP / Accounting Systems") for on premise ERP / Accounting Systems.

Below is all documentation you will need regarding your Microsoft Dynamics NAV integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with a Microsoft Dynamics NAV, 
we require the following information:

- Server Name / IP Address
- Database Name
- Database Username (Read-Only)
- Database Password (Read-Only)

With these credentials, Stock2Shop will be able to integrate with a
Microsoft Dynamics NAV, and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from a Microsoft Dynamics NAV, to your Stock2Shop client console, 
the minimum required fields are:

| Microsoft Dynamics NAV      | Stock2Shop                     | Description                                                                      |
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

## Syncing Customers to Stock2Shop  {#sync-customers}
In order to sync customers from a Microsoft Dynamics NAV to your Stock2Shop client console, 
the minimum required fields are:

| Microsoft Dynamics NAV    | Stock2Shop             | Description                                               |
| ------------------------- | ---------------------- | --------------------------------------------------------- |
| Customer Active           | customer_active        | User Defined Field with 3 Options: Ignore, Active, Delete |
| Account / Customer Number | source_customer_code   | The unique ID for a customer or customer account          |
| First Name                | first_name             | Customer first name                                       |
| Last Name                 | last_name              | Customer last name                                        |
| E-Mail                    | email                  | Customer email which cannot be blank                      |

## Syncing Orders to a Microsoft Dynamics NAV {#raise-orders}
Syncing orders to a Microsoft Dynamics NAV will need to be discussed in detail with our developers as the mechanism
to raise the orders will need to be confirmed. We suggest that the following fields are raised on the order:

| Microsoft Dynamics NAV    | Stock2Shop              | Description                                           |
| ------------------------- | ----------------------- | ----------------------------------------------------- |
| Date                      | sytem_order.createdate  | Date the order is created on Stock2Shop               |
| Account / Customer Number | customer_code           | Default Customer Account if not specified on customer |
| Item Code                 | line_item.sku           | Unique code for a product syncing from the website.   |
| Qty                       | line_item.qty           | Qty orderd by the customer                            |
| Item Price                | line_item.price         | Price of the product on the website                   |

