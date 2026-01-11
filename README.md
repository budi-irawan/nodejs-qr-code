# nodejs-qr-code

nodejs-qr-code

-Clone this repo
-cd nodejs-qr-code
-run npm install
-create postgresql database
-create .env file in root directory
-run node app.js

In your postman or other api testing write url with POST method
for example :
http://localhost:3004/api/qr/generate
body :
{
"full_name": "example full name",
"email": "example@example.com",
"phone": "9500392"
}

postman documentation link : https://documenter.getpostman.com/view/11119755/2sBXVfiWnf
