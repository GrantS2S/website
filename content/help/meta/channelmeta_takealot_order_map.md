---
title: ""
name: "channelmeta_takealot"
key: "order_map"
description: "Used to transform takealot order to s2s order. The data transformed will be the result of view order https://seller-api.takealot.com/api-docs/#operation/view_sales We transform the returned sales information to include first_name, last_name and some other properties outlined in the default map."
user-friendly-description: ""
default: "{
          &quot;system_order&quot;: {
            &quot;id&quot;: &quot;{{sales.0.order_id}}&quot;,
            &quot;instruction&quot;: &quot;add_order&quot;,
            &quot;total_discount&quot;: &quot;&quot;,
            &quot;customer&quot;: {
              &quot;id&quot;: &quot;{{#generate_random}}8{{/generate_random}}&quot;,
              &quot;last_name&quot;: &quot;{{sales.0.first_name}}&quot;,
              &quot;first_name&quot;: &quot;{{sales.0.last_name}}&quot;,
              &quot;email&quot;: &quot;do-not-reply@stock2shop.com&quot;
            },
            &quot;billing_address&quot;: {},
            &quot;shipping_address&quot;: {},
            &quot;line_items&quot;: [
              {{# sales}}
              {
                &quot;channel_product_code&quot;: &quot;{{offer_id}}&quot;,
                &quot;channel_variant_code&quot;: &quot;{{offer_id}}&quot;,
                &quot;price&quot;: &quot;{{# calculate}}({{selling_price}}/{{quantity}})/1.15{{/ calculate}}&quot;,
                &quot;qty&quot;: &quot;{{quantity}}&quot;,
                &quot;sku&quot;: &quot;{{sku}}&quot;,
                &quot;title&quot;: &quot;{{product_title}}&quot;,
                &quot;total_discount&quot;: &quot;&quot;,
                &quot;tax_lines&quot;: [
                  {
                    &quot;price&quot;: &quot;{{# calculate}}({{selling_price}}/{{quantity}})-(({{selling_price}}/{{quantity}})/1.15){{/ calculate}}&quot;,
                    &quot;rate&quot;: &quot;15&quot;,
                    &quot;title&quot;: &quot;VAT&quot;,
                    &quot;code&quot;: &quot;taxed&quot;
                  }
                ]
              }{{^ last}},{{/ last}}
              {{/ sales}}
            ],
            &quot;shipping_lines&quot;: []
          },
          &quot;params&quot;: {}
        }"
values: []
tags: [channelmeta,takealot]
type: "meta"
process: ""
headless: true
---