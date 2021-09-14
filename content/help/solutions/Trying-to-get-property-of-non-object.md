---
title: "Trying to get property of non-object"
issue: "Shopify: Trying to get property of non-object"
type: "solution"
seoTitle: "Shopify: Trying to get property of non-object"
seoDescription: "The system can not find the products on Shopify"
source: ""
channel: "shopify"
fulfillment: "" 
process: "products"
headless: true
---

#### Error description
The system can not find the products on Shopify as ID of the products in the channels have been removed or there is no ID to update the variant.

#### Error solution


**Confirm the source of this error:**

- Navigate to *Queue -> View*
- On the left, in the listing of failed queue items, click the 3 dots -> *View item*
- Under "Instruction" the instruction should be "Update variant"
- Under "message" the message should be "Trying to get property of non-object"
- Click "View Product" -> "Channels"
- Confirm if there are any values entered for Channel product code or Channel variant code.
- If values are entered, compare to the product and variant codes on the website for a mismatch.
- Once the ID's have been written down, navigate to *Products > View*
- Search for the SKU's on the order one at a time > Once you find a SKU, click on the three dots > click *Edit*
- Navigate to the *CHANNELS* tab
- Compare the ID's for the SKU with the ID's stored on the product
- If the ID's match then move onto the next SKU
- If the ID's do not match then see below to resolve the error


**How to resolve the queue error** 

- Reset the product in S2S: 
    - *Products >View > Search > 3 dots > Edit. Select the *CHANNELS* tab
    - Click *REMOVE ALL* on channel that needs resetting 
    - Click Save on *GENERAL* and *VARIANTS* tab 
- This will prompt S2S to scan the website database for a matching SKU to establish new links to update against.
- You will need to skip the "Trying to get property of non-object and skip any further updates for this specific product if they were already in the queue (It can be multiple SKUs depending on the SKUs connected to the product).
- A new "Add" to Shopify queue item will appear at the back of the queue to re add the product to the website.

