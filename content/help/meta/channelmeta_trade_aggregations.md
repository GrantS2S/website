---
title: ""
name: "channelmeta_trade"
key: "aggregations"
description: "Elastic Search style aggregation used for layered navigation. Examples includes all types of fields in S2S. This is used for filtering products."
user-friendly-description: ""
default: "{ 	&quot;Department&quot;: { 		&quot;nested&quot;: { 			&quot;path&quot;: &quot;meta&quot; 		}, 		&quot;aggs&quot;: { 			&quot;Department&quot;: { 				&quot;aggs&quot;: { 					&quot;Department&quot;: { 						&quot;terms&quot;: { 							&quot;field&quot;: &quot;meta.value&quot;, 							&quot;exclude&quot;: &quot;&quot;, 							&quot;order&quot;: { 								&quot;_term&quot;: &quot;asc&quot; 							}, 							&quot;size&quot;: 200 						} 					} 				}, 				&quot;filter&quot;: { 					&quot;term&quot;: { 						&quot;meta.key&quot;: &quot;department&quot; 					} 				} 			} 		} 	}, 	&quot;Collection&quot;: { 		&quot;terms&quot;: { 			&quot;field&quot;: &quot;collection&quot;, 			&quot;exclude&quot;: &quot;&quot;, 			&quot;order&quot;: { 				&quot;_term&quot;: &quot;asc&quot; 			}, 			&quot;size&quot;: 200 		} 	}, 	&quot;Product Type&quot;: { 		&quot;terms&quot;: { 			&quot;field&quot;: &quot;product_type&quot;, 			&quot;exclude&quot;: &quot;&quot;, 			&quot;order&quot;: { 				&quot;_term&quot;: &quot;asc&quot; 			}, 			&quot;size&quot;: 200 		} 	}, 	&quot;Brand&quot;: { 		&quot;terms&quot;: { 			&quot;field&quot;: &quot;vendor&quot;, 			&quot;exclude&quot;: &quot;&quot;, 			&quot;order&quot;: { 				&quot;_term&quot;: &quot;asc&quot; 			}, 			&quot;size&quot;: 200 		} 	}, 	&quot;Spare&quot;: { 		&quot;nested&quot;: { 			&quot;path&quot;: &quot;meta&quot; 		}, 		&quot;aggs&quot;: { 			&quot;Spare&quot;: { 				&quot;aggs&quot;: { 					&quot;Spare&quot;: { 						&quot;terms&quot;: { 							&quot;field&quot;: &quot;meta.value&quot;, 							&quot;exclude&quot;: &quot;&quot;, 							&quot;order&quot;: { 								&quot;_term&quot;: &quot;asc&quot; 							}, 							&quot;size&quot;: 200 						} 					} 				}, 				&quot;filter&quot;: { 					&quot;term&quot;: { 						&quot;meta.key&quot;: &quot;spare&quot; 					} 				} 			} 		} 	} }"
values: []
tags: [channelmeta,trade]
type: "meta"
process: ""
headless: true
---