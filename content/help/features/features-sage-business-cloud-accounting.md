---
title: "Sage Business Cloud Accounting"
seoTitle: "Sage Business Cloud Accounting Integration Features"
seoDescription: "Integrate your Sage Business Cloud Accounting with supported Sales Channels/Webstores through Stock2Shop"
tags: ["feature", "sage-business-cloud-accounting"]
sources: ["sage-business-cloud-accounting"]
---

<!-- ***NOT IN USE***

param_due_date_days
param_get_products_filter
get_products_limit
param_get_images_enabled
get_images_limit
company_id
param_default_shipping_code
param_invoice_body
param_invoice_subject
param_sales_rep_id
param_tax_code
param_tax_exempt_code
param_product_field_map
password
username
order_map
sync_mode
customer_map
-->

<!-- cron_get_products_schedule -->
### Update Stock2Shop hourly with Product data changes
When changes are made to your Dolfin system, we can set an hourly time to check for Product updates.
This can be set for which ever minute on the hour that best suits your workflow.

<!-- company_id -->
### Sage Business Cloud Accounting Company ID
We can Sync data from specific Companies listed on your Sage Business Cloud Accounting. This allows you to 
have separate integrations for each Company on your system. 

<!-- create_order_enabled -->
### Create orders on Sage Business Cloud Accounting
This allows Stock2Shop to create an order on Sage Business Cloud Accounting when
an order has been received from your sales channel(s).

<!-- customer_reference_field -->
### Customer Reference Field
We can add a Customer reference to the Order if requested. This will be added to the field required.

<!-- order_by_sku -->
### Order by SKU
Stock2Shop can query your Sage Business Cloud Accounting products when a Sku on an Order is not found in your Console.

<!-- param_negative_stock_disabled -->
### Allow only Orders against positive stock balances on Sage Business Cloud Accounting
Orders will need to be checked against stock values in Sage Business Cloud Accounting, if there is not enough Stock, 
the Order will fail. 

<!-- param_create_customer_enabled -->
### Create a customer in Sage Business Cloud Accounting when an order is created
This allows Stock2shop to add new customers to Sage Business Cloud Accounting when no default customer code is given

<!-- param_quote_enabled -->
### Create either Quotes or Invoices when sending Orders back to Sage Business Cloud Accounting
When Orders are passed to your Accounting system, we can either raise those as Invoices or as Quotes. 
This will depend on your internal workflow and preferences.

<!-- param_channel_order_code_enabled -->
### Use the same Order number as Invoice number in Sage Business Cloud Accounting
This will let Stock2Shop create Invoices using the same reference number as the Order number on your website.

<!-- param_default_customer_code -->
### Default Customer Account
Raise all orders against a set Customer Account if no customer data is sent with the Order from your website.

<!-- param_send_invoice_enabled -->
### Send Customer Invoice
Allow Stock2Shop to send Customer Invoices straight away once raised into Sage Business Cloud Accounting.

<!-- order_created_date_now -->
### Order Creation Date
Set the Order creation date to when it was added into Stock2Shop.

<!-- queue_fetch_images -->
### Sync Images to Stock2Shop
Allow Stock2Shop to process images with Product data from Sage Business Cloud Accounting.

<!-- param_use_customer_address -->
### Use the Saved Customer address
We can set Orders to use the Customer address that appears in Sage Business Cloud Accounting 
regardless of what is placed on the Order

<!-- param_product_field_map -->
### Sync specific Product data 
All Product data sent from Sage Business Cloud Accounting can be filtered as needed.
You might not require a certain amount of details to be sent through with the Product data.
In these cases, we can synchronize only the required data into Stock2Shop to then push up to your Webstore.
