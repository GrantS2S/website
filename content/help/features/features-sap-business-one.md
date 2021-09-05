---
title: "SAP Business One"
seoTitle: "SAP One Integration Features"
seoDescription: "Integrate your SAP One with supported Sales Channels/Webstores through Stock2Shop"
tags: ["feature", "sap-business-one"]
sources: ["sap-business-one"]
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
SAP One:

param_object_code
param_limit
param_currency
param_card_name

-->

<!-- create_order -->
### Create orders on SAP Business One
This allows Stock2Shop to create an order on SAP Business One when
an order has been received from your sales channel(s).

<!-- get_images -->
### Sync Product Images
When integrating with SAP Business One, we can pull Images associated with the relevant Products into Stock2shop.
These Images will be applied to the Products and will be added to the Webstore when the Product is synced through.

<!-- get_products -->
### Push Products
We can update your Product data from SAP Business One in 3 minute intervals. This allows us to have accurate data on your 
Webstore.

<!-- param_create_customer_enabled -->
### Create Customers
When a new customer places an Order, we can add them to your Customers if they do not exist yet.
This is useful for future Orders to be processed into the same account.

<!-- param_default_customer_code -->
### Default Customer Account
When an Order is placed and no Customer is applied, we can raised Orders against a Set Customer in your SAP Business One.
This can be useful if you have multiple Webstores integrated. 
You can have one Customer Account for Shopify cash sales for example.

<!-- param_shipping_code -->
### Shipping Line Item
We can raise Shipping Line Items against a set SKU in your SAP Business One for fixed pricing on Shipping and for raising 
Shipping against the relevant Stock code.

<!-- param_use_channel_order_code -->
### Use the same Order number as Invoice number in SAP Business One
This will let Stock2Shop create Invoices using the same reference number as the Order number on your website.

<!-- END OF APIFACT-->

<!-- param_warehouse_code -->
### Raise Orders into a specific Warehouse
Set which Warehouse to raise Orders against. When Orders are placed, Stock2Shop will know which Warehouse to send the Order to.

<!-- param_order_document_type -->
### Choose how Orders are Raised
We can send Orders to your SAP Business One in the following formats:

- Invoice
- Sales Order
- Quotation

<!-- param_customer_reference -->
### Customer References
Stock2Shop can pass additional Data on an Order as a Customer reference into your SAP Business One.

<!-- 
param_address
param_address2 
-->
### Set Addresses in SAP Business One
Set your 'Bill to' and 'Ship to' addresses when passing Orders to SAP Business One.

<!-- param_ignore_shipping -->
### Ignore Shipping
Stock2Shop can ignore the Shipping lines on an Order when sending to SAP Business One. 
This is useful for when you have a fulfillment service not part of your integration and Shipping does not need to be processed through Stock2Shop.

<!-- param_contact_source_customer -->
### Create Customer contacts in SAP
When raising Orders, Customers can be created in SAP Business One. Stock2Shop will use the Card Code and Contact details.

<!-- param_user_field_order_[x] -->
### Set Custom fields on Orders
Stock2Shop can set custom fields on an Order when sending to SAP Business One. This can be in the form of special instructions for example.

<!-- param_use_product_warehouse_code -->
### Use Product set Warehouses
Orders can be processed against the Warehouse that is set by default on a product being Ordered.