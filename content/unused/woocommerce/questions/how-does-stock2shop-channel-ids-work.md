---
title: "How does Stock2Shop channel ids work?"
description: ""
image: ""
---

## Introduction

This article is a breakdown and explanation as to how the S2S system finds, saves and uses the channels product ID's.

Any data storage system ie, WooCommerce, will have an internal ID to store data against and possibly use as a reference for other systems within the platform ie, WooCommerce API.

The S2S system when adding a product(this can be creating or linking to) to WooCommerce, will search for the product by sku code on WooCommerce, find the WooCommerce product ID and then save that ID in the S2S system in order to update the product at a later stage more efficiently.

## Navigating/reading Channel ID's

To find the product ID's in WooCommerce:

1. Sign onto the Admin of your website
2. On the left panel navigate to "Products"
3. Search for a sku that you will test with
4. Find ID
    1. Parent/Simple product ID - Before clicking into the product you have searched for, hover over the product and the ID will appear
    2. Variable sku's ID's - Once you have the parent ID, click on the product to open > Scroll to "Product Data" > Click "Variations" > for each variation you will see a "#" following that will be the ID of the variant

{{< figure src="/uploads/woocommerce-how-does-stock2shop-channel-ids-work-1.png" caption="4.1" >}}
{{< figure src="/uploads/woocommerce-how-does-stock2shop-channel-ids-work-2.png" caption="4.2" >}}

To find the product ID's in S2S:

1. Sign into the S2S console
2. Hover over "Products" > Click "View"
3. Search for a sku that you will test with
4. Click on the three dots on the right hand side of the sku > Click "Edit"
5. Click on the "CHANNELS" tab
6. View the "Channel Product Code" and "Channel Variant Code" of the Channel/Website in question - These are the ID's recieved from WooCommerce

![stock2shop channel ids](/uploads/woocommerce-how-does-stock2shop-channel-ids-work-3.png)
![stock2shop channel ids](/uploads/woocommerce-how-does-stock2shop-channel-ids-work-4.png)

## Key Points

When syncing to WooCommerce there are a range of workflows and processes that a client has setup, depending on the workflow the way the ID's are stored can vary slightly, for example if you have simple products in S2S and variable products on Woo the "Channel Product Code" in S2S would be the Variations ID from WooCommerce and the "Channel Variant Code" would be zero.

Should you find that your product are not linked accordingly or appear to be incorrect please see below documentation:

[WooCommerce Question: How do I re-add/re-link product to WooCommerce?](/how-do-i-re-add-re-link-product-to-woocommerce-)