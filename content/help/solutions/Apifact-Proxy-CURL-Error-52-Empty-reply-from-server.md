---
title: "Apifact Proxy CURL Error: 52, Empty reply from server "
issue: "Apifact Proxy CURL Error: 52, Empty reply from server"
type: "solution"
seoTitle: "No connection to the ERP server"
seoDescription: "There was no response from the Server when trying to send an Order from Stock2Shop."
source: ""
channel: ""
fulfillment: ""
process: "orders"
headless: true
---
<!-- Action: create_order -->

#### Error description
An order failed to create on the ERP

#### Error solution
The communication between Stock2Shop and the ERP server or Apifact services is offline.

1. Attempt to retry the queue item after a brief period, as it may stem from a temporary loss of communication. 
2. Check if communication with server works using the following endpoint:  `https://[client_name].apifact.com:8000/` 
    - Update client_name with the tunnel name for the client, which can be found on the advanced source settings on the client's console in the tunnel_host setting. 
    - Settings > Manage Sources > 3 Dot menu on the source > Edit - Advanced > tunnel_host 
3. Check if the ERP server can communicate with the internet. 
4. If this does not resolve the error, then the Apifact services would likely need to be restarted:
    - Go to Windows search and type in "services" (On the source server where our Apifact software is installed)
    - Click on the services icon
    - Find the two services named "Apifact Tunnel" & "Apifact Connector".
    - Restart both services.
    - Confirm that the services are both running

