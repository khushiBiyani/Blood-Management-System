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


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
