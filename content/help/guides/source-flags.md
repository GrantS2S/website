---
title: "Source Flags"
seoTitle: "Understanding the concept of Source Flags"
seoDescription: "Understanding the concept of Source Flags"
seoKeyword: ["Source Flags"]
type: guides
tags: ["source"]
aliases:
    - /documentation/key-concepts/flags/
---

Decide which fields to use on sources and channels: all you need to know about Stock2Shop flags.

### What are Stock2Shop flags?
Stock2Shop flags are linked to product fields in Stock2Shop.
Each product field has a flag which tells us if the field should be used or ignored from the [“source”](/help/how-to/sources/) (for example, the ERP or accounting system) or if it should be omitted when sending data to a [“channel”](/help/how-to/channels/) (for example, the e-commerce website).


### Source flags
Each flag on a source has two options: “system” and “source”. If a flag is set to “system” for a specific field, that field will be excluded when the product is updated. If it is set to “source”, then the field data will be used.
Flags are useful on sources, specifically when dealing with multiple [“linked” sources](/help/how-to/sources/linked-sources/).
For example: you have Sage Accounting as a source. On this source, you set only the SKU, quantity and price fields to be fetched. You then create a Google Sheet as a linked source, which has all the other fields set to be used, except for SKU, quantity and price.
This means you can manage all elements of your product catalog data in a Google Sheet, and leave the accounting system to simply update SKU, quantity and price. Neither source will override each other.

### What product fields do flags work on?
Stock2Shop flags support the following product fields:

- Title
- Body HTML (description)
- Collection
- Product Type
- Tags
- Vendor
- Options
- Attributes (any key value attribute)
- SKU
- Barcode
- Quantity (multiple warehouses)
- Price (multiple pricelists)
- Grams
- Inventory Management (tracking inventory)

