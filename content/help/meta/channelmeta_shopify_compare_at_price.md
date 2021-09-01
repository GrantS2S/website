---
title: "Sync a compare price to Shopify"
name: "channelmeta_shopify"
key: "compare_at_price"
description: "Price tier to set compare_at_price on Shopify. Use {{price_tiers.*price_tier_key*.price}} make sure &quot;.price&quot; is at the end. Read through solution for more information on the feature."
user_friendly_description: "Using Shopify's Compare At feature, we can sync a secondary price list to Shopify and have to used for comparing prices on the store front."
default: "{{price_tiers.Wholesale.price}}"
values: []
tags: [channelmeta,shopify]
type: "meta"
process: "products"
headless: true
---