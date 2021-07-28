---
title: "400 Bad Request - Incorrect Postal Code"
type: "solution"
seoTitle: "400 Bad Request - Incorrect Postal Code"
seoDescription: "A postal code field included in the order from the channel has incorrect information."
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja"]
draft: true
date: 2020-12-30T11:57:00+02:00
---
<!-- Action: fulfill_order -->
#### Error description
A postal code field included in the order from the channel has incorrect information.

#### Error solution
Parcelninja cannot process this order as it does not recognize that postal code. Check for extra digits or characters.

Update the postal code in the fulfillment tab of the order on S2S

1. Go to: S2S Console > Queue > View > Find queue error > View Order
2. Go to: Fulfillment tab > Fulfill 
3. Update the incorrect postal code 
4. Click fulfill order

Go back to the queue and skip the fulfillment queue error as you manually processed the fulfillment
