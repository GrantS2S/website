---
title: "How does Stock2Shop's channel ids work"
heading: "how does Stock2Shop's channel ids work?"
description: ""
image: ""
---

## Introduction

This article is a breakdown and explanation as to how the S2S system finds, saves and uses the channels product ids.

Any data storage system ie, Shopify, will have an internal ID to store data against and possibly use as a reference for other systems within the platform ie, Shopify API.

The S2S system, when adding a product (This can be creating or linking) to a Shopify product, will search for the product by SKU code on Shopify, find the Shopify product ID and then save that ID in the S2S system in order to update the product at a later stage more efficiently.

## Navigating/reading Channel IDs

To find the product ids in Shopify:

1. Sign onto the Admin of your website
2. On the left panel navigate to "Products"
3. Search for a SKU that you will test with
4. Click on the product to open the edit page
5. If the product is a simple product skip the next step
6. If the product is a variable product > scroll down to the variants and click "EDIT" on the sku you will test with
7. Once you have the product editing page open on the sku, shift your attention to the URL
8. Write down the Products ID and the Variants ID (If the product is a variable)

![how does stock2shop channel ids work](/uploads/shopify-how-does-stock2shop-channel-ids-work-1.png)

To find the product IDs in S2S:

1. Sign in to the S2S console
2. Hover over "Products" > Click "View"
3. Search for the SKU that you are testing with
4. Click on the three dots on the right-hand side of the SKU > Click "Edit"
5. Click on the "CHANNELS" tab
6. View the "Channel Product Code" and "Channel Variant Code" of the Channel/Website in question - These are the ID's received from Shopify

![how does stock2shop channel ids work](/uploads/shopify-how-does-stock2shop-channel-ids-work-2.png)
![how does stock2shop channel ids work](/uploads/shopify-how-does-stock2shop-channel-ids-work-3.png)

Notice that the IDs that are written down from the URL of your Shopify site are the same as the IDs saved within the S2S console.

## Key Points

When syncing to Shopify there are a range of workflows and processes that a client has set up, for example, the SKUs are created on Shopify first before updating from Stock2Shop/ Accounting System If Stock2Shop has not been set up to Auto Sync then the ids would be incorrect and updates would be sent to the incorrect product.

Should you find that your product are not linked accordingly or appear to be incorrect please see below documentation:

[How do I re-link my products on Shopify?](https://stock2shop.freshdesk.com/support/solutions/articles/19000107169-shopify-question-how-to-re-link-your-products)
