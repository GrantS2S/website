---
title: "SAP Business One"
seoTitle: "SAP Business One Getting Started"
seoDescription: "Integrate your SAP Business One with supported B2B and B2C Systems through Stock2Shop"
type: setup
source: "sap-business-one"
channel: ""
fulfillment: ""
aliases:
    - /documentation/getting-started/sap-business-one-install/
---

## SAP Business One
SAP Business One is a client-side ERP system. 
This means that the SAP Business One application is installed on a 
server at your office, on your actual work computer or on a 
server in the cloud. 

In order for Stock2Shop to provide you with the full integration capabilities and link SAP Business One
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where your SAP Business One is set up. 
For more information on the installation of Stock2Shop's software, see our guide on [installing Stock2Shop](/help/setup/installing-stock2shop/ "Installing Stock2Shop for on Premise ERP / Accounting Systems") for on premise ERP / Accounting Systems.

Below is all documentation you will need regarding your SAP Business One integration from start to finish.
Although this is a guide, Stock2Shop can facilitate complex integrations, however this may result in increased integration time.

## Getting Started (Prerequisites)
In order for Stock2Shop to communicate with SAP Business One ERP system, 
we require the following information:

- Server Name / IP Address
- Database Name
- Database Username (Read-Only)
- Database Password (Read-Only)
- DI Server	

With these credentials, Stock2Shop will be able to integrate with SAP Business One and perform the following:

1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
In order to sync products from SAP Business One to your Stock2Shop client console, 
the minimum required fields are:

| SAP Business One        | Stock2Shop                     | Description                                                                                                                                           |
| ----------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ItemCode                | source_product_code            | This is used to group variable products                                                                                                               |
| ItemCode                | source_variant_code            | This is a unique code for each variation                                                                                                              |
| ItemName                | title                          | Product title that will be synced to the website                                                                                                      |
| Webactive               | product_active                 | User defined field that indicates whether the product should sync or not sync to the website. The indicator has 3 options; active, ignore and delete. |
| Price                   | csv_price_tiers                | The price of the product syncing to the website                                                                                                       |
| {OnHand} - {IsCommited} | variants.qty                   | This is the available quantity to                                                                                                                     |
| ItemCode                | variants.sku                   | Unique code for a product syncing to the channel                                                                                                      |
| true                    | variants.inventory_management  | Shows that S2S is managing and updating inventory                                                                                                     |

## Syncing Customers to Stock2Shop  {#sync-customers}
In order to sync customers from SAP Business One to your Stock2Shop client console, 
the minimum required fields are:

| SAP Business One | Stock2Shop             | Description                                                                                                                                                           |
| ---------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U_S2SActive      | customer_active        | Create a user-defined field (UDF) that indicates whether the customer should sync or not sync to the website. The indicator has 3 options; active, ignore and delete. |
| CardCode         | source_customer_code   | Unique code for each customer on SAP Business One                                                                                                                           |
| FirstName        | first_name             | First name of the customer                                                                                                                                            |
| LastName         | last_name              | Last name of the customer                                                                                                                                             |
| E_Mail           | Email                  | Customer's email address                                                                                                                                              |
| Street           | Address1               | Street address                                                                                                                                                        |
| City             | City                   | City Name                                                                                                                                                             |
| Country          | Country                | Country name                                                                                                                                                          |
| Zipcode          | Zip                    | Postal code                                                                                                                                                           |
 
## Syncing Orders to SAP Business One {#raise-orders}
For processing orders from Stock2Shop back into SAP Business One, we require access to the DI-Server. 
Please discuss this with your SAP consultant to ensure this is setup correctly.

By default, Stock2Shop raises orders to SAP Business One with the following order details:

| SAP Business One | Stock2Shop              | Description                                                                        |
| ---------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| CardCode         | default_customer_code   | The SAP B1 account code                                                            |
| ItemCode         | line_item.sku           | Unique code for a product syncing from the website.                                |
| Quantity         | line_item.qty           | Qty ordered by the customer                                                        |
| Price/Unit Price | line_item.price         | Price of the product on the website                                                |
| Warehousecode    | Warehouse Code          | Orders raised into this warehouse                                                  |


