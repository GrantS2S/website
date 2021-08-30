---
title: "What are the requirements for Stock2Shop Software (APIFACT)?"

---
 
## Introduction

These are the requirements of the ERP / accounting system server configurations in order to allow our Apifact services to communicate with the server
 
## General Access

1. S2S will never modify the Database table unless it's through the official Pastel SDK, to write orders back.
2. Our system continually runs the following query (every 3 minutes). It calculates the changes for each product and only sends that to our service.
3. It pages through a 1000 products each time and sends us chunks of 500 at a time.
4. The above are all variables which can be configured depending on your requirements/server specifications.
Again, these are:
Schedule: 3 mins
Page size: 1000
Max products returned: 500
5. S2S uses a secure SSL tunnel to communicate with the server running on the clients machine. This means we do not have issues with firewalls.
If this is against your policy, then Stock2Shop will not be able to assist.
Requirements
1. "Read-only" database user for accessing data
2. "Read-write" database user for the SDK
3.  Outgoing port 8080 must be open (this is outgoing so should pose no security violation)
Example basic SQL that gets executed 

{{< highlight sql >}}

SELECT * 
FROM   (SELECT Row_number() 
                 OVER ( 
                   ORDER BY Ltrim(Rtrim(st.code)))              AS n, 
               st.stocklink                                     AS 
                      "source_product_code", 
               st.stocklink                                     AS 
                      "source_variant_code", 
               Rtrim(Ltrim(st.code))                            AS 
               "variants.sku", 
               Isnull(st.description_1, '')                     AS "title", 
               ''                                               AS "collection", 
               Isnull(grp.description, '')                      AS 
               "product_type", 
               ''                                               AS "vendor", 
               ''                                               AS 
               "variants.option1", 
               ''                                               AS 
               "variants.option2", 
               ''                                               AS 
               "variants.option3", 
               ''                                               AS "body_html", 
               st.uiiiweight                                    AS 
               "variants.weight", 
               Isnull(st.bar_code, '')                          AS 
               "variants.barcode", 
               Cast(Isnull(st.qty_on_hand, 0) AS INTEGER)       AS 
               "variants.qty", 
               Cast(Isnull(st.qty_on_hand, 0) AS INTEGER)       AS "qty_on_hand" 
               , 
               Cast(Isnull(st.qtyonso, 0) AS INTEGER) 
               AS "qty_on_sales_order" 
                      , 
               Isnull(retail.fexclprice, 0)                     AS 
                      "variants.retail_price", 
               Isnull(trade.fexclprice, 0)                      AS 
                      "variants.trade_price", 
               Isnull(distributor.fexclprice, 0)                AS 
                      "variants.distributor_price", 
               'false'                                          AS 
                      "variants.inventory_management", 
               CASE 
                 WHEN Lower(Ltrim(Rtrim(Isnull(st.uliionline, '')))) = 
                      'active\publish' 
                      THEN 
                 'true' 
                 ELSE 'false' 
               END                                              AS 
               "product_active", 
               ''                                               AS "tags", 
               -- List of images for this product 
               -- Enables automatic pulling of new images when image is added 
               Isnull(Stuff((SELECT ',' + CONVERT(VARCHAR, i.idinvimage) 
                             FROM   _etblinvimages i WITH (nolock) 
                             WHERE  st.stocklink = i.istocklink 
                             ORDER  BY i.idinvimage 
                             FOR xml path ('')), 1, 1, ''), '') AS 
               "meta_image_id_csv" 
        FROM   stkitem st WITH (nolock) 
               -- General info 
               LEFT JOIN grptbl grp WITH (nolock) 
                      ON grp.stgroup = st.itemgroup 
               -- price lists 
               LEFT JOIN dbo._etblpricelistprices trade WITH (nolock) 
                      ON trade.istockid = st.stocklink 
                         AND trade.ipricelistnameid = 1 
                         AND trade.iwarehouseid = 0 
               LEFT JOIN dbo._etblpricelistprices distributor WITH (nolock) 
                      ON distributor.istockid = st.stocklink 
                         AND distributor.ipricelistnameid = 2 
                         AND distributor.iwarehouseid = 0 
               LEFT JOIN dbo._etblpricelistprices retail WITH (nolock) 
                      ON retail.istockid = st.stocklink 
                         AND retail.ipricelistnameid = 3 
                         AND retail.iwarehouseid = 0 
        WHERE  Lower(Ltrim(Rtrim(Isnull(st.uliionline, '')))) IN ( 
               'active\publish', 'delete\unpublish' )) AS rows 
WHERE  n > '%(audit_lower_limit)n' 
       AND n <= '%(audit_upper_limit)n'
       
{{< /highlight >}}