---
title: "Source Terminology"
seoTitle: "Understanding source terminology relating to Stock2Shop"
seoDescription: "Dealing with many systems can get confusing. We have put together a guide for Stock2Shop source terms."
seoKeyword: ["Source Terminology"]
type: guides
tags: ["source"]
aliases:
    - 
---

#### Terminology
Below is a breakdown of commonly used terms related to sources in Stock2Shop

#### Source
This refers to the source of the information that we are receiving from ie: Accounting system; ERP; Flat File.

#### Source Order Code
This is the code that S2S receives from the source when raising an order on said source. This normally refers to an #Invoice; #Sale Order; #Quotation.

#### Source Customer Code
This is the code given to S2S from either the source or the channel, this is saved on the S2S console and refers to the account in the ERP that the order processes against.

#### Push
This is when the S2S software will automatically push any changes from the source to the S2S console on a regular sync. Standard is every 3 min.

#### Pull
This is when the S2S system fetches any information/changes from the source on a cron.

#### Cron
A command to the operating system or server for a job that is to be executed at a specified time.

#### Inventory Management
Most websites have a functionality to display “In Stock” or “Out of Stock” labels when a product has qty or not, this is called inventory management.

#### Workflow
The process for creating, enriching, removing products with particular preferences within the source.