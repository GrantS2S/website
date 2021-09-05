---
title: "Omni Accounts"
seoTitle: "Omni Accounts Integration Features"
seoDescription: "Integrate your Omni Accounts with supported Sales Channels/Webstores through Stock2Shop"
tags: ["feature", "omni-accounts"]
sources: ["omni-accounts"]
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
Omni Accounts:

create_order
get_order
get_product
get_products
get_products_limit

-->

<!-- create_order -->
### Create orders on Omni Accounts
This allows Stock2Shop to create an order on Omni Accounts when
an order has been received from your sales channel(s).

<!-- get_images -->
### Sync Product Images
When integrating with Omni Accounts, we can pull Images associated with the relevant Products into Stock2shop.
These Images will be applied to the Products and will be added to the Webstore when the Product is synced through.

<!-- get_products -->
### Push Products
We can update your Product data from Omni Accounts in 3 minute intervals. This allows us to have accurate data on your 
Webstore.

<!-- param_create_customer_enabled -->
### Create Customers
When a new customer places an Order, we can add them to your Customers if they do not exist yet.
This is useful for future Orders to be processed into the same account.

<!-- param_default_customer_code -->
### Default Customer Account
When an Order is placed and no Customer is applied, we can raised Orders against a Set Customer in your Omni Accounts.
This can be useful if you have multiple Webstores integrated. 
You can have one Customer Account for Shopify cash sales for example.

<!-- param_shipping_code -->
### Shipping Line Item
We can raise Shipping Line Items against a set SKU in your Omni Accounts for fixed pricing on Shipping and for raising 
Shipping against the relevant Stock code.

<!-- param_use_channel_order_code -->
### Use the same Order number as Invoice number in Omni Accounts
This will let Stock2Shop create Invoices using the same reference number as the Order number on your website.

<!-- END OF APIFACT-->

<!--
param_default_tax_code
param_default_tax_code_exempt
param_default_tax_code_shipping
-->
### Tax Codes
Use your Omni Accounts Tax Codes for Orders that have Tax applied. Can be done for both Taxed and Tax-exempt Orders 
as well as Shipping lines.

<!-- param_warehouse_code -->
### Raise Orders against specific Warehouses
Using your Warehouse codes in Omni Accounts, we can process Orders against a set Warehouse when you make sales through your Webstore.

<!-- param_rep_code -->
### Assign Sales Reps to Orders placed
Set the Sales Rep that Orders get processed against. This allows you to track the commission for the Sales.  
