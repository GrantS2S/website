---
title: ""
name: "fulfillmentservicemeta_parcelninja"
key: "map"
description: "Map used to convert Parcel Ninja fulfillment to S2S fulfillment. See example fulfillment from Parcel Ninja https://parcelninja.docs.apiary.io/#reference/webhooks/retrieve-an-outbound-with-event-history"
user_friendly_description: ""
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
process: ""
headless: true
---