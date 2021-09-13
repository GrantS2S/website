---
title: "Sync_order Trying to Get Property of Non Object"
issue: "B2B Trade Store: Trying to Get Property of Non Object"
seoTitle: "Sync_order Trying to Get Property of Non Object"
seoDescription: "Failed Order error. Stock2Shop cannot find the Product on the Order in the Console"
type: "solution"
source: ""
channel: b2b-trade-store"
fulfillment: ""
process: "orders"
headless: true
---

#### Error description
Orders fail to sync

#### Error solution
When the API sends the order to S2S our system does a couple of checks:
- Does the SKU exist in S2S
- Is the product correctly linked on the channel to the ID saved on S2S

In order to confirm the source of the queue error, follow the below steps, noting the channel ID's during the process:

- Login to the S2S console  
- Navigate to the Queue > View
- Click on the three dots of the order error > click "View Item"
- Scroll down on the payload to (line_items":)
- For each item on the order, write down the "channel_product_code"; "channel_variant_code" and "SKU" (See below example payload, note this may vary depending on how your system posts the order to the S2S API)
- Once the ID's have been written down, navigate to "Products" > "View"
- Search for the SKU's on the order one at a time > Once you find a SKU, click on the three dots > click "Edit"
- Navigate to the "CHANNELS" tab
- Compare the ID's for the SKU with the ID's stored on the product
- If the ID's match then move onto the next SKU
- If the ID's do not match then see below to resolve the error



Once the SKU's that are not linked have been found, follow the *link to a channel guide* to re-link the product accordingly

- Reset the product in S2S: 
    - Products >View > Search > 3 dots > Edit > CHANNELS tab
    - Click REMOVE ALL on channel that needs resetting 
    - Click Save on GENERAL and VARIANTS tab 
- This will prompt S2S to scan the website database for a matching SKU to establish new links to update against.
- You will need to skip the "Trying to get property of non-object and skip any further updates for this specific product if they were already in the queue (It can be multiple SKUs depending on the SKUs connected to the product).
- A new "Add" to channel queue item will appear at the back of the queue to re add the product to the website.
- Once the SKU has been re-linked accordingly, navigate to "Orders" > "View"
- Search for the order number found in the payload ( near the top of the payload labelled "name":)
- Click on the three dots of the order > click "View"
- Click "EDIT" near the top right of the order screen
- Then click "RESET" near the bottom left of the order
- Navigate back to the "Queue" > "View"
- Click on the three dots of the order error > Click "Try Again"
- The order should now process accordingly
