---
title: "Add additional fulfillment items"
name: "fulfillmentservicemeta_parcelninja"
key: "add_line_items"
description: "Additional items/SKU to add to the fulfilment. Useful for free samples to be shipped with the order. Item must exist in Parcel Ninja."
user_friendly_description: "If you need to add promotional items to a fulfillment that has not been included on the order, you can set this in Stock2Shop. When this is activated every order being fulfilled will include this item."
default: "[
                      {
                        &quot;itemNo&quot; : &quot;abcxyz&quot;,
                        &quot;name&quot; : &quot;Free Sample&quot;,
                        &quot;qty&quot; : 1
                      }
                    ]"
values: []
tags: [fulfillmentservicemeta,parcelninja]
type: "meta"
process: "fulfillments"
headless: true
---