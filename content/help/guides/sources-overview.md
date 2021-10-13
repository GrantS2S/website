---
title: "Sources Overview"
lead: "Sources in Stock2Shop is the term used for the source of your product and customer information"
seoTitle: ""
seoDescription: ""
type: guides
tags: ["source"]
aliases:
    - /documentation/key-concepts/sources/
weight: 1
---

## What are sources?
A Stock2Shop source is where we get product / inventory information from or push sales orders to. 

There are two different types of sources on Stock2Shop: “primary sources” and “linked sources“.

## What is a linked source?
A linked source is a source that can only be used to update product information (to a primary source).
Sales orders cannot be sent to linked sources, only to primary sources.

For example, you may need to update product inventory information that is not available from the primary source.

In this case, you may use Sage Pastel Partner as a primary source of inventory information, which includes product codes, price lists and stock availability. You push sales orders back to your Sage Pastel Partner primary source.
You may also have a Google Sheet “linked source”, which is linked to your Sage Pastel Partner primary source. 

On the Google Sheet linked source, you maintain additional product information, such as product titles, categories, images and any other product attribute you require.

## How do you know if your source is supported?
Below is a list of sources currently supported by Stock2Shop:

- Dolfin
- Flat File
- iQ Retail
- iSync
- Microsoft Dynamics NAV
- Omni Accounts
- Sage 50cloud Pastel Partner
- Sage 50cloud Pastel Xpress
- Sage 100 Evolution
- Sage 200 Evolution
- Sage 300cloud
- Sage X3
- Sage Business Cloud Accounting
- SAP Business One
- Syspro
- Custom Database





    


