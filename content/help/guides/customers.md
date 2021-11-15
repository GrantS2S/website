---
title: "Customers"
seoTitle: "Stock2Shop Customer walk through."
seoDescription: "Guide to working with customers in the Stock2Shop console."
seoKeyword: [""]
type: guides
tags: ["console"]
draft: false
aliases:
    - 
---

You can view, add and update information about your customers directly on your Stock2Shop console. 
If you need to add additional or custom information to your products this can be achieved by adding customer attributes.

- [View customers](#view-customers)
- [Add customer](add-customer)
- [Add customer attributes](#add-attributes) 
- [Add segment](#add-segment)
- [Edit a customer](#edit-customer)
- [Import customers](import-customer)
- [Agent B2B login](#agent-login)

## View customers {#view-customers}
Once you have customers in Stock2Shop there are a few ways in which you can view, search and filter for products.

To simply view a list of your customers:

1. From your Stock2Shop console, go to Customers > View.
2. You can then sort your customers by date created or modified.
3. You can also set the number of customers to display per page, either 10, 20 or 50.

To search for a specific customer:

1. From your Stock2Shop console, go to Customers > View.
2. Add the ID, Channel Code, Source Code or Company, Customer or Trade Username to the search bar.
3. Click Search and the most relevant results will be returned.

To filter for a specific order or orders:

1. From your Stock2Shop console, go to Customers > View.
2. Click Filters.
3. Apply filters based on Customers:
    - Linked to a certain channel.
    
---

## Add customer {#add-customer}
To add a customer manually via your Stock2Shop console:

1. From your Stock2Shop console, go to Customers > Add.
2. Select the [channel](/help/guides/channel "What are sales channels in Stock2Shop") you will be adding the customer to.
3. Select the [source](/help/guides/source "What is a source in Stock2Shop") the customer will be linked to.
4. Fill out the following sections:
    - Set the Source Customer Code.
    - Set the Price Tier the customer should be assigned to or leave as default.
    - Set the Warehouse the customer is assigned to or leave as default.
    - Add the customer First Name.
    - Add the customer Last Name.
    - Add the customer email.
    - select whether the client should receive an email invite.
    - Add a password and password confirmation.
5. Click Save.

Note: We only support adding customers to our the Stock2Shop B2B Trade Store channel.

---

## Add customer attributes {#add-attributes}
After you have added customers to Stock2Shop, you can enrich them by adding any other additional customer information that is necessary to your integration using attributes. 

1. From your Stock2Shop console, go to Customers > View.
2. Search for the customer you would like to add attributes to.
3. Click on the three vertical dots and click Customer.
4. Click on the Attributes tab.
5. Under Add Custom Attribute, define the attribute key or the name of the attribute.
6. Add the value of the attribute.
7. Click Add.

---

## Add segment {#add-segment}
To add a segment to a customer to limit what they are ale to view on the B2B Trade Store.

1. From your Stock2Shop console, go to Customers > View.
2. Search for the customer you would like to add a segment to.
3. Click on the three vertical dots and click Customer.
4. Click on the Segments tab.
5. Add a segment type of Products.
6. Select the filed the segment should be applied to.
7. Set the operator to either:
    - Equal
    - Greater Than
    - Less Than
8. Click Save

To understand the concept of segments, [read here](/help/guides/segments "What are segments and how to use them?").

---

## Edit a customer {#edit-customer}
After you have added customers, you can edit them to change their titles, descriptions, categorisations, prices, warehouses and any other product details.

1. From your Stock2Shop console, go to Customers > View.
2. Search for the customer you would like to edit.
3. Click on the three vertical dots and click Customer.
4. Modify the [customer](/help/guides/customer/ "Understanding customers in Stock2Shop") details.
5. Click Save.


---

## Import customers {#import-customer}
Importing of customers can be used to bulk add customers to your Stock2Shop console. To add new customers to your Stock2Shop console:

Preparing the customer data to import into Stock2Shop:

1. From your Stock2Shop console, go to Customers > Import.
2. Download the example Customer CSV file.
3. Open the Customer export in a spreadsheet application (Google Sheets / Microsoft Excel).
4. Populate the necessary columns and export as a CSV file.


Importing the customer data into Stock2Shop:
1. From your Stock2Shop console, go to Customers > Import.
2. Select the source you will be importing against.
3. Select the channel you will be importing against.
4. Ensure Ignore new customers is deselected.
5. Click Browse and select the CSV file you would like to import.
6. Click import.

By default the only the following customer fields can be imported in bulk:

```
source_customer_code
first_name
last_name
email
accepts_marketing
note
send_email_invite
password
password_confirmation
address1.address1
address1.address2
address1.city
address1.company
address1.first_name
address1.last_name
address1.phone
address1.province
address1.country
address1.zip
address1.country_code
address1.province_code
```

---

## Agent B2B login {#agent-login}
You can log into your customers B2B Trade Store on their behalf and place orders for them.

1. From your Stock2Shop console, go to Customers > View.
2. Search for the customer you would like to login as.
3. Click on the three vertical dots and click B2B Login.
4. An Agent login window will appear, click Login.

You are now logged into your clients B2B Trade Store and assumed their identity.

---
