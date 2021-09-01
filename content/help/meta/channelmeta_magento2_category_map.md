---
title: ""
name: "channelmeta_magento2"
key: "category_map"
description: "Map used to manage category hierarchy, you can create any number of categories based on the given data"
user-friendly-description: ""
default: "{   &quot;categories&quot;: [     {       &quot;parent_id&quot;: &quot;2&quot;,       &quot;name&quot;: &quot;Products&quot;,       &quot;categories&quot;: [         {           &quot;name&quot;: &quot;{{collection}}&quot;,           &quot;categories&quot;: [             {               &quot;name&quot;: &quot;{{product_type}}&quot;             }           ]         }       ]     },     {       &quot;parent_id&quot;: &quot;2&quot;,       &quot;name&quot;: &quot;Brands&quot;,       &quot;categories&quot;: [         {           &quot;name&quot;: &quot;{{vendor}}&quot;         }       ]     },     {       &quot;parent_id&quot;: &quot;2&quot;,       &quot;name&quot;: &quot;Gender&quot;,       &quot;categories&quot;: [         {           &quot;name&quot;: &quot;{{meta.gender}}&quot;         }       ]     }   ] }"
values: []
tags: [channelmeta,magento2]
type: "meta"
process: ""
headless: true
---