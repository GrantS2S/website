---
title: "Syspro"
seoTitle: "Syspro Integration Features"
seoDescription: "Integrate your Syspro with supported Sales Channels/Webstores through Stock2Shop"
tags: ["feature", "syspro"]
sources: ["syspro"]
---

<!-- ***NOT IN USE***

Apifact:

get_images_limit
get_order
get_product
get_products_limit
param_ignore_shipping_warehouse_code
param_skip_image_hash
param_test
param_use_customer_address
param_user_field_customer_
queue_fetch_images
tunnel_host
tunnel_password
tunnel_username

---------
Syspro:

param_company_password
param_currency
param_operator
param_operator_password

-->


<!-- create_order -->
### Create orders on Syspro
This allows Stock2Shop to create an order on Syspro when
an order has been received from your sales channel(s).

<!-- get_images -->
### Sync Product Images
When integrating with Syspro, we can pull Images associated with the relevant Products into Stock2shop.
These Images will be applied to the Products and will be added to the Webstore when the Product is synced through.

<!-- get_products -->
### Push Products
We can update your Product data from Syspro in 3 minute intervals. This allows us to have accurate data on your 
Webstore.

<!-- param_create_customer_enabled -->
### Create Customers
When a new customer places an Order, we can add them to your Customers if they do not exist yet.
This is useful for future Orders to be processed into the same account.

<!-- param_default_customer_code -->
### Default Customer Account
When an Order is placed and no Customer is applied, we can raised Orders against a Set Customer in your Syspro.
This can be useful if you have multiple Webstores integrated. 
You can have one Customer Account for Shopify cash sales for example.

<!-- param_shipping_code -->
### Shipping Line Item
We can raise Shipping Line Items against a set SKU in your Syspro for fixed pricing on Shipping and for raising 
Shipping against the relevant Stock code.

<!-- param_use_channel_order_code -->
### Use the same Order number as Invoice number in Syspro
This will let Stock2Shop create Invoices using the same reference number as the Order number on your website.

<!-- END OF APIFACT-->

<!-- param_warehouse_code -->
### Raise Orders into a specific Warehouse
Set which Warehouse to raise Orders against. When Orders are placed, Stock2Shop will know which Warehouse to send the Order to.

<!--
param_company_id
param_sales_rep_id 
-->
### Raise Orders against a Sales Rep and Company
Set which Sales Rep and Company Orders must get raised against in Syspro when processing your Webstore sales through Stock2Shop.

<!-- param_order_type -->
### Document type for Orders
Set what type of document must be created when raising Orders to Syspro.
We have the following options:

- (A) Add a Sales Order
- (C) Change an Existing Sales Order
- (D) Cancel the Sales Order

<!--
param_default_tax_code
param_default_tax_code_exempt
-->
### Tax Codes
Set your Syspro Tax codes for Taxed and Tax-exempt Orders. Stock2Shop will process Orders to Syspro using these codes.

<!-- param_currency -->
### Set which currency to use on the Order
Stock2Shop can allocate the required currency to be applied to the Order when sending to Syspro.
