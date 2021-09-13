---
title: "No product found to update in channel"
issue: "No Product found to update in channel"
type: "solution"
seoTitle: "No product found to update in channel"
seoDecription: "When the system is trying to update a product on the website, the product is not found."
source:
channel: magento-1, magento21, shopify
fulfillment: 
process: products
headless: true
---

#### Error description
When the system is trying to update a product on the website, the product is not found.  Stock2Shop does not have the correct channel links to the product on the website. The system needs a channel product code and a channel variant code to be able to update the product. The product would also need to exist on the website.


#### Error solution

You will need to resend the product to the website by either creating the product again or auto-linking the product to a product that is already on the website.


##### Removing the product off your website and re-adding it from Stock2Shop

- Log in to Stock2Shop *> Queue > Failed > Click 3 dots on failed item > View product* to see which product you need to fix.
- Get all the SKUs from the variant tab
- Log in to channel website backend *> Products > Search* the SKUs or Source Product Code that you just found in Stock2Shop with the error > Delete all those SKUs off the website.
- Go into the product in S2S and view channels tab. Queue Error *> 3 dots > View Product > Channels *> click REMOVE ALL on specific channel links.
- Save on the General Tab
- Skip any and all updates (failed) to do with the product that was already in the queue. A new 'ADD' to channel queue item will be added at the back of the queue.


##### You don't want to remove the product from the website but need to relink the product from Stock2Shop

Specific channel instructions: 

**Shopify**

- Log in to Stock2Shop > Queue > Failed > Click 3 dots on failed item > View product to see which product you need to fix.
- Get all SKUs from the variant tab
- Log in to Shopify backend > Products > Search the SKUs that you just found in Stock2Shop with the error > Make sure the product is set up correctly as a variable product with the same SKUs connected to the product in Stock2Shop(If you have products with variants/options). If the product is only 1 SKU then make sure it's a simple product on Shopify with the exact same SKU that is in Stock2Shop. IF the Product is set up incorrectly then you should rather delete the product and refer to step 4.1.
- Login to Stock2Shop > Settings > Manage channels > <Client Name> Shopify > 3 dots  > edit
- Search for 'auto_sync' under Channel Meta Data. Make sure it is set to true and click save. If you cant find it > "ADD META DATA' Key = auto_sync Value = true and then save.
- Go into the product in S2S and view channels tab. Queue Error > 3 dots > View Product > Channels > click REMOVE ALL on Shopify links.
- Save on the General Tab
- Skip any and all updates (failed) to do with the product that was already in the queue. A new 'ADD' to Magento queue item will be added at the back of the queue.
- Login to Stock2Shop > Settings > Manage channels > <Client Name> Magento > 3 dots  > edit > Change auto_sync back to false and save

**Magento 1**

- Log in to S2S > Queue > Failed > Click 3 dots on failed item > View product to see which product you need to fix.
- Copy the source product code from general tab and the SKUs from the variants tab
- Under Channel settings, check if the parameter "auto_sync" is set to TRUE, if not set it to true
- Log in to Magento backend > Products > Search the SKUs that you just found in S2S with the error > Make sure the product is set up correctly as a variable/simple product. If the set up is not the same as S2S and your workflow is to create variable products from S2S, then you should rather delete the product and read the steps  above
- Go into the product in S2S and view channels tab. Queue Error > 3 dots > View Product > Channels > click REMOVE ALL on Magento links.
- Save on the General Tab and Variant Tab
- Skip any and all updates (failed) to do with product that was already in the queue. A new 'ADD' to Magento queue item will be added at the back of the queue.
- Once the queue has completed, open channel settings again, set the "auto_sync" back to what it was (leave as true if thats what was set already).

##### Dealing with queue errors

Once you have updated and saved the product(s) in question, you will need to skip all the 'update' failed queue errors to do with the product that was fixed, as there could have been old updates already in the queue that will all fail. The updated item will be added to the back of the queue which will re-add and link the product with your website.