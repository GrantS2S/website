---
title: "Understanding product fields"
seoTitle: "Product Fields in Stock2Shop Integration"
seoDescription: "Product fields that are used by Stock2Shop for your ERP / Accounting Integration"
type: guides
tags: ["product"]
draft: true
aliases:
    - 
---

## Product Fields
Stock2Shop cover many aspects of a product. We have fields in Stock2Shop for your product data to cover most cases, but 
if required, we can add extensive meta data to your Product that can be used in lots of different ways. 

The main fields for Products are the name of your product, how much you are selling it for, a short description of the
product, and the amount you have available. This is a very basic amount of data that can be expanded into many different
fields. Here are some fields we use and what they do.
##### Product Level
- **Title** - The Title for your Product.
- **Description** - Your products description.
- **Parent ID** - If you are using Products with multiple variants, we need an ID to determine the data that is relevant
  to all variants associated.
- **Collection/Category** - The relevant group for your product in order to filter products on your Store or in Stock2Shop. 
- **Product Type** - This field can be used as a sub category to your Collection/Category fields.
- **Product Tags** - You can add multiple Tags to your Products for use on your Sales Channel.
- **Product Meta** - Any product information that you may require in order to display and sell your product. Note that meta information is only avaiable at a product level and not a variant level.
##### Variant Level
- **Variant ID** - The Stock2Shop ID for your variant. This can be the same as your Sku code.
- **Sku Code** - The unique Stock Keeping Unit of your product in your ERP/Accounting system.  
- **Weight** - The weight/mass of the product. This is controlled by the variant ID. 
- **Barcode** - The Barcode for the product. Must be unique to a single variant/sku.
- **Price** - The selling price, RRP or special price for your product. You can have multiple price fields.
- **Quantity** - The Stock level for your product. Stock2Shop supports multiple quantity fields for Warehousing.
