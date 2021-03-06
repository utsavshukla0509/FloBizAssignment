# FloBizAssignment

## Table of Contents

1. **[Tables Schema](#tableschema)**<br>
2. **[Google Auth](#googleauth)**<br>
3. **[Facebook Auth](#facebookauth)**<br>
4. **[Send OTP](#sendotp)**<br>
5. **[Verify OTP](#verifyotp)**<br>
6. **[Create Organisation](#createorg)**<br>
7. **[Fetch Organisation Details By priviledges](#fetchorg)**<br>
8. **[Request For a member of Organisation](#requestorg)**<br>
9. **[Update Organisation Details](#updateorg)**<br>
10. **[Fetch Organisations By Query](#fetchorgbyquery)**<br>
11. **[Update Role in an Organisation](#updaterole)**<br>
12. **[Fetch All Request of an Organisation](#fetchrequest)**<br>
13. **[Update Request of an Organisation](#updaterequest)**<br>



<a name = "tableschema"></a>

1. ## Tables Schema
    
    ```
    User Table ------- id
               ------- name
               ------- email
               ------- phoneNo
               
   Org Table  ------- id
               ------- createdOn
               ------- createdBy
               ------- name
               INDEXES ----- createdBy, createdOn
                       ----- createdBy, Name
               
   Org-Member Table ------- userId
                     ------- orgId
                     ------- role
                     
   Request Table ------- orgId
                  ------- userId
                  ------- requestedOn
      
    ```

<a name = "googleauth"></a>

2. ## Google Auth
    #### GET &nbsp; /auth/google
    
    ```    
    Response : {
          "Google Authentication successfull"
    }
    ```
    
<a name = "facebookauth"></a>

3. ## Facebook Auth
    #### GET &nbsp; /auth/facebook
    
    ```    
    Response : {
          "Facebook Authentication successfull"
    }
    ```


<a name = "sendotp"></a>

4. ## Send OTP
    #### POST &nbsp; /auth/otp
    
    ```   
    Response : {
        "message" : "OTP has been sent to your given Mobile No."
    }
    ```
    


<a name = "verifyotp"></a>

5. ## Verify User OTP
    #### POST &nbsp; /auth/verify
    
    ```   
    Response : {
        "message" : "User is successfully signUp"
    }
    ```
<a name = "createorg"></a>

6. ## Create Organisation
    #### POST &nbsp; /flobiz/org
    
    ```   
    Response : {
        "message" : "Organisation is successfully created"
    }
    ```
<a name = "fetchorg"></a>

7. ## fetch Organisation Details By priviledges
    #### GET &nbsp; /flobiz/org/:orgId
    
    ```   
    Response : {
          { 
            orgName : FloBiz,       // If the user is not a member of that organisation 
            founder : Rahul Raj 
           }
            
            or
            
          { 
            orgId : 1,
            orgName : FloBiz,       // If the user is a member of that organisation 
            founder : Rahul Raj
            createdOn : 2021-04-17 18:05:58.901313
           }
            
            
    }
    ```
 <a name = "requestorg"></a>

8. ## Request For a member of Organisation
    #### POST &nbsp; /flobiz/org/:orgId/request
    
    ```   
    Response : {
        "message" : "Request has been sent to given Organisation"
    }
    ```
 <a name = "updateorg"></a>

9. ## Update Organisation Details
    #### PUT &nbsp; /flobiz/org/:orgId
    
    ```   
    Response : {
        "message" : "Data is successfully updated"
    }
    ```
 <a name = "fetchorgbyquery"></a>

10. ## Fetch Organisations By Query
    #### GET &nbsp; /flobiz/orgs?sortBy=orgname&limit=10&offset=1
    
    ```   
    Response : {
        "orgList": [
          {
              "orgid": 16,
              "createdon": "2021-04-17T12:35:58.901Z",
              "createdby": "5",
              "orgname": "abc"
          },
          {
              "orgid": 15,
              "createdon": "2021-04-17T08:47:31.778Z",
              "createdby": "5",
              "orgname": "xyz"
          }
          .
          .
          .
       ]
    }
    ```

 <a name = "updaterole"></a>
 
 11. ## Update Role in an Organisation
    #### PUT &nbsp; /flobiz/org/:orgId/priviledge
    
    ```    
    Response : {
          "Role is changed"
    }
    ```
<a name = "fetchrequest"></a>    
    
 12. ## Fetch All Request of an Organisation
    #### GET &nbsp; /flobiz/request/:orgId"
    
    ```    
    Response : {
          "Data": {
          "orgid": "7",
          "userid": "1",
          "requestedon": "2021-04-16T19:31:53.682Z"
        }
        .
        .
        .
    }
    ```
 <a name = "updaterequest"></a>
    
 13. ## Update Request of an Organisation
    #### POST &nbsp; /flobiz/request/:orgId/:memberId/:action
    
    ```    
    Response : {
          "Member request Accepted"
          or
          "Member request Rejected"
    }
    ```
