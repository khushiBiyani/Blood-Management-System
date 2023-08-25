FOR ALL HTTP REQUEST USE ` http://localhost:3001`

## Pictures 
<img width="598" alt="image" src="https://github.com/khushiBiyani/Blood-Management-System/assets/93194800/95a6577d-5bc7-450b-b793-0d21dffd5825">
<img width="607" alt="image" src="https://github.com/khushiBiyani/Blood-Management-System/assets/93194800/8130dbca-13c6-47e1-bee2-2cd6bacdf9a9">
<img width="609" alt="image" src="https://github.com/khushiBiyani/Blood-Management-System/assets/93194800/33bf76e4-8088-4512-8388-33df8a8f61cd">
<img width="580" alt="image" src="https://github.com/khushiBiyani/Blood-Management-System/assets/93194800/137c4888-4f25-48b0-9d47-189c5a4796a2">


## Request to register donor - 
```
{
    "d_fname":"",
    "d_lname":"",
    "d_address":"",
    "d_email":"",
    "d_phone":"",
    "d_dob":"",
    "d_btype":"",
    "d_gender":"",
    "d_disease":"",
    "d_pwrd":""
}
```
on `/register/donor`

## request to register recipient 
``` same as donor replace d_ with r_```
on `/register/recipient`

## Request to approve / deny a request
```
{
    "status": "-1/0/1",
    "bt_transacid":""
}
```
- 0 means not approved or rejected
- -1 means rejected
- 1 means accepted
on `/approve`

## Donate blood
Request to donate blood
```
{
    "bd_donorid":"",
    "bd_date":"",
    "bd_quantity":""
}
```
on `/donate`
## Request blood
```
{
    "bt_recipient":"",
    "bt_quantity":"",
    "bt_date":""
}
```
on `/request`

## For login
```
{
    "id":"",
    "pass":""
}
```
on `/login/admin` or `/login/donor` or `/login/recipient`
### Response
```
{
    "d_id","",
    "d_fname":"",
    "d_lname":"",
    "d_address":"",
    "d_email":"",
    "d_phone":"",
    "d_dob":"",
    "d_btype":"",
    "d_gender":"",
    "d_disease":"",
    "d_pwrd":"",
}
same format in recipient and admin with respective fields
``` 
if successfull
otherwise
```
{
    "status":"-1"
}
```
# Blood request
```
{
    bt_date:
    bt_quantity:
    r_email:
    disease:
    reason:
    btype:
}
```
to `/request`
## Response
```
{
    Success
}
```
# Blood donated
```
{
    "id":
}
```
Response - 
```
{
    "value":
}
``` 
send to `/donated`

# Blood donation

```
{
    bd_date:
    bd_quantity:
    d_email:
    disease:
    btype:
}
```
send to `/donate`
## Response
```
{
    Success
}
if successfull
else
{
    Failed
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.







