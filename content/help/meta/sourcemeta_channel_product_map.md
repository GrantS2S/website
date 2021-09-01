---
title: ""
name: "sourcemeta"
key: "channel_product_map"
description: "This is used to transform data when sharing data between consoles (Remove if normal source)"
user-friendly-description: ""
default: "{   &quot;source&quot;: {     &quot;source_id&quot;: &quot;{{source.source_id}}&quot;,     &quot;source_product_code&quot;: &quot;{{source.source_product_code}}&quot;,     &quot;product_active&quot;: &quot;{{source.product_active}}&quot;,     &quot;sync_token&quot;: &quot;0&quot;,     &quot;fetch_token&quot;: &quot;0&quot;   },   &quot;product&quot;: {     &quot;variants&quot;: {       &quot;source_variant_code&quot;: &quot;{{product.variants.source_variant_code}}&quot;,       &quot;sku&quot;: &quot;{{product.variants.sku}}&quot;,       &quot;qty_availability&quot;: [         {           &quot;description&quot;: &quot;A&quot;,           &quot;qty&quot;: &quot;{{product.variants.qty}}&quot;         }       ]     }   } }"
values: []
tags: [sourcemeta]
type: "meta"
process: ""
headless: true
---