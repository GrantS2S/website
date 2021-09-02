---
title: "Customise the order list page"
name: "channelmeta_trade"
key: "order_columns"
description: "Columns included on the order list page. Meta fields can be accessed as &quot;meta.some_value&quot;"
user_friendly_description: "Display the important order information your customers need to see. By default the order number, sales order number, date and order total are displayed."
default: "{
            &quot;ORDER NO.&quot;: &quot;order.id&quot;,
            &quot;SALES ORDER NO.&quot;: &quot;order.sources[0].source_order_code&quot;,
            &quot;DATE&quot;: &quot;order.created&quot;,
            &quot;TOTAL&quot;: &quot;order.total&quot;
        }"
values: []
tags: [channelmeta,trade]
type: "meta"
process: "orders"
headless: true
---