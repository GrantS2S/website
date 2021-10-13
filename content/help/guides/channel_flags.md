---
title: "Channel Flags"
seoTitle: "Understanding Stock2Shop sales channel flags"
seoDescription: "Understanding Stock2Shop sales channel flags"
type: guides
tags: ["channel"]
aliases:
    - /documentation/key-concepts/flags/
---

Decide which fields to use on sources and channels: all you need to know about Stock2Shop flags.

### What are Stock2Shop flags?
Stock2Shop flags are linked to product fields in Stock2Shop.
Each product field has a flag which tells us if the field should be used or ignored from the 
[source](/help/how-to/sources/index "...") (for example, the ERP or accounting system) or if it should be omitted when 
sending data to a [channel](/help/how-to/channels/index "...") (for example, the e-commerce 
website)

### Flags on Channels
Each flag on a channel has two options: “system” and “channel”. If a flag is set to “channel” for a specific field, that
field will be excluded when the product is sent to the channel. This means the channel is in charge of that field.

For example: imagine you have two channels – Magento and our B2B platform. On Magento, you only want to send the 
quantity and price. You set the flags on this channel for these fields to be “system” and the rest to “channel”. On the 
B2B platform, you want to send all the product information on Stock2Shop through. You therefore leave all flags at 
“system”.

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