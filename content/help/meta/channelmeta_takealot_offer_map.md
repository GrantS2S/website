---
title: ""
name: "channelmeta_takealot"
key: "offer_map"
description: "Template for creating an offer based on product and one variant, see example map on how to set properties. Consider hard coding leadtime to &quot;5&quot;, which is the maximum. Note &quot;price&quot; must always be set. Warehouse ID should be hardcoded but can be added as meta eg: {{meta.warehouse_id}}"
user_friendly_description: ""
default: "{             &quot;selling_price&quot;: {{variant.price}},             &quot;rrp&quot;: {{variant.price_tiers.Wholesale}},             &quot;leadtime_days&quot;: {{meta.lead_time}},             &quot;leadtime_stock&quot;: [                 {                     &quot;merchant_warehouse_id&quot;: 0,                     &quot;quantity&quot;: {{variant.qty}}                 }             ],             &quot;sku&quot;: &quot;{{variant.sku}}&quot;         }"
values: []
tags: [channelmeta,takealot]
type: "meta"
process: ""
headless: true
---