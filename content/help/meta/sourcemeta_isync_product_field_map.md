---
title: ""
name: "sourcemeta_isync"
key: "product_field_map"
description: "Field mapping between S2S and iSync, use '{{}}' signs to note variable, otherwise string will be treated as literal"
user-friendly-description: ""
default: "{
&quot;source&quot;: {
&quot;source_product_code&quot;: &quot;{{Style}}&quot;,
&quot;product_active&quot;: &quot;{{WebSale}}&quot;
},
&quot;product&quot;: {
&quot;collection&quot;: &quot;{{Product}}&quot;,
&quot;title&quot;: &quot;{{JobDescription}}&quot;,
&quot;product_type&quot;: &quot;{{ProductUD0}}&quot;,
&quot;body_html&quot;: &quot;{{CustomField0}}&quot;,
&quot;tags&quot;: &quot;{{CustomField1}}&quot;,
&quot;vendor&quot;: &quot;{{VariableField3}}&quot;,
&quot;options&quot;: [
{
&quot;value&quot;: &quot;&quot;,
&quot;name&quot;: &quot;Size&quot;,
&quot;position&quot;: 1
},
{
&quot;value&quot;: &quot;&quot;,
&quot;name&quot;: &quot;Colour&quot;,
&quot;position&quot;: 1
}
],
&quot;variants&quot;: {
&quot;source_variant_code&quot;: &quot;{{SKU}}&quot;,
&quot;option1&quot;: &quot;{{Size}}&quot;,
&quot;option2&quot;: &quot;{{Colour}}&quot;,
&quot;qty&quot;: &quot;{{AvailableUnits}}&quot;,
&quot;barcode&quot;: &quot;&quot;,
&quot;grams&quot;: &quot;&quot;,
&quot;sku&quot;: &quot;{{SKU}}&quot;,
&quot;price&quot;: &quot;{{RetailSellingPrice}}&quot;,
&quot;inventory_management&quot;: &quot;true&quot;,
&quot;price_tiers&quot;: [
{
&quot;tier&quot;: &quot;Retail&quot;,
&quot;price&quot;: &quot;{{RetailSellingPrice}}&quot;
},
{
&quot;tier&quot;: &quot;Wholesale&quot;,
&quot;price&quot;: &quot;{{SellingPrice}}&quot;
}
]
}
}
}"
values: []
tags: [sourcemeta,isync]
type: "meta"
process: ""
headless: true
---