---
title: "How do I manage my customer details and logins"
description: "This B2B Trade store guide should assist in understanding the S2S trade platform, how to navigate the admin console, manage customer details and provide your customers with a guide to setting up their own password." 
image: ""
---

## Overview

This B2B Trade store guide should assist in understanding the S2S trade platform, how to navigate the admin console, manage customer details and provide your customers with a guide to setting up their own password.

The S2S Trade platform is built to work directly with the S2S console, in this way the customers loaded into S2S are the only persons that would have logins to the trade store, and each customer would have their own pricing and qty available.

This is normally configured during your setup of the integration, note that depending on the ERP/Accounting system that is used by your company, will determine whether we can sync the customers directly from the source or manually upload them into S2S (See below: Adding a new Customer)

Login URL's:

1. S2S Admin Console - https://console.stock2shop.com/
2. S2S Trade Store (For your customers) - https://b2b.stock2shop.com/  

## Navigating Customers

To navigate to the customers that have been loaded into the S2S console follow the below steps:

1. Login to the S2S admin console at this URL https://console.stock2shop.com/ - should you not have logins, contact Support@stock2shop.com
2. On the top navigation hover over Customers > click "View"
3. Use the filters to display the customers assigner to the specific trade store, see below screenshot as an example, noting the first filter should be "Active Customers" the second filter should be the channel/trade store of the customer you are looking for
4. Alternatively search using customer name or account code

![manage customer details and logins](/uploads/b2b-how-do-I-manage-my-customer-details-and-logins-1.png)

This should then display a list of customers or the customer you have searched for, the fields/columns on this display are limited, These columns are: 

**Name** - This would be the first and last name of the b2b user/contact  
**Company** - This is the company of the account and is populated in Address1  
**Email** - This is the email of the b2b user/contact  
**Channel Code** - This is the trade store ID of the customer (Internal ID for the S2S system)  
**Source Code** -   This is the account code as per the ERP/Accounting system (This must be exact as per the source)  

If you or reps within your company would like to place an order on behalf of a customer of your business you can access their trade store using the S2S admin console, follow the above steps to find the customer you wish to sign in on behalf of:
1. Click on the three dots of the customer > click "B2B Login"

![manage customer details and logins](/uploads/b2b-how-do-I-manage-my-customer-details-and-logins-3.png)

2. This will then redirect you to the B2B login page, you will not have to type in a username and password because you are logging in from the admin platform, you can now create an order for that customer and it should process accordingly.

## Customer Details

Should there be any customer details that is not syncing directly from the ERP/Accounting system that is needed on the customer for the trade store or update details like address (Shipping or Billing), account code the below will assist in how to add the information to the customer

1. Navigate to customers 
2. Search for the customer you wish to update
3. Click on the three dots of the customer > click "Customer"

![manage customer details and logins](/uploads/b2b-how-do-I-manage-my-customer-details-and-logins-2.png)

4. This will open the customer detail, be aware of which fields are being updated from your ERP/Accounting system
5. Edit the fields you wish to update, see below screenshot and points to assist:

![manage customer details and logins](/uploads/b2b-how-do-I-manage-my-customer-details-and-logins-4.png)

1. This is the trade store that the customer is linked to when created
2. This would be the price tier assigned to this customer, Default would be the price list assigned to the channel itself
3. This is the warehouse that the customer would order against, Default would be the warehouse that is assigned to the channel itself
4. This is the ERP/Accounting system that the customer is linked to/ syncing from
5. This is the customer account code as per the ERP/Accounting system, note this must be exact
6. First and last name and email of the user/contact
7. This is the username of the user/contact for this customer account, note this cannot be changed and is auto generated
8. Should this box be ticked and the customer saved, it will send an email invite to the email address in (6) with their username and a link to create a password
9. Select an existing address that has been loaded/synced to S2S either to view or edit
10. Choose whether the address is a billing or shipping address

## Adding New Customer/s

