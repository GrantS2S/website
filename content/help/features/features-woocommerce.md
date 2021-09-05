---
title: "Woocommerce"
seoTitle: "Woocommerce Integration Features"
seoDescription: "Integrate Woocommerce with your ERP/Accounting system through Stock2Shop"
tags: ["feature", "woocommerce"]
channels: ["woocommerce"]
---

<!-- ***NOT IN USE***

consumer_key
consumer_secret
api_url
create_image_enabled
delete_image_enabled
category_parent_id
authentication
hmac_shared_secret
group_duplicate_order_items
order_shipping_method_name
order_from_date
bundles

-->

<!-- add_order_status -->
### Choose when Orders process to your ERP
Orders can be sent to your ERP based on the last status sent from Woocommerce. Once your Order has a status of 
'Processing' it means the payment has completed and the Order is now complete, we use this status by default. 

<!-- product_map -->
### Sync specific Product data 
All Product data sent from Stock2Shop can be filtered as needed.
You might not require a certain amount of details to be sent through with the Product data.
In these cases, we can synchronize only the required data into Stock2Shop to then push up to your Webstore.

<!-- default_fulfillmentservice_id -->
### Fulfill Orders automatically
Orders placed on Woocommerce with Shipping options selected can be sent to supported fulfillment services once the Order 
is sent to your ERP.

<!--
order_use_system_price
order_use_system_price_tier
order_use_system_price_tax
-->
### Process Orders using ERP prices
When Orders are sent to Stock2Shop, you can have the option of using the pricing that syncs from your ERP if the pricing 
differs on your Woocommerce store.
This can be set to a specific Price Tier if available. 

<!--
create_product_enabled
create_product_status
delete_product_enabled
-->
### Create Products on Woocommerce
When linking to Woocommerce, we will link to any SKUs that match what SKU codes exist in Stock2Shop.
Any SKUs that do not appear on Woocommerce can be created by Stock2Shop and set to a status of you choice.
Stock2Shop can remove SKUs from Woocommerce if needed. 

<!--
manage_category_enabled
category_parent_id
-->
### Link Products to existing Categories
Woocommerce categories can be linked to and created through Stock2Shop. The Category details can come from your ERP or 
can be added in Stock2Shop.Based on the Parent Id of Woocommerce categories

<!-- queue_fulfill_order -->
### Fixed Fulfillment Orders
When Orders come from Woocommerce to Stock2Shop, we can fulfill all orders sent, or certain Orders based on Shipping 
options selected on Woocommerce.

<!-- inventory_management -->
### Track Stock Levels
Stock2Shop can track stock quantities on Woocommerce and prevent Overselling of Products. Product quantity values will 
be sent from your ERP to Woocommerce and quantity deductions will process from your ERP after Orders are raised. 

<!-- order_code_field -->
### Order reference codes
When sending Orders to your ERP, Stock2Shop can reference the Order number on Woocommerce or the Order ID. 
We use the Order Number by default.

<!-- order_code_prefix -->
### Prefix Orders from each channel
Have Orders sent to your ERP with reference to the Webstore they originate from. This is useful for when you have 
multiple Webstores linked to Stock2Shop.

<!-- order_link_items_on_sku -->
### Link items from Orders
Orders containing items that do not appear on Stock2Shop can be created and linked automatically in order to process 
the Order sent from Woocommerce

<!-- order_from_date -->
### Order From Date
Set the date when Orders must be processed into your ERP. THis is useful for integrations that are new and not fully live.

<!-- bundles -->
### Link to Woocommerce Bundles
Stock2Shop supports the use of Bundles on Woocommerce. The bundle items will need to be specified before they are 
buyable on Woocommerce.