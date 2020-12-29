---
title: "No product found with the ID equal to"
heading: "update_product: No product found with the ID equal to [ID] 'woocommerce_api_no_product_found'"
dtype: "solution"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["woocommerce"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-29T09:26:00+02:00
---
<!-- Action: Update product -->

#### Error description
A product update sent to WooCommerce has failed as the product was not found on the site by it's internal ID.

#### Error solution
Products are linked  from Stock2Shop to WooCommerce using the WooCommerce internal id of the product and variant.
When a product is not linked correctly,  no updates will happened on the website. 

The link can be incorrect if any the following has occurred:

1. When the product initially tried to sync to the website, there was a queue error and the "Add" instruction was skipped without resolving the issue.
2. The product has been removed / changed on WooCommerce causing the ids to change after S2S created or already linked to the product.

You will need to resend the product to the website either by creating the product again or auto linking to a product that is already on the website.

##### Removing the product off your website and adding it from S2S:

1. Log in to S2S > Queue > Failed > Click 3 dots on failed item > View product to see which product you need to fix.
2. View the skus on the variant tab
3. Login to WooCommerce backend > Products > Search for the skus that you just found in S2S with the error > delete all those skus off WooCommerce if you find any.
4. Go into the product in S2S and view channels tab. Queue Error > 3 dots > View Product > Channels > click REMOVE ALL on WooCommerce links.
5. Save on the General Tab 
6. Skip any and all updates (failed) to do with product that was already in the queue. A new 'ADD' to WooCommerce queue item will be added at the back of the queue.

##### Relink to existing product on website

1. Log in to S2S > Queue > Failed > Click 3 dots on failed item > View product to see which product you need to fix.
2. View the skus on the variant tab
3. Log in to WooCommerce backend > Products > Search the skus that you just found in S2S with the error > Make sure the product is set up correctly as a variable/simple product. If the set up is not the same as S2S and your workflow is to create variable products from S2S, then you should rather delete the product and read the steps  above
4. Go into the product in S2S and view channels tab. Queue Error > 3 dots > View Product > Channels > click REMOVE ALL on WooCommerce links.
5. Save on the General Tab and Variant Tab
6. Skip any and all updates (failed) to do with product that was already in the queue. A new 'ADD' to WooCommerce queue item will be added at the back of the queue.