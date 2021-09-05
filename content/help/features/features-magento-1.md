---
title: "Magento 1.x"
seoTitle: "Magento 1.x Integration Features"
seoDescription: "Integrate your Magento 1.x Store with supported ERPs/Accounting Systems through Stock2Shop"
tags: ["feature", "magento-1"]
channels: ["magento-1"]
---

<!-- 

queue_fulfill_order
qty_limit_upper
soap_password
soap_url
soap_username
hmac_shared_secret
group_duplicate_order_items

-->

<!-- attribute_set -->
### Attribute Sets
Sync to specific attribute sets on Magento. This is useful for managing the attributes controlled by Stock2Shop.

<!-- root_category -->
### Root Categories
Set the root category for the store you will be integrating with.  
(See [Categories](https://docs.magento.com/user-guide/catalog/category-create.html))

<!-- send_customer_email -->
### Email Customers
Send customers an email when Orders are processed.

<!-- store_view -->
### Store view
Assign the relevant store view for you integration. Store views are most commonly used for different languages or regions.
(See [Store Views](https://docs.magento.com/user-guide/stores/websites-stores-views.html))

<!-- website_ids -->
### Website ID association
Select which Website ID Stock2Shop must integrate with. This can be useful if you have one data source or ERP but want to sell on multiple Webstores.

<!-- default_fulfillmentservice_id -->
### Automatically Fulfill Orders
If you have Parcel Ninja or OTD integrated with your Stock2Shop setup, Orders that are to be delivered will automatically
be sent to the fulfillment service associated with your Magento integration.

<!-- check_order_items_linked -->
### Ordered product confirmation
When Orders are sent from your Webstore, we can have Stock2Shop check that the items contained in your Order also appear 
in the Stock2Shop system before sending it to your ERP. This can be used as a measure to confirm stock is tracked.
An Email will be sent from Stock2Shop to the relevant people if this occurs.