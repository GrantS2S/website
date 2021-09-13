---
title: "SDK Type mismatch (String Data, Boolean& AdditionalCostInvoice)"
issue: "Sage 50cloud Pastel Partner: SDK Type mismatch (String Data, Boolean& AdditionalCostInvoice)"
seoTitle: "SDK Type mismatch (String Data, Boolean& AdditionalCostInvoice)"
seoDescription: "Orders fail to be raised at the source after a long running task."
type: "solution"
source: "sage-50cloud-pastel-partner"
channel: ""
fulfillment: ""
process: "orders"
headless: true
---

#### Error description
Orders fail to be raised at the source after a long running task.

#### Error solution
When trying to raise an order at source Apifact is trying to send values with a " , " in it instead of a " . ". This causes a long-running task which inevitably fails. 

A change will need to be made on the server Sage 50cloud Pastel Partner is installed on. Follow the steps below to resolve the queue error:

- Go to Windows search and click "Run..." 
- In the search box or Run window, type the following "regedit" and press enter
- Go to HKEY_USERS > DEFAULT > Control Panel > International 
- Look for "sMonDecimalSep"
- Double click on "sMonDecimalSep" and edit it from a " , " to a " . "

Depending on your version of Windows, and how it's configured, you may see a User Account Control dialogue box where you'll need to confirm that you want to open Registry Editor.

- Go to Windows search and type in "services"
- Click on the service's icon
- Find the two services named "Apifact Tunnel" & "Apifact Connector".
- Restart both services.
- Confirm that the services are both running

Once the Apifact services have been restarted, you will need to retry any queue errors that have accumulated.

