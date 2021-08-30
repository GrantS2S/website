---
title: "Channel Rules"
seoTitle: "Channel Rules"
seoDescription: "Stock2Shop Channel Rules explained"
aliases: "/documentation/key-concepts/channels-rules/"
toc: false
menu:
  docside:
    parent: Key Concepts
    name: Channels Rules
---

Channel Rules can determine which items sync to your channel / web store.
* * *

### What are channel rules?
Channel rules give you the ability to determine which products are displayed on a specific sales channel as well as when they should be displayed.

* * *

### Why are channel rules importnant?
This is extremely useful for managing which data will be available to your relevant Site.
For example, we can use a Rule to prevent a product from syncing to the selected channel if it does not contain any images, this prevents items showing up on your Website without an image associated.

To take it a step further, if you had 2 Webstores and only 1 ERP, you could filter which products go to which channel.
If you have a Webstore selling shoes, and another selling bags, you can apply a product type to the 
Items on the General Tab of the Products.

* * *

### Set up and Configuration?

In the Channel setup, you would apply a Rule to the Channel selling shoes that filters the ‘Product Type’
This can be done to either exclude an item from syncing, or ONLY sync that specific type of item.

Your channel rule for the Shoe Store would look as follows:
Product Field “product_type” Operator “equals” Value “Shoes”
Once you apply the Rule and re-sync the Channel, only items with the Type: ‘Shoes’ will sync through.
This same logic can be applied to many different fields for a robust integration.