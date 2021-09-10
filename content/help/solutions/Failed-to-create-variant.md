---
title: "Failed to create variant"
issue: "WooCommerce: Failed to create variant"
type: "solution"
seoTitle: "Failed to create variant : WooCommerce"
seoDescription: "An SKU within the product is failing to be created on the website, specifically WooCommerce."
source: ""
channel: ["woocommerce"]
fulfillment: ""
process: "products"
headless: true
---

<!-- Fix language -->

#### Error description
An SKU within the product is failing to be created on the WooCommerce website.

#### Error solution
Investigate what could be causing the product to to break when trying to add it to WooCommerce.

The following are reasons for this queue error:

-  Product was first created from S2S as as simple product but the product in S2S has been changed to a variable product (product with options) 
- Your variable options (If you create variable products from S2S) on S2S do not match your website options

You will need to change the WooCommerce product set up:
  - The product was initially created as a simple product but now needs to change to a variable product
  - You need to make sure options match S2S / ERP Accounting system

Alternatively you can remove the product from WooCommerce manually and recreate the whole variable product from S2S.

##### How to change the product in WooCommerce

- Log in to WooCommerce
- Click on Products > All Products
- Search for the SKU of the product that has already synced - view all SKUs on the product in S2S (ie the other variable product that was created as a simple product. If you have a small and a large size SKU within one product you may need to search for the small which was loaded first)
- Click into the product > Scroll to Product data > Change Simple product to Variable Product and click Update.
- Add variable SKU and options: Product data > Variations > Add variation > Go
- Add in the SKU info of the variation. SKU, qty, price, &  option (eg blue, eg small ( you should look at the SKU in S2S to see what option you have sent S2S))
- Update the product page if necessary (eg description , title, image)
- Reset the product in S2S: Products >View > Search > 3 dots > Edit > CHANNELS tab > Click REMOVE ALL on channel that needs resetting > Click Save on GENERAL and VARIANTS tab
- Skip queue error "Failed to create variant {SKU}" and any further "update" queue errors (that was already queued) as a new "ADD" queue item will be added at the back of the queue to relink

##### How to re add the product from S2S

- Delete the simple SKU manually of WooCommerce (make sure to empty trash)
- Log in to S2S
- Search for the SKU on S2S: Products >View > Search > 3 dots > Edit > CHANNELS tab > Click REMOVE ALL on channel that needs resetting > Click Save on GENERAL and VARIANTS tab
- Skip queue error "Failed to create variant {SKU}" and any further "update" queue errors (that was already queued) as a new "ADD" queue item will be added at the back of the queue to relink

##### Dealing with queue errors

You will need to skip the failed to create variant queue error and skip any further updates for this specific product if they were already in the queue (It can be multiple SKUs depending on the SKUs connected to the product).

A new "Add" to WooCommerce queue item will appear at the back of the queue to re add the product to the website.