When adding new customers to S2S it is important to know your workflow, if S2S is automatically syncing customers from your ERP/Accounting system then you would need to activate the customer in your ERP/Accounting system using the customers active field, if you are unsure contact Support@stock2shop.com

Should your workflow require you to manually add customers to S2S, follow the below guide:

To add directly in the console:

1. Login to the S2S admin console
2. Hover over "Customers" > click "Add"
3. Proceed to create the customer, ensure you understand the fields as they request, using the above as reference (Customer Detail) 

To add multiple customers using a bulk import:

1. Download the template attached or navigate to "Customers" > click "Import" > click the link to download the template
2. Populate the template accordingly, paying special attention to the "source_customer_code" - this is the account code as per the ERP/Accounting system and must be exact
3. Once you have populated the sheet accordingly ensure you export the sheet as a plain csv
4. Navigate to "Customers" > click "Import"
5. Select the source(ERP/Accounting System) that the customer list should be linked to 
6. Select the channel (B2B trade store) that the customers should be linked to, should you have multiple trade store, create separate sheets to import per channel (B2B Trade store)
7. Ensure that "Ignore new customers" is not ticked
8. Click "BROWSE" to select the csv from your computer that you have just populated 
9. Click "IMPORT"

Once complete you should see a report of the import showing how many customers were added successfully.

## Manage Customer Login

Managing your customer logins is important and S2S would recommend that your customers should create their own passwords, however should you need to reset a password see below:

1. Navigate to customers 
2. Search for the customer you wish to update
3. Click on the three dots of the customer > click "Customer"
4. You can then create a password for that user in the "Password" field
5. Retype the password in "Confirm Password" field
6. Click "SAVE"
7. Send your customer their Username (Found above the "Password" field) and the password you just created

Alternatively instead of creating a password manually you can tick the box "Send email Invite?", this will then send an email to the email address listed with their username and a link to reset their password (see example below):

![manage customer details and logins](/uploads/b2b-how-do-I-manage-my-customer-details-and-logins-5.png)

The link will redirect the client to a page to reset their password, note that this link can only be used once and does expire.

The below Customer Guide can be sent to your customers to assist in resetting their own password and a brief on the landing page of the trade store, copy and paste to your email and ensure you replace all the [] with the detail required.

## Customer Guide

**The below is a guide to resetting your password and an overview of the Trade store welcome page**

To reset your password you can either contact us at **[INSERT CONTACT EMAIL OR NUMBER]** or follow the below steps:

1. Navigate to https://b2b.stock2shop.com/ 
2. Click "Forgot password?" link
3. Enter your username - should you not know your username contact us at [INSERT CONTACT EMAIL OR NUMBER] and request your trade store username
4. Enter your username > click "Reset"
5. you will then be sent an email with a link to reset your password

![manage customer details and logins](/uploads/b2b-how-do-I-manage-my-customer-details-and-logins-5.png)

6. Click the link in the email > proceed to populate your new Password and confirm the password
7. Click "RESET PASSWORD"

Note that the link does expire and can only be used once

8. Your password should now be reset > Proceed back to https://b2b.stock2shop.com/ 
9. Login using your new password
10. Should the password not work repeat the process ensuring to use the new email link

## Navigating the Trade Store

Once signed in to the Trade Store there are some key links, see below:

1. Top Menu 
    - Log Out - Link to logout of the Trade Store  
    - Home - To navigate back to the welcome page  
    - Order - Quick order link - Should you know the sku's you wish to order, use the quick order feature   
    - Orders - Link to view previous orders you have placed  
    - Items - Cart - Link to the cart page - every product you add to your cart will be listed   
2. Search box to easily search by Title, sku or description
3. Link to your profile page where you will find certain information on your account
4. Layered Navigation - Search for products by category or view entire catalogue

![manage customer details and logins](/uploads/b2b-how-do-I-manage-my-customer-details-and-logins-6.png)

[Download Customer Template](/attachments/Customer-Template.csv)