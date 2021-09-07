---
title: "Set Tax rate on products"
name: "channelmeta_trade"
key: "tax_rate"
description: "Tax is calculated in the following hierarchy. 1. Does product have meta_tax_rate? 2. Does customer have meta_tax_rate 3. Does the channel have meta_tax_rate (this setting)"
user_friendly_description: "Set the tax rate on products for this store, such as 15% for South Africa. If a product or customer does not have a tax rate, the store tax rate will be used."
default: "15"
values: []
tags: [channelmeta,trade]
type: "meta"
process: "products"
headless: true
---