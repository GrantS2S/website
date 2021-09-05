---
title: "Sage 100 Evolution"
seoTitle: " Integration Features"
seoDescription: "Integrate your Sage 100 Evolution with supported Sales Channels/Webstores through Stock2Shop"
tags: ["feature", "sage-100-evolution"]
sources: ["sage-100-evolution"]
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
Evolution:

param_complete_credit_note
param_complete_invoice
param_use_credit_note_discount
param_use_channel_order_code (duplicate from Apifact)
param_ignore_warehouse_code
create_order
get_order
get_product
get_products
get_products_limit
param_contact_source_customer
param_use_customer_address
-->


<!-- create_order -->
### Create orders on Sage Evolution
This allows Stock2Shop to create an order on Sage Evolution when
an order has been received from your sales channel(s).

<!-- get_images -->
### Sync Product Images
When integrating with Sage Evolution, we can pull Images associated with the relevant Products into Stock2shop.
These Images will be applied to the Products and will be added to the Webstore when the Product is synced through.

<!-- get_products -->
### Push Products
We can update your Product data from Sage Evolution in 3 minute intervals. This allows us to have accurate data on your 
Webstore.

<!-- param_create_customer_enabled -->
### Create Customers
When a new customer places an Order, we can add them to your Customers if they do not exist yet.
This is useful for future Orders to be processed into the same account.

<!-- param_default_customer_code -->
### Default Customer Account
When an Order is placed and no Customer is applied, we can raised Orders against a Set Customer in your Sage Evolution.
This can be useful if you have multiple Webstores integrated. 
You can have one Customer Account for Shopify cash sales for example.

<!-- param_shipping_code -->
### Shipping Line Item
We can raise Shipping Line Items against a set SKU in your Sage Evolution for fixed pricing on Shipping and for raising 
Shipping against the relevant Stock code.

<!-- param_use_channel_order_code -->
### Use the same Order number as Invoice number in Sage Evolution
This will let Stock2Shop create Invoices using the same reference number as the Order number on your website.

<!-- END OF APIFACT-->

<!-- param_warehouse_code -->
### Raise Orders into a specific Warehouse
Set which Warehouse to raise Orders against. When Orders are placed, Stock2Shop will know which Warehouse to send the Order to.

<!-- param_branch_code -->
### Raise Orders against a specific Branch
When processing Orders Stock2Shop can raise Orders against a required Branch. 
This is useful if you have multiple Branches assigned to your Sage Evolution.

<!--
param_default_tax_code
param_default_tax_code_exempt
param_default_tax_code_shipping
-->
### Tax Codes for Orders
Set which Tax codes to apply when Raising Orders that have:

- Taxed items
- Tax-exempt items
- Shipping Lines (that need tax applied)

<!-- 
param_new_customer_representative_code
param_order_representative_code
param_order_project_code
param_new_customer_area_code
param_new_customer_group_code
param_new_customer_price_list_code
 -->
### Sales Rep codes for new Orders and new Customers
Set which Sales Rep Code is applied to the Orders raised in Sage Evolution or if new Customers are created.
When raising Orders, you can set the Project Code, if creating new customers, you can set the following:

- Customer Area Code
- Customer Group Code
- Customer Price list

<!--
param_process_invoice
param_process_credit_note
-->
### Order Document Type
Set the type of Document to create when sending Orders to Sage Evolution. Either as an Invoice or Credit Note.

<!-- param_negative_stock_disabled -->
### Stock Level Tracking
Choose whether stock quantities can go into negative values on your Sage Evolution. 
If set to not allow negative stock, Orders will not process into Sage Evolution if there is not stock available.

<!-- param_external_order_no -->
### Use Webstore Order number
Set the Order in Sage Evolution to be the same Order number as the Webstore. 
This is useful to cross referencing Order details between platforms

<!--
param_gl_discount_code
param_gl_shipping_code
param_gl_shipping_discount_code
-->
### General Ledger Account Codes
Set the GL Account Codes for:

- Discounts
- Shipping Lines
- Shipping Discounts

<!-- param_order_document_type -->
### Order Document Type
Set whether Orders are raised as 'Quotations' or 'Sales Orders' in Sage Evolution.

<!-- param_due_date -->
### Define the Due date for Orders
Set the Due Date for your Orders in Sage Evolution. This will apply when Stock2Shop sends Orders through. 

<!-- param_delivery_date -->
### Order Delivery Date
Set the Order Delivery date when creating Orders. Set using  ISO 8601 formatting.

<!-- param_currency_code -->
### Currency Code for Orders
Set the currency code to be used when raising Orders. (USD, EUR, ZAR etc)

<!-- param_ignore_shipping -->
### Ignore Shipping
Stock2Shop can ignore the Shipping lines on an Order when sending to SAP Business One. 
This is useful for when you have a fulfillment service not part of your integration and Shipping does not need to be processed through Stock2Shop.

<!-- param_user_field_order_[x] -->
### Set Custom fields on Orders
Stock2Shop can set custom fields on an Order when sending to SAP Business One. This can be in the form of special instructions for example.

<!-- param_delivery_method -->
### Set delivery method for Orders
Set which delivery method to us from your Sage Evolution settings. Orders will not process if the selected delivery method is not on Sage Evolution. 

<!-- param_time_zone -->
### Time Zone for Orders
Set which Time Zone is applied to Orders that are raised by Stock2Shop. 

