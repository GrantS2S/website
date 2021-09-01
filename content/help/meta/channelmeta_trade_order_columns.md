---
title: ""
name: "channelmeta_trade"
key: "order_columns"
description: "Columns included on the order list page. Meta fields can be accessed as &quot;meta.some_value&quot;"
user_friendly_description: ""
default: "{
            &quot;ORDER NO.&quot;: &quot;order.id&quot;,
            &quot;SALES ORDER NO.&quot;: &quot;order.sources[0].source_order_code&quot;,
            &quot;DATE&quot;: &quot;order.created&quot;,
            &quot;TOTAL&quot;: &quot;order.total&quot;
        }"
values: []
tags: [channelmeta,trade]
type: "meta"
process: ""
headless: true
---