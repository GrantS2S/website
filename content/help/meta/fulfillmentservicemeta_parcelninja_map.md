---
title: "Create products in Stock2Shop "
name: "fulfillmentservicemeta_parcelninja"
key: "map"
description: "Map used to convert Parcel Ninja fulfillment to S2S fulfillment. See example fulfillment from Parcel Ninja https://parcelninja.docs.apiary.io/#reference/webhooks/retrieve-an-outbound-with-event-history"
user_friendly_description: "Stock2Shop can create products from the data in Parcelninja. These can then be linked to and update existing products on sales channels or Stock2Shop can create entirely new products."
default: "{
                      &quot;fulfillment&quot;: {
                        &quot;fulfillmentservice_order_code&quot;: &quot;{{clientId}}&quot;,
                        &quot;tracking_number&quot;: &quot;{{deliveryInfo.trackingNo}}&quot;,
                        &quot;tracking_company&quot;: &quot;{{deliveryInfo.courierName}}&quot;,
                        &quot;tracking_url&quot;: &quot;{{deliveryInfo.trackingNo}}&quot;,
                        &quot;status&quot;: &quot;{{events.description}}&quot;,
                        &quot;notes&quot;: &quot;{{#events}}{{timeStamp}} - {{code}}: {{description}}
{{/events}}&quot;
                      }
                    }"
values: []
tags: [fulfillmentservicemeta,parcelninja]
type: "meta"
process: "products"
headless: true
---