---
title: "Omni accounts - getting started"
seoTitle: "Installing Stock2Shop for Omni Accounts"
seoDescription: "Set up instructions for integrating Omni Accounts to multiple systems, such as Magento, Shopify, WooCommerce and your B2B trade store. Step by step instructions from Stock2Shop on how to integrate your applications for maximum efficiency. Find out more!"
draft: true
aliases: "/documentation/getting-started/omni-accounts-install/"
---

## Introduction

Omni Accounts is a client-side ERP system. This means the Omni Accounts application is installed on a server at your office, on your actual work computer or on a server in the cloud. In order for Stock2Shop to provide you with the full integration capabilities and link Omni Accounts to other sales channels and fulfilment services such as Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, Parcel Ninja and Takealot, we need to install software on the server or computer where your Omni Accounts is set up.

## What we need from you

### For Accessing Your Database

In order to communicate with your Omni Accounts database, we require the following information:

*   Database name
*   Database UID
*   Database PWD
*   Omni Accounts Company name
*   Omni Accounts Username
*   Omni Accounts Password

Additionally, please contact your Omni Accounts support team to confirm you have the relevant requirements in order to integrate your Omni Accounts ERP:

*   [Automation switch (SF187)](https://www.omniaccounts.co.za/switch/omni-automation)
*   [Imports sales document switch (SF109)](https://www.omniaccounts.co.za/switch/import-sales-documents)
*   A dedicated Omni Accounts User License with Admin rights for Stock2Shop
*   Upgrade to Omni Accounts v7.13.63 3345 or later

### For Accessing Your Server

In order for Stock2Shop to access the data inside of your Omni Accounts database and integrate this into other applications, our software has to be installed on the server or computer that has direct access to the Omni Accounts database. There are three ways for you to grant us access to install our software on your server:

*   Microsoft Remote Desktop ([See here](https://support.microsoft.com/en-za/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection))
*   AnyDesk ([See here](https://anydesk.com/en/downloads/))
*   Teamviewer ([See here](https://www.teamviewer.com/en/))

The below must be taken into consideration to ensure we can manage information on a continual basis:

*   Outgoing port 8080 should be open.
*   The server must always be online.
*   The user must have full admin rights.

### For Raising Orders

If you require Stock2Shop to insert sales orders or invoices into Omni Accounts, we require the REST web service to be activated and running. Follow the steps below to set up:

*   Step 1: Find the OmniWebServiceREST and open it. This is usually located in c:/Omni/System
*   Step 2: Do not close rest service, just minimise:

## What???s next
Below is an overview outlining the next steps:

1. Data Discussion
    - Discuss product configuration
    - Discuss customer configuration
    - Discuss order configuration
    - Prerequisite for raising orders in Omni Accounts
2. Install Stock2Shop Software
3. Initiate Sync to Stock2Shop
4. Test channel integration (products / orders)

{{< class alert alert-primary >}}
Data Discussion **(Step 1)** will be scheduled by one of our technicians
{{< /class >}}

Any questions? [Contact us](/contact-us) ??? we???re happy to help.