---
title: "Magento 1.x"
seoTitle: "Magento 1.x Getting Started"
seoDescription: "Integrate your Magento 1.x with supported ERP / Accounting Systems and 3rd Party Logistics services through Stock2Shop"
type: setup
source: "magento-1"
channel: ""
fulfillment: ""
---

## Magento 1.x
Magento 1.x is a self hosted eCommerce software solution. This means that you (or your developers) deploy and manage the system entirely.
The information below will guide you in confirming the Magento 1.x default REST API has been configured correctly and tested, 
and lastly that the Magento 1.x orders webhook has been setup. Stock2Shop requires all settings to be configured prior to configuration.

1. [Prerequisites](#prerequisites) 
2. [Sync products](#sync-products) 
3. [Raise Orders](#raise-orders) 

## Prerequisites {#prerequisites}
You will need to have a version of Magento 1.x already up and running that is accessible via the web.

## Syncing Products to Magento 1.x {#sync-products}
In order for Stock2Shop to communicate with Magento, it requires a Magento user with sufficient access. The steps below will assist you in creating such a user.

- Navigate to System > Web Services and select REST – Roles 
- Once in REST – Roles click Add Admin Role and fill in the Role Name (Admin) and click Save Role
- Click on Role API Resources and set Resource Access to All followed by Save Role

Once you have created an admin role, you need to create a user and assign the user admin rights:

- Navigate to System > Permissions and select Users 
- Click Add New User and fill in the User Info
- Navigate to User Role and check the radio button Administrators followed by Save User
- Navigate to REST Role and check the radio button Admin followed by Save User
- Navigate to System > Web Services and select REST – Attributes and click on the Admin line item to edit
- Under ACL Attribute Rules set Resource Access to All followed by Save
- Navigate to System > Web Services and select REST – OAuth Consumers and click on Add New 
- Set the Name to Stock2Shop and leave Key and Secret as is 
- Leave both the Callback URL and Reject Callback fields blank 
- Enter the Current Admin Password and click Save

Once this process has been completed, you will need to supply Stock2Shop with the following:

- Consumer Key
- Consumer Secret
- Magento Admin (Backend) URL
- Admin Username
- Admin User Password

Note, your Magento developers will be required to install the [Magento REST API Module](https://github.com/stock2shop/magento_module_rest "Stock2Shop Magento REST API Module") if you are planning on syncing configurable products from Stock2Shop to Magento 1.x. 

## Syncing Orders to Stock2Shop {#raise-orders}
Your Magento developers will be required to install the [Magento Webhook Module](https://github.com/stock2shop/magento_module_webhook "Stock2Shop Magento Webhook Module"). Thereafter once the webhook module has been installed and the endpoint defined, Stock2Shop can beging to receive orders.