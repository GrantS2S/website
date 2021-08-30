---
title: "Authentication"
seoTitle: "Stock2Shop API - Authentication"
seoDescription: "How to authenticate your server for API requests"
aliases: "/documentation/developers/authentication/"
weight: 20
---

Stock2Shop uses a token based system for accessing our API.
Each request sent to our API needs a valid token.

Authentication is the process of providing a valid username and password to Stock2Shop and receiving a token in return.
This token is then used on subsequent requests to our API.

Tokens should be treated as ephemeral. If you are developing an application you need to automate your authentication process in the case your token becomes invalid. 
Authenticating a user means all previous tokens for the user will be invalidated. 

The endpoint to authenticate is [here](https://app.stock2shop.com/docs/#!/users/authenticateUser_post_1)

You can explore our interactive documentation by pasting the resulting token from the above request in the “api_key” text field at the top of this page:

[Interactive API documents](https://app.stock2shop.com/docs/)