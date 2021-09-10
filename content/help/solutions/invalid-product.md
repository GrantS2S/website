---
title: "Invalid Product"
issue: "Shopify: Invalid Product"
type: "solution"
seoTitle: "Shopify - Invalid Product"
seoDescription: "The product on Shopify is broken and cannot be saved, therefore when S2S tries to run an instruction on the product it blocks the queue"
source: ""
channel: "shopify"
fulfillment: ""
process: "products"
headless: true
---

#### Error description
The "Invalid Product" error occurs on any instruction ie: add_product | add_variant | add_image | update_product | update_variant

#### Error solution
The product on Shopify is broken and cannot be updated. When S2S tries to run an instruction on the product,  it blocks the queue with the Invalid Product error. 

How to confirm the product is an invalid product

- Click on the three dots of the queue error > view product
- Copy the SKU that is blocking the queue
- Open your Shopify backend and search for the copied SKU and confirm the SKU exists
- Make a small change to the product in the console and click *Save*

If the product saves then please let S2S support know that this is the case and provide them with logins to the site for them to investigate further.

If the product does not save and displays an error, follow the below to resolve the error.

##### How to resolve an Invalid product

- Delete the product from Shopify
- If your workflow is to first create the product on Shopify then create the product again (If S2S creates the product's for you then skip this step)
- Open the S2S console and click on the three dots of the queue error > *View Product*
- Open the *Channels* tab of the product
- Click the *Remove All* button on the channel affected and confirm on the popup
- Open the *General* tab and click save
- Open the *Variants* tab and click save on each variant
- Return to the queue and click on the three dots of the queue error > *Skip*

The product will be added to the back of the queue to be created/updated. 

Note: If there were already updates in the queue for that product they may fail and you should skip those product updates until the new "Add" queue item is issued for the product.

