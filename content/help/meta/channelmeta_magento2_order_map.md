---
title: ""
name: "channelmeta_magento2"
key: "order_map"
description: "To be set if the default order_map needs to be adjusted."
user-friendly-description: ""
default: "{
          &quot;system_order&quot;: {
            &quot;id&quot;: &quot;{{entity_id}}&quot;,
            &quot;notes&quot;: &quot;{{notes}}&quot;,
            &quot;add_order_status&quot;: &quot;{{status}}&quot;,
            &quot;total_discount&quot;: &quot;{{base_discount_amount}}&quot;,
            &quot;customer&quot;: {
              &quot;id&quot;: &quot;{{customer.entity_id}}&quot;,
              &quot;last_name&quot;: &quot;{{customer.lastname}}&quot;,
              &quot;first_name&quot;: &quot;{{customer.firstname}}&quot;,
              &quot;email&quot;: &quot;{{customer.email}}&quot;
            },
            &quot;billing_address&quot;: {
              &quot;first_name&quot;: &quot;{{billing_address.firstname}}&quot;,
              &quot;last_name&quot;: &quot;{{billing_address.lastname}}&quot;,
              &quot;company&quot;: &quot;{{billing_address.company}}&quot;,
              &quot;phone&quot;: &quot;{{billing_address.telephone}}&quot;,
              &quot;address1&quot;: &quot;{{# json_escape}}{{billing_address.street}}{{/ json_escape}}&quot;,
              &quot;address2&quot;: &quot;&quot;,
              &quot;city&quot;: &quot;{{billing_address.city}}&quot;,
              &quot;zip&quot;: &quot;{{billing_address.postcode}}&quot;,
              &quot;province&quot;: &quot;{{billing_address.region}}&quot;,
              &quot;country&quot;: &quot;{{billing_address.country_id}}&quot;,
              &quot;country_code&quot;: &quot;{{billing_address.country_id}}&quot;,
              &quot;province_code&quot;: &quot;&quot;
            },
            &quot;shipping_address&quot;: {
              &quot;first_name&quot;: &quot;{{shipping_address.firstname}}&quot;,
              &quot;last_name&quot;: &quot;{{shipping_address.lastname}}&quot;,
              &quot;company&quot;: &quot;{{shipping_address.company}}&quot;,
              &quot;phone&quot;: &quot;{{shipping_address.telephone}}&quot;,
              &quot;address1&quot;: &quot;{{# json_escape}}{{shipping_address.street}}{{/ json_escape}}&quot;,
              &quot;address2&quot;: &quot;&quot;,
              &quot;city&quot;: &quot;{{shipping_address.city}}&quot;,
              &quot;zip&quot;: &quot;{{shipping_address.postcode}}&quot;,
              &quot;province&quot;: &quot;{{shipping_address.region}}&quot;,
              &quot;country&quot;: &quot;{{shipping_address.country_id}}&quot;,
              &quot;country_code&quot;: &quot;{{shipping_address.country_id}}&quot;,
              &quot;province_code&quot;: &quot;&quot;
            },
            &quot;line_items&quot;: [
              {{# line_items}}
              {
                &quot;channel_product_code&quot;: &quot;{{id}}&quot;,
                &quot;channel_variant_code&quot;: &quot;{{id}}&quot;,
                &quot;price&quot;: &quot;{{price}}&quot;,
                &quot;qty&quot;: &quot;{{qty}}&quot;,
                &quot;sku&quot;: &quot;{{sku}}&quot;,
                &quot;title&quot;: &quot;{{name}}&quot;,
                &quot;total_discount&quot;: &quot;{{# calculate}}{{price}}-{{price_with_discount}}{{/ calculate}}&quot;,
                &quot;tax_lines&quot;: [
                  {
                    &quot;price&quot;: &quot;{{# calculate}}{{price_with_discount_and_tax}}-{{price_with_discount}}{{/ calculate}}&quot;,
                    &quot;rate&quot;: &quot;{{tax_rate}}&quot;,
                    &quot;title&quot;: &quot;VAT&quot;,
                    &quot;code&quot;: &quot;taxed&quot;
                  }
                ]
              }{{^ last}},{{/ last}}
              {{/ line_items}}
            ],
            &quot;shipping_lines&quot;: [
              {
                &quot;price&quot;: &quot;{{shipping_amount}}&quot;,
                &quot;qty&quot;: 1,
                &quot;title&quot;: &quot;{{shipping_description}}&quot;,
                &quot;code&quot;: &quot;ship&quot;,
                &quot;tax_lines&quot;: [
                  {
                    &quot;rate&quot;: 0,
                    &quot;price&quot;: 0,
                    &quot;code&quot;: &quot;taxed&quot;,
                    &quot;title&quot;: &quot;VAT&quot;
                  }
                ]
              }
            ]
          },
          &quot;params&quot;: {
              &quot;currency&quot;: &quot;{{base_currency_code}}&quot;
          }
        }"
values: []
tags: [channelmeta,magento2]
type: "meta"
process: ""
headless: true
---