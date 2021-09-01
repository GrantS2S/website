---
title: "Update product quantity in multiple locations"
name: "channelmeta_shopify"
key: "location_map"
description: "Keys are shopify location_id and value is mustache template. use_location_api must be set to true"
user_friendly_description: "You may have one or more location set up in Shopify. If you have multiple warehouses in Stock2Shop, you can send specific warehouse quantities to specific locations in Shopify."
default: "{   &quot;shopify_location_id_1&quot;: &quot;{{qty_availability.jhb}}&quot;,   &quot;shopify_location_id_2&quot;: &quot;{{qty_availability.cpt}}&quot; }"
values: []
tags: [channelmeta,shopify]
type: "meta"
process: "products"
headless: true
---