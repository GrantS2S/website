---
title: "Customise product search suggestion fields"
name: "channelmeta_trade"
key: "elastic_suggest_fields"
description: "ElasticSearch fields to use for suggests (type ahead drop down on top navigation). See elastic search documentation for field weighting and other features"
user_friendly_description: "As soon as your customers start typing in the search a dropdown will appear with suggested results. You can set this to look at only certain product fields such as SKU, product title, barcode."
default: "variants.sku^3,title^3,variants.barcode"
values: []
tags: [channelmeta,trade]
type: "meta"
process: "products"
headless: true
---