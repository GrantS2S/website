---
title: ""
name: "channelmeta_trade"
key: "checkout_fields"
description: "List of fields to display at checkout. Fields can be required or not and can be set to order params or directly on the order, see example for default."
user-friendly-description: ""
default: "{ 	&quot;notes&quot;: { 		&quot;description&quot;: &quot;Notes&quot;, 		&quot;type&quot;: &quot;textarea&quot;, 		&quot;required&quot;: true, 		&quot;value&quot;: &quot;&quot;, 		&quot;min_chars&quot;: 5 	}, 	&quot;params.customer_reference&quot;: { 		&quot;description&quot;: &quot;Customer Reference&quot;, 		&quot;type&quot;: &quot;text&quot;, 		&quot;required&quot;: true, 		&quot;value&quot;: &quot;&quot;, 		&quot;min_chars&quot;: 30, 		&quot;max_chars&quot;: 50 	}, 	&quot;params.default_warehouse&quot;: { 		&quot;description&quot;: &quot;Example Select&quot;, 		&quot;required&quot;: true, 		&quot;type&quot;: &quot;dropdown&quot;, 		&quot;value&quot;: &quot;&quot;, 		&quot;options&quot;: [{ 			&quot;key&quot;: &quot;Select Heading&quot;, 			&quot;value&quot;: &quot;&quot; 		}, { 			&quot;key&quot;: &quot;Option 1&quot;, 			&quot;value&quot;: &quot;ABC&quot; 		}, { 			&quot;key&quot;: &quot;Option 2&quot;, 			&quot;value&quot;: &quot;XYZ&quot; 		}] 	}, 	&quot;params.abc&quot;: { 		&quot;description&quot;: &quot;Example Text Field&quot;, 		&quot;type&quot;: &quot;text&quot;, 		&quot;required&quot;: true, 		&quot;value&quot;: &quot;abc&quot;, 		&quot;min_chars&quot;: 10, 		&quot;max_chars&quot;: 10 	}, 	&quot;params.xyz&quot;: { 		&quot;description&quot;: &quot;Example Checkbox&quot;, 		&quot;type&quot;: &quot;checkbox&quot;, 		&quot;required&quot;: false, 		&quot;value&quot;: true 	}, 	&quot;params.edf&quot;: { 		&quot;description&quot;: &quot;Example Text Area&quot;, 		&quot;type&quot;: &quot;textarea&quot;, 		&quot;required&quot;: false, 		&quot;value&quot;: &quot;abc xyz edf&quot;, 		&quot;max_chars&quot;: 100 	}, 	&quot;params.due_date&quot;: { 		&quot;description&quot;: &quot;Example date field&quot;, 		&quot;type&quot;: &quot;date&quot;, 		&quot;required&quot;: false, 		&quot;value&quot;: &quot;&quot; 	} }"
values: []
tags: [channelmeta,trade]
type: "meta"
process: ""
headless: true
---