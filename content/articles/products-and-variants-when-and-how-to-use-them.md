---
title: "Products and Variants - When and how to use them"
seoTitle: "Products and Variants - When and how to use them"
titleList: "Products and Variants - When and how to use them"
seoDescription: "When is it a good idea to configure multiple variants to reflect as a single product on your website? Click here to find out."
summary: "When is it a good idea to configure multiple variants to reflect as a single product on your website? Click here to find out."
lead: "When is it a good idea to configure multiple variants to reflect as a single product on your website? Click here to find out."
image: "/uploads/products-and-variants-when-and-how-to-use-them.jpg"
imageAlt: products and variants - when and how to use them
date: 2020-12-15
aliases:
    - /articles/products-and-variants-when-and-how-to-use-them/
---

# Products and Variants - When and how to use them
Product configuration is a personal thing. Whether you choose to display each one as a standalone product (with one variant) on your website or you prefer to reflect some as variable products (composed of multiple variants) depends on the nature of your business.

Your main consideration when setting up an online store should be the user experience. If your customers find your website cumbersome and difficult to navigate, it will directly impact your bottom line. Two of the biggest factors affecting the user experience are categorisation and product configuration. In this article we tackle the latter within the context of systems integration, but before we dive in, we’re going to clarify some terminology to avoid confusion going forward.

## Ecommerce Terminology
- SKUs (stock keeping unit): These refer to the smallest units of items that you sell. It is often referred to as an “item” on various accounting systems, and is always represented by a unique SKU code.
- Products: A product contains information such as title, collection, description, vendor, product type and images. Each product must contain at least one variant. A product with multiple variants is called a variable product, and the customer indicates which one they want by selecting an “option”.
- Options: Variable products have dropdown options which enable a customer to select a variant. Each variant is linked to an item on your accounting system by an SKU code.
- Variants: These are the building blocks of a product and define the correlating “item” in the ERP. Variants contain information about each product option such as SKU, weight, price and availability (stock levels).

For more information on the relationship between products and variants view our documentation regarding Key Concepts, [Here](/help/guides/products-overview/ "Stock2Shop Products Overview Guide").

## When to use variable products
Syncing standalone products is pretty straightforward – the item code on your accounting system needs to correlate to the SKU code field on the online product’s solitary variant. However, sometimes your situation may call for certain products to be made up of many variants, in which case, a dropdown of options is provided so the customer can make a selection.

When determining whether to group items together as a variable product, ask yourself if all of them can be represented by the same image. A good example is shoes.

![When to use variable products](/uploads/products_variants_1.jpg)

You may sell a model of shoe that comes in two different colours, each with a size curve. Best practice is to list the blue shoe and the orange shoes as two separate products (because they look different), each with an option dropdown for size.

## How to configure variable products
In the example below, customers are presented with two separate products on the website, an orange shoe and a blue shoe. They can then click into whichever colour shoe they want and select the appropriate size option. Each one of these options is assigned to a variant, each with its own SKU code, price, stock quantity, barcode and weight.

![How to configure variable products](/uploads/products_variants_image_2.jpg)

Variable products require configuration. If you only have one online sales channel, it makes sense to build your variable products on your website and ensure that each variant’s SKU code correlates with the relevant item code on your accounting system. Your workflow for adding a new product to your integrated systems would therefore be as follows:

- Add the items to the accounting system.
- Add the variable product to the website, ensuring that each variant has the correct SKU code.
- Mark the items “active” to sync on your accounting system.

If, however, you are syncing your product to multiple online sales channels, all of which require variable products, it would make sense to configure them in your accounting system. The downside of doing it this way is that it will require additional work on your inventory table; the benefit is that the products sync onto your website pre-configured and ready to be enriched.

| Item Code | Description | Price Incl. | Quantity on Hand | Product Code | Product Option |
|-----------|-------------|-------------|------------------|--------------|----------------|
| SH-BL-5   | Blue Shoe   | R119.99     | 4                | SHOE-BLU     | Size 5         |
| SH-BL-6   | Blue Shoe   | R119.99     | 23               | SHOE-BLU     | Size 6         |
| SH-BL-7   | Blue Shoe   | R119.99     | 19               | SHOE-BLU     | Size 7         |
| SH-BL-8   | Blue Shoe   | R119.99     | 0                | SHOE-BLU     | Size 8         |

Above you can see how the Blue Shoe size variants might look in your accounting system. In order to group them together we have had to add the following fields to the table:

- Product Code – It acts as a parent code, grouping our two items together. Note how both items have the same Product Code in the above example.
- Product Option – It tells us the difference between our grouped variants. This value will appear on the option dropdown on your website’s front end.