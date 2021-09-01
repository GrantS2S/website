---
title: ""
name: "channelmeta_magento2"
key: "configurable_product_map"
description: "Map used to create a configurable product, read the docs for all available properties of a Magento product. https://devdocs.magento.com/swagger/index.html"
user_friendly_description: ""
default: "{ 	&quot;product&quot;: { 		&quot;sku&quot;: &quot;{{id}}&quot;, 		&quot;name&quot;: &quot;{{title}}&quot;, 		&quot;attribute_set_id&quot;: &quot;{{params.attribute_set_id}}&quot;, 		&quot;status&quot;: 1, 		&quot;visibility&quot;: 4, 		&quot;weight&quot;: &quot;0.5&quot;, 		&quot;extension_attributes&quot;: { 			&quot;stock_item&quot;: { 				&quot;is_in_stock&quot;: true 			} 		}, 		&quot;custom_attributes&quot;: [{ 				&quot;attribute_code&quot;: &quot;description&quot;, 				&quot;value&quot;: &quot;{{{body_html}}}&quot; 			}, { 				&quot;attribute_code&quot;: &quot;exmaple&quot;, 				&quot;value&quot;: &quot;{{meta.example}}&quot; 			}, 			{ 				&quot;attribute_code&quot;: &quot;tax_class_id&quot;, 				&quot;value&quot;: &quot;2&quot; 			}, { 				&quot;attribute_code&quot;: &quot;multi_select_test&quot;, 				&quot;frontend_input&quot;: &quot;multiselect&quot;, 				&quot;default_frontend_label&quot;: &quot;Multi Select Test&quot;, 				&quot;value&quot;: &quot;aaa,yyy,zzz&quot; 			} 		] 	} }"
values: []
tags: [channelmeta,magento2]
type: "meta"
process: ""
headless: true
---