---
title: "Handling products and variants: system integration"
heading: "products and variants"
description: "Stock2Shop integrates into various different ERP or accounting systems (Sage, SAP, iSync and SYSPRO). Here's all you need to know about set up and configuration of product and inventory data sources, for efficient system integration."
lead: "Here’s all you need to know about the relationship between products, options and variants on Stock2Shop."
aliases: "/documentation/key-concepts/products-variants/"
toc: true
menu:
  docside:
    parent: Key Concepts
    name: Products and Variants
---

Here’s all you need to know about the relationship between products, options and variants on Stock2Shop.

* * *

### What is a product?

A product contains information such as title, collection, description, vendor, product type and images.  
**Each product must contain at least one or more variants.**  
  
For example, if you sell shoes, your product may have the following properties:

Title: Pegasus 2  
Collection: Sports Shoes  
Vendor: Athletics Co Ltd  
Type: Running Shoe

This product may be available in multiple sizes and may come in several colours.  
Each variant for the above product would have a unique size / colour combination.

* * *

### What are product options?

A product may or may not have options, depending if it requires multiple variants or not.  
In the above shoe example, the product would have two options: size and colour.

* * *

### What is a variant?

A variant contains information about each product option such as SKU, weight, price and availability (stock levels).  
In the above shoe example, you may hold 3 different sizes in 2 colours. The variants would look like this:

SKU: ABC-1

SKU: ABC-2

SKU: ABC-3

QTY: 5

QTY: 0

QTY: 15

Weight: 100g

Weight: 105g

Weight: 110g

Price: 80

Price: 80

Price: 80

Option1: size 8

Option1: size 9

Option1: size 10

Option2: red

Option2: red

Option2: red

SKU: ABC-4

SKU: ABC-5

SKU: ABC-6

QTY: 2

QTY: 6

QTY: 5

Weight: 100g

Weight: 105g

Weight: 110g

Price: 80

Price: 80

Price: 80

Option1: size 8

Option1: size 9

Option1: size 10

Option2: blue

Option2: blue

Option2: blue

  

As you can see in the above example, the red and blue shoes come in 3 different sizes.  
**It is important that each variant has a unique combination of options.**

* * *

### How to handle variation when importing data into Stock2Shop

When importing data into Stock2Shop, we need to be able to define the above “parent/child” relationship in a flat data structure (spreadsheet).  
  
In order to do this, we have some field conventions, namely:  

*   source\_product\_code: This is the unique identifier for each parent product.  
    
*   source\_variant\_code: This is the unique identifier for each child variant.  
    
*   option1_name: Describing the option (e.g. size)  
    
*   option1_value: The value for this variant (e.g. size 8)  
    
*   option2_name: Describing the option (e.g. colour)  
    
*   option2_value: The value for this variant (e.g. red)  
    

**We can have a maximum of 3 options only.**

  
Any questions? [Contact us](https://www.stock2shop.com/contact-us/) – we’re happy to help.