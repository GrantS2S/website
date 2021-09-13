---
title: "No Default Customer Code Given or Source Customer Code and Not Allowed to Create Customer"
issue: "Sage Business Cloud Accounting: Customer Code Error"
seoTitle: "No Default Customer Code Given or Source Customer Code and Not Allowed to Create Customer"
seoDescription: "Failed to create order on Sage One No Default Customer Code/Source Customer Code."
type: "solution"
source: "sage-business-cloud-accounting"
channel: ""
fulfillment: ""
process: "orders"
headless: true  
---

#### Error description
Failed to create order on Sage One

#### Error solution
As a result of the customer code, as specified in the accounting system, not having been entered in the required field in the sales channel, or the customer account not existing on Sage, the order can not sync through to the correct customer.

- Confirm whether you use a default customer code setup in Stock2Shop or if you use a field from your website for customer codes.
- If you use customers codes from your website for each customer:  Navigate to the customer on the website
	- Confirm that the customer code has been entered correctly in the requisite field
	- Either recreate the order or update the source customer code field on the customer in Stock2Shop and retry the order.
- Otherwise,  ensure the customer code is active in Sage.
- Retry the order errors if the customer is created in Sage after the error.