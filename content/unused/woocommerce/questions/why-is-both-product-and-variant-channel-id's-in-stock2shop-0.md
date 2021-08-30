---
title: "Why is both product and variant channel IDs in Stock2Shop 0"
heading: "Why is both product and variant channel IDs in Stock2Shop 0?"
description: ""
image: ""
---

## Introduction

Why is this product got a zero value in both channel ID's?

This occurs when the channel settings in S2S are set to not create the product on WooCommerce, this is normally decided during the setup of your integration, meaning that our system must only update existing products on WooCommerce.

When a product is then made active to sync from your ERP/Accounting system and cannot find that sku in WooCommerce the system will assign the ID's of zero to prevent the product from creating queue blocking errors. See below screenshot of a product and the area of the product to check the ID's:

![woocommerce product variant channel ids](/uploads/woocommerce-product-variant-channel-ids-Stock2Shop-zero.png)

To understand more about the purpose of the ID's of the product in S2S click here

## Confirm workflow

Ensuring you understand your workflow and all persons involved will ensure that no products are un-linked and or cause [queue blocking errors](/understanding-your-queue), you confirm your workflow by referring to your Handover document, should you not have your handover doc, please request it from Support@stock2shop.com.

If your workflow is to first create the product in WooCommerce then mark the product as active from your ERP/Accounting system and this was perhaps missed for a few sku's see below solution to re-link the products accordingly.

Should your workflow be to mark the product as active to sync from your ERP/Accounting system and S2S to create the product in WooCommerce and then for you to enrich the product there after and you are still finding the above ID's then please contact Support@stock2shop.com for assistance as this may be a miss-configuration on the channel settings 

## How to resolve

Please follow the below steps to have the sku link to WooCommerce accordingly:

Please follow the below steps to have the sku link to WooCommerce accordingly:

1. Create sku in WooCommerce with all the relevant information - ensuring the sku's are the same across all platforms
2. Once the product has been created on Woo, open the product in S2S > CHANNELS tab
3. Click "Remove all" for the WooCommerce Channel that has the "0" 
4. Click SAVE in the GENERAL tab of the product
5. Click SAVE in the VARIANT tab of the product

Once the above steps have been taken you will see an "add_product" instruction in your queue, once complete you can reopen the product in S2S and confirm if the channel ID's are now populated accordingly

Should the above steps not relink the product please contact Supoort@stock2Shop.com for assistance

1. Create sku in WooCommerce with all the relevant information - ensuring the sku's are the same across all platforms
2. Once the product has been created on Woo, open the product in S2S > CHANNELS tab
3. Click "Remove all" for the WooCommerce Channel that has the "0" 
4. Click SAVE in the GENERAL tab of the product
5. Click SAVE in the VARIANT tab of the product

Once the above steps have been taken you will see an "add_product" instruction in your queue, once complete you can reopen the product in S2S and confirm if the channel ID's are now populated accordingly

Should the above steps not relink the product please contact Supoort@stock2Shop.com for assistance

