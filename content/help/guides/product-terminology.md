---
title: "Product Terminology"
seoTitle: "Understanding product terminology relating to Stock2Shop"
seoDescription: "Dealing with many systems can get confusing. We have put together a guide for Stock2Shop products terms."
seoKeyword: ["Product Terminology"]
type: guides
tags: ["product"]
aliases:
    - 
---

Below is a list of terminology commonly used with Stock2Shop Products:

#### Inventory Management
Most websites have functionality to display “In Stock” or “Out of Stock” labels when a product has available qty or not, 
this is called inventory management and is optional when integrating with Stock2Shop. Most integrations use this to 
synchronize their stock on hand with the Sales Channel availability.

#### Workflow
The process for creating, enriching, removing products with particular preferences. Workflows can differ drastically 
between different integrations and their specific setup. Workflows are covered by Stock2Shop when your integration 
is being setup.

#### Re-link
When we talk about a product link, it refers to the connect of the product from Stock2Shop and how it links to your 
product on your Sales Channels. When first syncing your Stock2Shop Inventory, our Connector will find existing products
and if not, it will create them (depending on requirements) as new products. When we establish the initial link, Stock2Shop
saves the ID your sales channel assigns to the products in order to update products faster moving forward. When a product
is removed from your Sales Channel without being removed from Stock2Shop, it will break the link. If the product is
re-created on your Sales Channel, it will not have the same ID Stock2Shop has saved. In this case we would need to Re-link
your product

#### Channel ID
When linking products to your Sales Channel, we save the ID assigned by the Sales Channel for quicker reference to the 
product. This ID we call a Channel ID, and is unique to a single product on your Store. If the Product is removed from the 
Store manually, Stock2Shop will not be able to link to your product without getting the new ID assigned.

#### Product Code
Product Codes are used to Group variants and control your Product data that relates to all variants such as Title, Description,
Category, Product Type, Attributes, and other fields. these fields are updated using the Product Code. 

#### Variant Code
Variant Codes are used to control your Variant data that relates to a specific SKU on your ERP. The Variant Code controls
the Variant info related to Price, Quantity, Barcodes, Weight, and all other related fields. All these fields link to a 
single SKU on your accounting software or Source, and updates the relevant data.