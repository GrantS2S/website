---
title: "Sales Channel Terminology"
seoTitle: "Understanding Sales Channel terminology relating to Stock2Shop"
seoDescription: "Dealing with many systems can get confusing. We have put together a guide for Stock2Shop Sales Channel terms."
type: guides
tags: ["channel"]
aliases:
    - 
---

Below is a list of terminology commonly used with Stock2Shop Integrations:

#### Channel
A Stock2Shop sales channel is an application or platform which can display your product and inventory data. Channels 
usually allow customers to put your products into a basket and checkout with them (order them). The information from the
sale is then returned to Stock2Shop as a sales order. Several processes can then be started, depending on your 
integration requirements and your unique workflow.

#### Source
Before adding products to your sales channel(s), the data assigned to the channel depends on the  
[source of data](/help/how-to/sources/index "...") you are using. If you have multiple 
sources/channels they can be configured accordingly. 

A possible scenario could be that you want to link multiple databases where you manage different suppliers to one 
website while your other sales channel only sells out of the one database.


#### Price Tier
In Stock2Shop, you can define what pricing group/tier a channel should use. The price lists are sent from your source 
through Stock2Shop or they can be manually imported into the Stock2Shop console. If you have multiple sales channels you
define a price list for each.

#### Warehousing
When setting up a channel to receive quantity updates from Stock2Shop we take it a step further with listing Stock 
availability based on Warehouses. Stock2Shop can get Warehouse info from your ERP and structure it differently on 
Stock2Shop, this means that we can combine the quantity values that sync into Stock2Shop and have them update to the 
relevant SKUs on the website/channel and/or we can assign specific warehouses to the individual sales channels.

#### API

“API” is an acronym for “Application Programming Interface”. An API establishes a common language/interface, which 
enables two software programs to communicate with each other. An API enables your own software program(s) you use to 
manage your ecommerce channels to send data to and from your Seller Portal account in an automated way.
The benefit of using an API is that it takes away the manual effort required to keep the data between your own software 
program(s) and the Seller Portal in sync - meaning less time and effort for you, as no human intervention is needed.

#### API Keys
The secure key and sercet or password the API creates for Stock2Shop to authenticate with when pushing updates to the sales channel

#### Inventory Management
Most websites have a functionality to display “In Stock” or “Out of Stock” labels when a product has qty or not, 
this is called inventory management and is optional when integrating with Stock2Shop.

#### Channel Rules

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

#### Sync Channel
The Sync Channel feature allows you to sync all products from the channel source to your existing sales channel. 
Following the [rules](/help/how-to/channels/channel_rules "...") of the channel, existing products are updated using the product ID's already saved and
new products are added if  product has never linked

#### Copy All
The Copy All feature removes all of the existing product links to your sales channel. 
The Sales channel has unique ID’s for your products and variants. 
When there is a mis-match with these IDs between Stock2Shop and your Sales channel, Stock2Shop can use the Copy All 
feature to remove the old ID’s in bulk.

The product can be added/linked by either using a setting to match to current skus codes that still exist on the website
or create brand new skus with new IDs.


