---
title: ""
name: "sourcemeta_sageone"
key: "param_product_field_map"
description: "If you want to use ':' in the option name as the key value for options, do not include the product-&gt;options property. Changes made to Category names and Price Tiers on SageOne will only Update in Stock2Shop if the Sync token is set back and a fetch is performed."
user_friendly_description: ""
default: "{
&quot;source&quot;: {
&quot;source_product_code&quot;: &quot;TextUserField1&quot;,
&quot;product_active&quot;: &quot;Active&quot;
},
&quot;product&quot;: {
&quot;collection&quot;: &quot;Category.Description&quot;,
&quot;title&quot;: &quot;Description&quot;,
&quot;product_type&quot;: &quot;TextUserField2&quot;,
&quot;body_html&quot;: &quot;&quot;,
&quot;tags&quot;: &quot;&quot;,
&quot;vendor&quot;: &quot;&quot;,
&quot;options&quot;: [
{
&quot;value&quot;: &quot;&quot;,
&quot;name&quot;: &quot;Options&quot;,
&quot;position&quot;: 1
}
],
&quot;variants&quot;: {
&quot;source_variant_code&quot;: &quot;ID&quot;,
&quot;option1&quot;: &quot;TextUserField3&quot;,
&quot;qty&quot;: &quot;QuantityOnHand&quot;,
&quot;barcode&quot;: &quot;&quot;,
&quot;grams&quot;: &quot;&quot;,
&quot;sku&quot;: &quot;Code&quot;,
&quot;price&quot;: &quot;PriceExclusive&quot;,
&quot;price_tiers&quot;: [],
&quot;inventory_management&quot;: true
}
}
}"
values: []
tags: [sourcemeta,sageone]
type: "meta"
process: ""
headless: true
---