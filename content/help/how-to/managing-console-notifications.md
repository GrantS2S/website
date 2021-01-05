---
title: "Managing console notifications"
type: "how-to"
seoTitle: "Managing console notifications"
seoDescription: "The S2S system has a notifications tool, this allows any person set to receive notifications for any errors and processed orders."
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-31T12:16:00+02:00
---
## Overview

The S2S system has a notifications tool, this allows any person set to receive notifications for any errors and processed orders.  

In the notifications panel there is a top level recipient/s that if set will receive all the notifications sent, in creating an override for specific notifications the top level recipient/s will then be removed from receiving the override specific notification.

![notification](/uploads/general-managing-console-notifications-1.png)

The notifications tool can be customised for specific email recipients to receive specific notifications, see below for guide to understand, navigate and set different notifications we call overrides.

## Navigating to Notifications

To navigate to the notifications settings follow the below steps:  
*(Already logged into the S2S console? [CLICK HERE](https://console.stock2shop.com/console/#/notifications))*

1. Login to the S2S console https://console.stock2shop.com/   
Should you not have login details contact Support@stock2shop.com
2. Once logged in, on the top right corner of the console, click "Settings" 
3. Then click "Manage notifications"

![](/uploads/general-managing-console-notifications-2.png)

## Types of Notifications

The below code is a breakdown of the types of email notifications that are sent by the S2S system, note that when a notification "interfaces" has "channel" and "source" this means that the notification would apply when syncing from/to those connectors, ie an error for adding an order to source (Creating an invoice) the notification can be set to send when it happens from a specific channel or to a specific source:

{{< highlight go >}}

{
	system_notification_names: [{
			name: "addChannelImageError",
			description: "Error adding image to channel",
			interfaces: [
				"channel"-- The sales channel
			]
		},
		{
			name: "addChannelProductError",
			description: "Error adding product to channel",
			interfaces: [
				"channel"-- The sales channel
			]
		},
		{
			name: "addChannelVariantError",
			description: "Error adding variant to channel",
			interfaces: [
				"channel"-- The sales channel
			]
		},
		{
			name: "addSourceOrder",
			description: "Order created at source",
			interfaces: [
				"channel",-- The sales channel
				"source"-- The ERP/Accounting system
			]
		},
		{
			name: "addSourceOrderError",
			description: "Error creating order at source",
			interfaces: [
				"channel",-- The sales channel
				"source"-- The ERP/Accounting system
			]
		},
		{
			name: "emailPricelist",
			description: "Email product export",
			interfaces: [
				"channel"-- The sales channel
			]
		},
		{
			name: "getSourceProducts",
			description: "Products fetched from source",
			interfaces: [
				"source"-- The ERP/Accounting system
			]
		},
		{
			name: "getSourceProductsError",
			description: "Error fetching products from source",
			interfaces: [
				"source"-- The ERP/Accounting system
			]
		},
		{
			name: "queueError",
			description: "Queue is blocked due to an error",
			interfaces: [
				"none"
			]
		},
		{
			name: "queueOrder",
			description: "New order received",
			interfaces: [
				"channel"-- The sales channel
			]
		},
		{
			name: "syncOrderError",
			description: "New order could not be processed",
			interfaces: [
				"none"
			]
		}
	]
}

{{< /highlight >}}

When receiving an email notification, view the name of the notification at the bottom of the email, this will assist in creating overrides:

![notification](/uploads/general-managing-console-notifications-3.png)
 
## Adding Notifications

As mentioned above, the top-level recipient/s will receive all system notifications, should a particular notification need to be sent to a different recipient, there is an override feature, this will then send all notifications of a particular type to the emails listed in the override and remove the notification from the top-level recipient.

Below is a case example of how notifications can be setup:

1. Dustin must receive all notifications, except queue errors 
2. Support must receive all queue error notifications
3. Sales must receive all order notifications from websites "Dusty Test B2B" and "Dusty Test Woo"
4. Admin must receive all order notifications from website "S2S Shopify"
5. Accounts must receive all "Created invoice in Sage One Test" notifications

![notification](/uploads/general-managing-console-notifications-4.png)

Key Points:

Note that Dustin has been added to all the overrides in order to receive those notifications, the reason for this is that when an override is created, it removes the notification from the top-level recipient.

Note how multiple recipients are added to a notification using a semi-colon and no spaces, eg:
"sales@stock2shop.com;dustin@stock2shop.com"    
as well as the receiver names:  
"Sales;Dustin"

Should anything be unclear or need assistance in configuring notifications, contact Support@stock2shop.com 