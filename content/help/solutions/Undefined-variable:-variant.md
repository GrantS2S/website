---
title: "Undefined variable: variant"
type: "solution"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["woocommerce"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-29T09:26:00+02:00
---

<!-- Action: sync_order -->

#### Error description
There is a sku on the order that does not exist in S2S.

#### Error solution
 You need to identify the SKU and resolve what action to take

##### How to find the offending SKU

1. Login to S2S console
2. Navigate to Queue > View
3. Click on the three dots of the error > Click "View Item"
4. Scroll down in the grey block and look for 

{{< highlight go >}}
"sku": "xyz"
{{< /highlight >}}

5. Search each sku in S2S under products to find which sku is causing the error. The offending sku will not be found in S2S.

Note to look through all the sku's on the order to ensure there is not more than one.

##### Resolve which action to take

Once you have found which sku is not syncing to S2S, there would be a couple of ways to resolve the error, first confirm if the sku should be syncing from your ERP/Accounting system

1. Mark the sku as Active to sync using your S2S Active field in the ERP/Accounting System
2. Wait for the product to sync through to S2S and link to the channel
3. Navigate to the queue error and click "Try Again"

Should you want S2S to create the sku from the order, contact [Stock2Shop Support](mailto:supoprt@stock2shop.com) to assist.