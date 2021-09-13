---
title: "Testing with Postman"
issue: "WooCommerce: Test your Stock2Shop integration with Postman"
seoTitle: "Test your Stock2Shop WooCommerce integration with Postman"
seoDescription: "How To: Test your WooCommerce integration using Postman"
type: "solution"
source: ""
channel: "woocommerce"
fulfillment: ""
process: products
headless: true
---

#### Why test with Postman 

The primary reason to test via Postman would be to confirm functionality via the API and troubleshoot S2S update issues. If tests via Postman are successful while updates from S2S fail, then the issue may be with be S2S configuration. If Postman fails it means your API on the server is configured incorrectly.

#### Requirements

To test, it is required to have: the API keys, as well as the API url.

#### GET

It is advised to first test via a GET to establish of data can be retrieved, before any further tests. This is done by creating a request and filling in the API URL, including the product_id (only if you fetching a specific product) to be fetched. Additionally, under the "Auth" tab, the type should be set to "No Auth". 

(Note: No Auth is to be used when authorising using "Query_Params". If using "Basic Auth" then Username and Password will need to be entered.)

- In url, enter GET https://domain/wc-api/v3/products

- under "Params", enter the consumer key and consumer secret.
- Under "Headers", enter a "Content-Type" of "application/json"


Click send, and a response should be received of status: "200 OK", and a listing of product data in JSON format.


## POST

When API functionality is confirmed via a GET, further testing can be conducted by creating a product via a POST query.
In Postman, the settings will remain the same as with a GET request, but the request type will be changed to "POST". The ID wont be added as the sku does not exist yet


Under "Body" select the "Raw" radio button and "JSON(application/json)" from the dropdown.
Enter the product data to be updated in JSON format, according to the API documentation (In this solution, WooCommerce is used - see example payload / fields to [create a product on WooCommerce API](https://woocommerce.github.io/woocommerce-rest-api-docs/#create-a-product) ). 



There should then be a response of "200 OK" confirming that the product was created successfully, or an error response if not. Test by logging into WooCommerce backend to confirm the sku/product was created

## PUT

When API functionality is confirmed via a GET, further testing can be conducted by updating a product via a PUT query.
In Postman, the settings will remain the same as with a GET request, but the request type will be changed to "PUT". The ID in URL will be needed to update the specific product


Under "Body" select the "Raw" radio button and "JSON(application/json)" from the dropdown.

Enter the product data to be updated in JSON format, according to the API documentation (In this solution, WooCommerce is used - see example payload / fields to [update a product on WooCommerce API, change the value in a field  and test](https://woocommerce.github.io/woocommerce-rest-api-docs/#update-a-product) 


There should then be a response of "200 OK" confirming that the product was created successfully, or an error response if not. Test by logging into WooCommerce backend to confirm the sku/product was created