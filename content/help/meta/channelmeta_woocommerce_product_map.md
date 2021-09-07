---
title: "Sync Product data to WooCommerce"
name: "channelmeta_woocommerce"
key: "product_map"
description: "Product map overrides the basic product settings. To call price tier use the following &quot;{{variant.price_tier_MyPriceTier}}&quot;. To call a warehouse use the following &quot;{{variant.qty_availability_MyWarehouse}}&quot; {{#calculate}} function not possible - Will set values to '0'"
user_friendly_description: "Sync only the information you require from Stock2Shop to WooCommerce, such as price, quantity, title, description, SKU, barcode."
default: "{
&quot;title&quot;: &quot;{{product.title}}&quot;,
&quot;variations&quot;: [
{
&quot;sku&quot;: &quot;{{variant.sku}}&quot;,
&quot;regular_price&quot;: &quot;{{variant.price}}&quot;,
&quot;stock_quantity&quot;: &quot;{{variant.qty}}&quot;
}
]
}"
values: []
tags: [channelmeta,woocommerce]
type: "meta"
process: "products"
headless: true
---