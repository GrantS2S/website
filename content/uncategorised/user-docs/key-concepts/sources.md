---
title: "product and inventory data sources for system integration"
heading: "Stock2Shop sources"
description: "Stock2Shop integrates into various different ERP or accounting systems (Sage, SAP, iSync and SYSPRO). Here's all you need to know about set up and configuration of product and inventory data sources, for efficient system integration."
lead: "What do we mean when we say sources? The source of information. Here’s all you need to know about Stock2Shop sources."
aliases: "/documentation/key-concepts/sources/"
toc: false
menu:
  docside:
    parent: Key Concepts
    name: Sources
---

What do we mean when we say sources? The source of information. Here’s all you need to know about Stock2Shop sources.

* * *

## What is a source?

A Stock2Shop source is where we get product / inventory information from or push sales orders to. There are two different types of sources on Stock2Shop: “primary sources” and “[linked sources](/documentation/key-concepts/linked-sources/)“.

* * *

## What sources are available?

Stock2Shop provides connections to various different sources. Some of these sources allow sales orders to be raised, others do not.  
  
Currently, Stock2Shop supports the following sources:

*   Sage Pastel Partner (allows sales orders)
*   Sage Evolution (allows sales orders)
*   Sage Accounting – formerly Sage One (allows sales orders)
*   Sage Financials – formerly Sage Business Cloud Financials (allows sales orders)
*   iSync (allows sales orders)
*   Any SQL database (allows sales orders)
*   Any flat file format (no sales orders)
*   Google Sheets (no sales orders)

* * *

## Set up and Configuration

You can have multiple different sources or just one source.  
  
For example, you may have multiple different sources if your business has branches or stores each with their own accounting / ERP system. In this case, you may want to have one platform to sell your products off (Stock2Shop) and automatically push sales orders into the appropriate source.  
  
If you have multiple different sources, you need unique product codes (SKUs) per source. Orders can then be pushed into the various sources as they are received.

* * *

## What is a Linked Source?

A linked source is a source that can only be used to update product information (to a primary source).  
Sales orders cannot be sent to linked sources, only to primary sources.  
  
For example, you may need to update product inventory information that is not available from the primary source.  
  
In this case, you may use Sage Pastel Partner as a primary source of inventory information, which includes product codes, price lists and stock availability. You push sales orders back to your Sage Pastel Partner primary source.  
You may also have a Google Sheet “linked source”, which is linked to your Sage Pastel Partner primary source. On the Google Sheet linked source, you maintain additional product information, such as product titles, categories, images and any other product attribute you require.  
  
Find out more about [linked sources](https://www.stock2shop.com/documentation/key-concepts/linked-sources/).