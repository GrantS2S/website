---
title: "Please enter a number 0 or greater in the \"price\" field in the \"group_price:[#]\" set. Resource data pre-validation error"
issue: "Magento 1.x: Resource data pre-validation error"
type: "solution"
seoTitle: "Magento: Resource data pre-validation error"
seoDescription: "A product requests a price list that is not assigned to it or not set to sync."
source: ""
channel: "magento-1"
fulfillment: ""
process: "products"
headless: true
---

#### Error description
A product requests a price list that is not assigned to it or not set to sync.  This occurs when S2S is syncing price lists to customer groups in Magento. 

#### Error solution
All products are available to all customer groups. This means that every product should have every price list set for every price group. If that's not the case on the site, then it is because of a specific module. The API still requires S2S to send a price for every customer group.

Once you have confirmed the queue error: 

1. Navigate to the queue error > view item > View Product 
2. Now that the product that is blocking the queue is open navigate to the VARIANTS tab > view all price lists
3. Check and confirm the SKU/s have all the price lists assigned - any price group price list must exist on the SKU even if the value is zero
4. Confirm which price list is missing and add it to the product in your ERP/Accounting system or S2S system if that's the workflow (If prices have been coded to exist by S2S then contact support@stock2shop.com to run an audit)
5. Wait for the sync from your ERP/Accounting system - confirm by checking if the product has the price list
6. Once the product has the price list, navigate to the queue error and click "Try Again"

Should all the price lists that relate to all the price groups exist on the product and the queue error is persisting then contact Support@stock2shop.com for further assistance