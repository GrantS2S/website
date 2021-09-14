---
title: "Undefined property"
issue: "WooCommerce: Undefined Property"
type: "solution"
seoTitle: "WooCommerce: Undefined Property"
seoDescription: "he product on WooCommerce has been configured incorrectly and our system is not able to update the product."
source: ""
channel: "woocommerce"
fulfillment: ""
process: "products"
heasdless: true
---

#### Error description
The product on WooCommerce has been configured incorrectly and our system is not able to update the product.

#### Error solution
This directly relates to how a Variable Product is configured In WooCommerce.
https://docs.woocommerce.com/document/variable-product/

When creating a variable product on WooCommerce the SKU, as per your accounting system, should be on the variations. The top level inventory tab should either contain a "Grouping code" or remain blank.

If you are creating a variable product because you have a product that is a single SKU but has different  "Custom Options" or "Add-Ons" (ie Adding a number to a sports Jersey) you should still be setting up the product as a simple product (Single SKU) and using a plugin to create Custom options for that product, this way there is no Inventory assigned to the options. The below links are examples of plugins to add custom options to a simple product:

https://woocommerce.com/products/product-add-ons/   
https://wordpress.org/plugins/product-options-for-woocommerce/

##### How to correct the SKU and relink to S2S

The error can be resolved by correcting the SKU's on the product in WooCommerce as per the above and then having S2S relink to the product using the following steps:

- Correct SKU's on the product in WooCommerce
- Login to S2S Console *> Products > View* and search for said SKU
- Navigate to the *Channels* tab of the product
- Click *REMOVE ALL* - this clears the current channel ID's of the product in order to link to the correct product/variation
- Navigate to *General* Tab > Click Save
- Navigate to *Variants* Tab > Click Save for each variation
- Return to the queue error *> QUEUE > VIEW*
- Skip queue error

Note if there were already further updates in the queue for the product then they must be skipped until the *ADD* instructions is processed to relink the product. The *ADD* instruction is added to the back of the queue.


