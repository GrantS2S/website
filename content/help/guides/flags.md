---
title: "Flags"
seoTitle: "Manage product data with flags"
seoDescription: "Using flags to manage where product data is controlled."
type: guides
tags: ["key-concept"]
draft: false
aliases:
    - 
---

Control which product field's information should be managed by which system, with Stock2Shop's source and channel flags.

- [What are flags?](#what-are-flags)
- [Source flags](#source-flags)
- [Channel flags](#channel-flags)
- [Product flag fields](#flag-fields)

## What are flags? {#what-are-flags}
Stock2Shop flags are linked to product fields in Stock2Shop. 
Each product field has a flag which tells us if the field should be used or ignored from the [source](/help/guides/source#linked-source/ "") (ERP / Accounting system) or if it should be omitted when sending data to a [channel](help/guides/channel/ "") (ecommerce website).

---

## Source flags {#source-flags}
Each Source has it's own flag settings which allows you to determine which product information should be controlled by the:

- System (Stock2Shop)
- Source (ERP / Accounting system)


If a flag is set to system for a specific product field, that field will be excluded when the product is updated. 
Alternatively if the flag is set to source, then the field data being synced from the source will be used to update that field on the system (Stock2Shop)

### Scenario
Flags are useful on sources, specifically when dealing with multiple [linked sources](/help/guides/source#linked-source/ ""). 

For example, you have an ERP / Accounting system as a [Primary source](/help/guides/source#primary-source/ ""). On this source, you set only the SKU, quantity and price fields to be synced to Stock2Shop. 
You then setup a Google Sheet [linked sources](/help/guides/source#linked-source/ "") which consists of all the other [product fields](#flag-fields) set to be enriched, except for SKU, quantity and price. 

This means you can manage all elements of your product catalog data in a Google Sheet, and leave the accounting system to simply update SKU, quantity and price. Neither source will override each other.

```
When a product is synced from the source for the first time all flags are ignored. 
This means that all the data in all fields will be synced to Stock2Shop from the source.
When the product is updated, only fields that are flagged to be controlled by 3rd Base Dolfin will be updated. 

```

---


## Channel flags {#channel-flags}
Each channel has it's own flag settings which allows you to determine which product information should be controlled by the:

- System (Stock2Shop)
- Channel (ecommerce sales channel)


If a flag is set to channel for a specific product field, that field will be excluded when the product is updated. 
Alternatively if the flag is set to system, then the field data from the system (Stock2Shop) will be used to update that field on the sales channel.

### Scenario
For example, imagine you have two channels – Magento and our B2B platform. On Magento, you only want to send the quantity and price. You set the flags on this channel for these fields to be “system” and the rest to “channel”. On the B2B platform, you want to send all the product information on Stock2Shop through. You therefore leave all flags at “system”.

---

## Product flag fields {#flag-fields}
Flags work with all of Stock2Shop's standard product fields, as well as attribute fields:

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

---





