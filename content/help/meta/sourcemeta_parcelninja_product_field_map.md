---
title: "Map your product fields"
name: "sourcemeta_parcelninja"
key: "product_field_map"
description: "Field mapping between S2S and parcel ninja using handlebars. Source product code will be added in transform by default"
user_friendly_description: "Map the product fields in Parcelninja to product fields in Stock2Shop when syncing products."
default: "{ 	&quot;source&quot;: { 		&quot;source_product_code&quot;: &quot;{{itemNo}}&quot;, 		&quot;product_active&quot;: &quot;true&quot; 	}, 	&quot;product&quot;: { 		&quot;title&quot;: &quot;{{name}}&quot;, 		&quot;variants&quot;: { 			&quot;source_variant_code&quot;: &quot;{{itemNo}}&quot;, 			&quot;qty&quot;: &quot;{{instock}}&quot;, 			&quot;sku&quot;: &quot;{{itemNo}}&quot;, 			&quot;inventory_management&quot;: true 		} 	} }"
values: []
tags: [sourcemeta,parcelninja]
type: "meta"
process: "products"
headless: true
---