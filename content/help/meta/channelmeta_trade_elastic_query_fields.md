---
title: "Customise product search fields"
name: "channelmeta_trade"
key: "elastic_query_fields"
description: "ElasticSearch fields to use for main search. See elastic search documentation for field weighting and other features"
user_friendly_description: "Some customers may know your SKU's or barcodes and others may only know the product title. You can define what product fields should be used to render search results. "
default: "variants.sku,variants.barcode,title,source_product_code,variants.source_variant_code,body_html,collection.english,product_type.english,meta.value,vendor.english"
values: []
tags: [channelmeta,trade]
type: "meta"
process: "products"
headless: true
---