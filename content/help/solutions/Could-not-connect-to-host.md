---
title: "Could Not Connect to Host"
issue: "Could Not Connect to Host"
type: "solution"
seoTitle: "Could not connect to Host to post orders"
seoDescription: "The tunnel or network between Stock2Shop and your ERP is down or giving errors."
source: ""
channel: ""
fulfillment:""
process: "orders"
headless: true
---

#### Error description
The tunnel or network between Stock2Shop and your ERP is down or giving errors.

#### Error solution
- Check that the ERP server can access the internet.
- Check if services  "Apifact Tunnel" & "Apifact Connector" are running on the server:
   - Go to Windows search and type in "services" (On the source server where our Apifact software is installed)
   - Click on the services icon
   - Find the two services named "Apifact Tunnel" & "Apifact Connector".
   - Restart both services.
   - Confirm that the services are both running
- If on Syspro, confirm that the Enet Web services are running 
- Confirm if the Firewall is not blocking S2S.  
- Retry  the queue error


If the issue is not resolved, please contact support@stock2shop.com