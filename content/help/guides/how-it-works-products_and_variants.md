---
title: "Understanding products and variants"
seoTitle: "Understanding products and variants"
seoDescription: "Variable Products controlled using Stock2Shop and your Sales Channel"
seoKeyword: ["Products and Variants"]
type: guides
tags: ["product"]
---

Here’s all you need to know about the relationship between products, options and variants on Stock2Shop.

### What is a Product?
A product contains information such as title, collection, description, vendor, product type and images.
Each product must contain at least one or more variants.

For example, if you sell shoes, your product may have the following properties:

Title: Pegasus 2
Collection: Sports Shoes
Vendor: Athletics Co Ltd
Type: Running Shoe

This product may be available in multiple sizes and may come in several colours.
Each variant for the above product would have a unique size / colour combination.

### What are product options? 
A product may or may not have options, depending on if it has multiple variants or not.
In the below shoe example, the product would have two options: size and colour.

### What is a variant?
A variant contains information about each product option such as SKU, weight, price and availability (stock levels).
In the below shoe example, you may hold 3 different sizes in 2 colours. The variants would look like this:

The variants for a Shoe would look like this:

#### Shoe Product
---
| SKU   |  Option 1<br>(Size)   |  Option 2<br>(Colour)   |  Quantity   |  Weight<br>(g) |
| ------------ | :-------------: | :-------------: | :-------------: | :-------------: |
| ABC-1  |  8  |  <span style="color:red">**Red**</span>  |  10  |  100 |
| ABC-2  | 9 |  <span style="color:red">**Red**</span>  | 14 | 105 |
| ABC-3  | 10 |  <span style="color:red">**Red**</span>  | 50 | 110 |
| ABC-4  | 8 |  <span style="color:blue">**Blue**</span>  | 10 | 100 |
| ABC-5  | 9 |  <span style="color:blue">**Blue**</span>  | 0 | 105 |
| ABC-6  | 10 |  <span style="color:blue">**Blue**</span>  | 3 | 110 |

---

In the example, the red and blue shoes come in 3 different sizes.  
**It is important that each variant has a unique combination of options, meaning, you will not be able to have 2 blue 
shoes that are size 9 under the same Parent Product.**

When importing data into Stock2Shop, we need to be able to define the above “parent/child” relationship in a flat data 
structure (spreadsheet).

In order to do this, we have some field conventions, namely:
- **source_product_code:** This is the unique identifier for each parent product.
- **source_variant_code:** This is the unique identifier for each child variant.
- **option1_name:** Describing the option (e.g. size)
- **option1_value:** The value for this variant (e.g. size 8)
- **option2_name:** Describing the option (e.g. colour)
- **option2_value:** The value for this variant (e.g. red)



**We can have a maximum of 3 options per product in Stock2Shop.**