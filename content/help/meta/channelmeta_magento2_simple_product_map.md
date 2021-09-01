---
title: ""
name: "channelmeta_magento2"
key: "simple_product_map"
description: "Map used to create a simple products, read the docs for all available properties of a Magento product. https://devdocs.magento.com/swagger/index.html Calculate function available. Values calculated that Equal '0' might cause Queue Errors"
user_friendly_description: ""
default: "{ 	&quot;product&quot;: { 		&quot;sku&quot;: &quot;{{variant.sku}}&quot;, 		&quot;name&quot;: &quot;{{{title}}}{{#variant.option1}}-{{.}}{{/variant.option1}}{{#variant.option2}}-{{.}}{{/variant.option2}}{{#variant.option3}}-{{.}}{{/variant.option3}}&quot;, 		&quot;attribute_set_id&quot;: &quot;{{params.attribute_set_id}}&quot;, 		&quot;price&quot;: &quot;{{variant.price}}&quot;, 		&quot;status&quot;: 1, 		&quot;visibility&quot;: 1, 		&quot;tier_prices&quot;: [{ 			&quot;customer_group_id&quot;: 2, 			&quot;qty&quot;: 1, 			&quot;value&quot;: &quot;{{variant.price_tiers.wholesale}}&quot; 		}, { 			&quot;customer_group_id&quot;: 3, 			&quot;qty&quot;: 1, 			&quot;value&quot;: &quot;{{variant.price_tiers.retail}}&quot; 		}], 		&quot;extension_attributes&quot;: { 			&quot;stock_item&quot;: { 				&quot;qty&quot;: &quot;{{variant.qty}}&quot;, 				&quot;is_in_stock&quot;: true 			} 		}, 		&quot;custom_attributes&quot;: [{ 					&quot;attribute_code&quot;: &quot;cost&quot;, 					&quot;value&quot;: &quot;{{variant.price_tiers.cost}}&quot; 				}, { 					&quot;attribute_code&quot;: &quot;special_price&quot;, 					&quot;value&quot;: &quot;{{meta.special_price}}&quot; 				}, { 					&quot;attribute_code&quot;: &quot;special_from_date&quot;, 					&quot;value&quot;: &quot;2018-06-04&quot; 				}, { 					&quot;attribute_code&quot;: &quot;special_to_date&quot;, 					&quot;value&quot;: &quot;2018-06-05&quot; 				}, { 					&quot;attribute_code&quot;: &quot;tax_class_id&quot;, 					&quot;value&quot;: &quot;2&quot; 				} { 					{ 						#variant.option1 					} 				}, { 					&quot;attribute_code&quot;: &quot;{{variant.option1_name}}&quot;, 					&quot;frontend_input&quot;: &quot;select&quot;, 					&quot;default_frontend_label&quot;: &quot;Selection Test&quot;, 					&quot;value&quot;: &quot;{{variant.option1}}&quot; 				} { 					{ 						/variant.option1}}            ]          }        }"
values: []
tags: [channelmeta,magento2]
type: "meta"
process: ""
headless: true
---