---
title: ""
name: "sourcemeta_dolfin"
key: "product_request_map"
description: "SOAP Url endpoint used to request products"
user_friendly_description: ""
default: "&lt;soap:Envelope xmlns:soap=&quot;http://www.w3.org/2003/05/soap-envelope&quot; xmlns:tem=&quot;http://tempuri.org/&quot;&gt;
            &lt;soap:Header xmlns:wsa=&quot;http://www.w3.org/2005/08/addressing&quot;&gt;
                &lt;wsse:Security xmlns:wsse=&quot;http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd&quot; xmlns:wsu=&quot;http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd&quot;&gt;
                    &lt;wsse:UsernameToken&gt;
                        &lt;wsse:Username&gt;STOCK2SHOP&lt;/wsse:Username&gt;
                        &lt;wsse:Password&gt;xxx&lt;/wsse:Password&gt;
                    &lt;/wsse:UsernameToken&gt;
                &lt;/wsse:Security&gt;
                &lt;wsa:Action&gt;http://tempuri.org/IEnquiryInterface/ProcessXML&lt;/wsa:Action&gt;
                &lt;wsa:To&gt;https://trpsksuatlab.mychain.co.za:8888/DolfinInterface.Webservices.TRP/EnquiryInterface.svc&lt;/wsa:To&gt;
            &lt;/soap:Header&gt;
            &lt;soap:Body&gt;
                &lt;tem:ProcessXML&gt;
                    &lt;tem:query&gt;
                        &lt;Process&gt;
                          &lt;TranHdr&gt;
                            &lt;CompanyID&gt;TRP&lt;/CompanyID&gt;
                            &lt;StoreNumber&gt;0001&lt;/StoreNumber&gt;
                            &lt;UserName&gt;Stock2Shop&lt;/UserName&gt;
                            &lt;TranDate&gt;{{date}}&lt;/TranDate&gt;
                            &lt;TranTime&gt;{{time}}&lt;/TranTime&gt;
                            &lt;TranGUID&gt;229EDCC7-9DDC-4CF6-A0AC-E977212E010F&lt;/TranGUID&gt;
                          &lt;/TranHdr&gt;
                          &lt;DataRequest&gt;
                            &lt;RequestType&gt;S2S_Web_Products&lt;/RequestType&gt;
                            &lt;RequestDetails&gt;
                              &lt;FromDateTime&gt;{{sync_token}}&lt;/FromDateTime&gt;
                              &lt;Rows&gt;{{limit}}&lt;/Rows&gt;
                              &lt;ProductList&gt;&lt;/ProductList&gt;
                            &lt;/RequestDetails&gt;
                          &lt;/DataRequest&gt;
                        &lt;/Process&gt;
                    &lt;/tem:query&gt;
                &lt;/tem:ProcessXML&gt;
            &lt;/soap:Body&gt;
        &lt;/soap:Envelope&gt;"
values: []
tags: [sourcemeta,dolfin]
type: "meta"
process: ""
headless: true
---