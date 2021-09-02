---
title: "Order products in set quantities"
name: "channelmeta_trade"
key: "qty_multiples_of"
description: "The multiple of products must be ordered in. This is usually set on the actual product. e.g. You have a product thats unit of measure is 1 in the source, but they are sold in packs of 10, the products qty_multiples_of can be set to 10."
user_friendly_description: "Set whether or not all products in your trade store must be ordered in quantities of 2 or more. This is a global store setting meaning each product with have the same order in multiples of increment. If your ERP / Accounting system supports unit of measure, we can use this value and apply it dynamically to each product. This does require custom development."
default: "1"
values: []
tags: [channelmeta,trade]
type: "meta"
process: "products"
headless: true
---