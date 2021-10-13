---
title: "Products Overview"
lead: "Products in Stock2Shop is the term used product data that currently is listed on your Sales Channels"
seoTitle: ""
seoDescription: ""
type: guides
tags: ["product"]
aliases:
    - /documentation/key-concepts/products-variants/
weight: 1
---

## What is a product?
A product contains information such as title, collection, description, vendor, product type and images. 
Each product must contain at least one or more variants. For example, if you sell shoes, your product may have the following properties:

- Title: Pegasus 2
- Collection: Sports Shoes
- Vendor: Athletics Co Ltd
- Type: Running Shoe

This product may be available in multiple sizes and may come in several colours.
Each variant for the above product would have a unique size / colour combination.

## What are product options?
A product may or may not have options, depending if it requires multiple variants or not. 
In the above shoe example, the product would have two options, namely:

- Colour: White / Blue / Red
- Size: 8 / 9 / 10

## What is a variant?
A variant contains information about each product option such as SKU, weight, price and availability (stock levels).
In the above shoe example, you may hold 3 different sizes in 2 colours. The variants would look like this:

| Variant 1       | Variant 2       | Variant 3        |
|-----------------|-----------------|------------------|
| SKU: ABC-1      | SKU: ABC-2      | SKU: ABC-3       |    
| QTY: 5          | QTY: 0          | QTY: 15          |
| Weight: 100g    | Weight: 105g    | Weight: 110g     |
| Price: 80       | Price: 80       | Price: 80        |
| Option1: size 8 | Option1: size 9 | Option1: size 10 |
| Option2: red    | Option2: red    | Option2: red     |

| Variant 4       | Variant 5       | Variant 6        |
|-----------------|-----------------|------------------|
| SKU: ABC-4      | SKU: ABC-5      | SKU: ABC-6       |
| QTY: 2          | QTY: 6          | QTY: 5           |
| Weight: 100g    | Weight: 105g    | Weight: 110g     |
| Price: 80       | Price: 80       | Price: 80        |
| Option1: size 8 | Option1: size 9 | Option1: size 10 | 
| Option2: blue   | Option2: blue   | Option2: blue    |   

As you can see in the above example, the red and blue shoes come in 3 different sizes. 
It is important that each variant has a unique combination of options.

## How to handle variation when importing data into Stock2Shop
When importing data into Stock2Shop, we need to be able to define the above “parent/child” relationship in a flat data structure (spreadsheet). 
In order to do this, we have some field conventions, namely: 

- source_product_code: This is the unique identifier for each parent product.
- source_variant_code: This is the unique identifier for each child variant.
- option1_name: Describing the option (e.g. size)
- option1_value: The value for this variant (e.g. size 8)
- option2_name: Describing the option (e.g. colour)
- option2_value: The value for this variant (e.g. red)

Stock2Shop caters for a maximum of 3 product options only.


    


