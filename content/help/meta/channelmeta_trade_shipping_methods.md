---
title: ""
name: "channelmeta_trade"
key: "shipping_methods"
description: "Multiple shipping methods can be implemented for the customer to select. This can be added per customer as a meta. The format is JSON, with the key being the name displayed on the channel for each method"
user_friendly_description: ""
default: "{
  &quot;Next Day&quot;: {
    &quot;method&quot;: &quot;flat_rate&quot;,
    &quot;price&quot;: 100,
    &quot;tax_lines&quot;: [
      {
        &quot;rate&quot;: 14,
        &quot;price&quot;: 14,
        &quot;title&quot;: &quot;VAT&quot;,
        &quot;code&quot;: &quot;taxed&quot;
      }
    ]
  },
  &quot;Same day delivery&quot;: {
    &quot;method&quot;: &quot;flat_rate&quot;,
    &quot;price&quot;: 200,
    &quot;tax_lines&quot;: [
      {
        &quot;rate&quot;: 14,
        &quot;price&quot;: 28,
        &quot;title&quot;: &quot;VAT&quot;,
        &quot;code&quot;: &quot;taxed&quot;
      }
    ]
  },
  &quot;Rate based on cart&quot;: {
    &quot;method&quot;: &quot;table_rate&quot;,
    &quot;rates&quot;: [
      {
        &quot;order_total&quot;: 100,
        &quot;price&quot;: 300,
        &quot;tax_lines&quot;: [
          {
            &quot;rate&quot;: 14,
            &quot;price&quot;: 42,
            &quot;title&quot;: &quot;VAT&quot;,
            &quot;code&quot;: &quot;taxed&quot;
          }
        ]
      },
      {
        &quot;order_total&quot;: 2000,
        &quot;price&quot;: 200,
        &quot;tax_lines&quot;: [
          {
            &quot;rate&quot;: 14,
            &quot;price&quot;: 28,
            &quot;title&quot;: &quot;VAT&quot;,
            &quot;code&quot;: &quot;taxed&quot;
          }
        ]
      }
    ]
  }
}
"
values: []
tags: [channelmeta,trade]
type: "meta"
process: ""
headless: true
---