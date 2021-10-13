---
title: "Channel Rules"
seoTitle: "Understanding Stock2Shop sales channel rules"
seoDescription: "Understanding Stock2Shop sales channel rules"
type: guides
tags: ["channel"]
aliases:
    - 
---

Channel Rules can determine which items sync to your channel/web store.
This is extremely useful for managing which data will be available to your relevant Site.
For example, we can use a Rule to prevent a product from syncing to the selected channel if it does not contain any 
images, this prevents items showing up on your Website without an image associated.

To take it a step further, if you had 2 Webstores and only 1 ERP, you could filter which products go to which channel.
If you have a Webstore selling shoes, and another selling bags, you can apply a product type to the 
Items on the General Tab of the Products.
In the Channel setup, you would apply a Rule to the Channel selling shoes that filters the ‘Product Type’
This can be done to either exclude an item from syncing, or ONLY sync that specific type of item.

Your channel rule for the Shoe Store would look as follows:
Product Field “product_type” Operator “equals” Value “Shoes”
Once you apply the Rule and re-sync the Channel, only items with the Type: ‘Shoes’ will sync through.
This same logic can be applied to many different fields for a robust integration.
