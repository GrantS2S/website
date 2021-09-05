---
title: "iQ Retail"
seoTitle: "iQ Retail Integration Features"
seoDescription: "Integrate your iQ Retail ERP with supported Sales Channels/Webstores through Stock2Shop"
tags: ["feature", "iq-retail"]
sources: ["iq-retail"]
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
iQ Retail:

param_iq_user_number
param_iq_user_password
param_cashier_number
param_currency
param_document_terms
param_delivery_method
param_delivery_note_number
param_till_number
param_document_includes_vat
param_internal_order_number
create_order
get_product
get_order
get_products
dll_path

-->

<!-- create_order -->
### Create orders on iQ Retail
This allows Stock2Shop to create an order on iQ Retail when
an order has been received from your sales channel(s).

<!-- get_images -->
### Sync Product Images
When integrating with iQ Retail, we can pull Images associated with the relevant Products into Stock2shop.
These Images will be applied to the Products and will be added to the Webstore when the Product is synced through.

<!-- get_products -->
### Push Products
We can update your Product data from iQ Retail in 3 minute intervals. This allows us to have accurate data on your 
Webstore.

<!-- param_create_customer_enabled -->
### Create Customers
When a new customer places an Order, we can add them to your Customers if they do not exist yet.
This is useful for future Orders to be processed into the same account.

<!-- param_default_customer_code -->
### Default Customer Account
When an Order is placed and no Customer is applied, we can raised Orders against a Set Customer in your iQ Retail.
This can be useful if you have multiple Webstores integrated. 
You can have one Customer Account for Shopify cash sales for example.

<!-- param_shipping_code -->
### Shipping Line Item
We can raise Shipping Line Items against a set SKU in your iQ Retail for fixed pricing on Shipping and for raising 
Shipping against the relevant Stock code.

<!-- param_use_channel_order_code -->
### Use the same Order number as Invoice number in iQ Retail
This will let Stock2Shop create Invoices using the same reference number as the Order number on your website.

<!-- END OF APIFACT-->

<!-- 
param_iq_company_number
param_iq_terminal_number
param_sales_representative_number
-->
### Raise Orders against relevant Reps
When sending Orders to your iQ Retail, we can raise them against the following criteria:

- Company number
- Terminal number
- Sales Rep Number
