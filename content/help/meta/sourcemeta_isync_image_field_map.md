---
title: ""
name: "sourcemeta_isync"
key: "image_field_map"
description: "Field mapping between S2S and iSync for images, use '{{}}' signs to note variable, otherwise string will be treated as literal"
user_friendly_description: ""
default: "[
{
&quot;image&quot;: {
&quot;image&quot;: &quot;http://example.com/{{CustomField8}}&quot;,
&quot;image_id&quot;: &quot;{{CustomField8}}&quot;,
&quot;action&quot;: &quot;I&quot;
},
&quot;source&quot;: {
&quot;source_product_code&quot;: &quot;{{JobProductID}}&quot;,
&quot;source_variant_code&quot;: &quot;{{ProductStockID}}&quot;
}
},
{
&quot;image&quot;: {
&quot;image&quot;: &quot;http://example.com/{{CustomField9}}&quot;,
&quot;image_id&quot;: &quot;{{CustomField9}}&quot;,
&quot;action&quot;: &quot;I&quot;
},
&quot;source&quot;: {
&quot;source_product_code&quot;: &quot;{{JobProductID}}&quot;,
&quot;source_variant_code&quot;: &quot;{{ProductStockID}}&quot;
}
}
]"
values: []
tags: [sourcemeta,isync]
type: "meta"
process: ""
headless: true
---