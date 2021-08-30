---
title: "How StockShop flags work"
heading: "Stock2Shop flags"
description: "Stock2Shop seamlessly integrates your ERP accounting system and your e-commerce website. Product flags allow us to manage data sent from a source (your ERP or accounting system: Sage, SYSPRO, iSync or SAP) and data sent to e-commerce channels (Magento, WooCommerce, Shopify or your B2B trade store)."
lead: "Decide which fields to use on sources and channels: all you need to know about Stock2Shop flags."
aliases: "/documentation/key-concepts/flags/"
toc: false
menu:
  docside:
    parent: Key Concepts
    name: Flags
---

Decide which fields to use on sources and channels: all you need to know about Stock2Shop flags.

* * *

### What are Stock2Shop flags?

Stock2Shop flags are linked to product fields in Stock2Shop.  
Each product field has a flag which tells us if the field should be used or ignored from the “[source](https://www.stock2shop.com/documentation/key-concepts/sources/)” (for example, the ERP or accounting system) or if it should be omitted when sending data to a “[channel](https://www.stock2shop.com/documentation/key-concepts/channels/)” (for example, the e-commerce website).

* * *

### Flags on sources

Each flag on a source has two options: “system” and “source”. If a flag is set to “system” for a specific field, that field will be excluded when the product is updated. If it is set to “source”, then the field data will be used.  
  
Flags are useful on sources, specifically when dealing with multiple [“linked” sources](https://www.stock2shop.com/documentation/key-concepts/linked-sources/).  
  
For example: you have Sage Accounting as a source. On this source, you set only the SKU, quantity and price fields to be fetched. You then create a Google Sheet as a linked source, which has all the other fields set to be used, except for SKU, quantity and price.  
  
This means you can manage all elements of your product catalog data in a Google Sheet, and leave the accounting system to simply update SKU, quantity and price. Neither source will override each other.

* * *

### Flags on channels

Each flag on a channel has two options: “system” and “channel”. If a flag is set to “channel” for a specific field, that field will be excluded when the product is sent to the channel. This means the channel is in charge of that field.  
  
For example: imagine you have two channels – Magento and our B2B platform. On Magento, you only want to send the quantity and price. You set the flags on this channel for these fields to be “system” and the rest to “channel”. On the B2B platform, you want to send all the product information on Stock2Shop through. You therefore leave all flags at “system”.

* * *

### What product fields do flags work on?

Stock2Shop flags support the following product fields:

*   Title
*   Body HTML (description)
*   Collection
*   Product Type
*   Tags
*   Vendor
*   Options
*   Attributes (any key value attribute)
*   SKU
*   Barcode
*   Quantity (multiple warehouses)
*   Price (multiple pricelists)
*   Grams
*   Inventory Management (tracking inventory)

  
Any questions? [Contact us](https://www.stock2shop.com/contact-us/) – we’re happy to help.