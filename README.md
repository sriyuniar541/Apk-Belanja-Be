<br />
<p align="center">

  <h3 align="center">BELANJA</h3>
  <p align="center">
    <image align="center" width="200" src='https://res.cloudinary.com/dxrsjyu6o/image/upload/v1675087904/belanja/Group_1159_1_rhys0v.png' />
  </p>

  <p align="center">
    <br />
    <a href="https://github.com/sriyuniar541/Apk-Belanja-Be"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="======link deploy be disini======">View Demo</a>
  </p>
</p>



## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Run Locally](https://github.com/sriyuniar541/Apk-Belanja-Be/edit/master/README.md#run-locally)
* [Demo](https://github.com/sriyuniar541/Apk-Belanja-Be/edit/master/README.md#demo)
  *  [x] [API Reference - Auth](#api-reference---auth)
  *  [x] [API Reference - Product](#api-reference---product)
  *  [x] [API Reference - Categorys](#api-reference---categorys)
  *  [x] [API Reference - Addproduct](#api-reference---addproduct)
  *  [x] [API Reference - Checkout](#api-reference---checkout)
* [Related Project](#related-project)
* [Contact](#contact)

## About The Project

The Belanja application is a website that can be used to search for various daily needs such as clothes, shoes, to the current fashion, this application also has two roles that users can use to simply be buyers or can also be admins to sell their own products

## Run Locally

Clone the project

```bash
  git clone https://github.com/sriyuniar541/Apk-Belanja-Be
```

Go to the project directory

```bash
  cd Apk-Belanja-Be
```

Install dependencies

```bash
  npm install
```

Setup .env copy from .env.example

```bash
  DB_DATABASE=
  DB_PASS=
  DB_PORT=
  JWT_KEY=
  PORT=
  HOST=

  MAIL_USERNAME=
  MAIL_PASSWORD=
  OAUTH_CLIENTID=
  OAUTH_CLIENT_SECRET=
  OAUTH_REFRESH_TOKEN=
```

Start the server

```bash
  npm run dev
```

## Demo

API deploy 

```bash
====link deploy be disini======
```

## API Reference - Auth

<details>
<summary>Show</summary>
<br>

#### Register Toko(Admin)

```
  POST /users/register/toko
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email` | `string` | **Required**. with format email          |
| `fullname`    | `string` | **Required**. fullname |
| `password`    | `string` | **Required**. password |
| `role` | `string` | **Required**. role          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "otp": "069973"
  },
  "message": "register success please check your email to verif"
}
```

#### Register Custommer

```
  POST /users/register/cust
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email` | `string` | **Required**. with format email          |
| `fullname`    | `string` | **Required**. fullname |
| `password`    | `string` | **Required**. password |
| `role` | `string` | **Required**. role          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "otp": "010112"
  },
  "message": "register success please check your email to verif"
}
```

#### Login

```
  POST /users/login
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "d73e8a2a-3e66-4f61-b5a5-f80681d7aa0e",
    "email": "sriyuniar866@gmail.com",
    "fullname": "sulistiyawati",
    "role": "toko",
    "adress": "null",
    "photo": "null",
    "gender": "null", 
    "phonenumber": "null",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ3M2U4YTJhLTNlNjYtNGY2MS1iNWE1LWY4MDY4MWQ3YWEwZSIsImVtYWlsIjoic3JpeXVuaWFyODY2QGdtYWlsLmNvbSIsInJvbGUiOiJ0b2tvIiwiaWF0IjoxNjc1MTI2MTY5LCJleHAiOjE2NzUxMjk3Njl9.hk5BFLO2A8RyeBWP_C8-uGaVHTGHsYF5UT_0QJyt4xk"
  },
  "message": "login succes"
}
```

#### Verification

```
  POST /users/email/otp
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. with format email |
| `otp` | `string` | **Required**. otp          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {},
  "message": "email succes"
}
```

#### Edit profile

```
  PUT /users/:id
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Field body form


| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `email` | `string` | **Required**. with format email |
| `fullname`     | `string` | **Required**. fullname     |
| `adress`    | `file`   | **Required**. adress    |
| `photo`    | `file`   | **Required**. photo    |
| `gender`    | `file`   | **Required**. gender    |
| `phoneNumber`    | `file`   | **Required**. phoneNumber    |


Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "update user success"
}
```


#### Get profile By Id

```
  GET /users/get/:id
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "d73e8a2a-3e66-4f61-b5a5-f80681d7aa0e",
      "email": "sriyuniar866@gmail.com",
      "password": "$2a$10$bmsk0algTYXSfnvROlON2ekrfeX8EnjrISN8NbuLGUeD2VYxEAhV6",
      "fullname": "sri yuniar",
      "role": "toko",
      "adress": "Ambon-Maluku",
      "photo": "http://localhost:4000/img/photo-1675742627709.png",
      "gender": "perempuan",
      "phonenumber": "undefined",
      "verif": 1,
      "otp": 980052
    }
  ],
  "message": "get user success"
}
```
</details>

## API Reference - Product

<details>
<summary>Show</summary>
<br>

#### Get All Product

```
  Get /product
```

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": 34,
      "name": "Baju-2",
      "stock": 2,
      "price": 26000,
      "categorys": "t_shirt",
      "photo": "http://localhost:4000/img/photo-1669073493825.jpg",
      "active": 1
    },
    {
      "id": 35,
      "name": "Baju-3",
      "stock": 2,
      "price": 26000,
      "categorys": "t_shirt",
      "photo": "http://localhost:4000/img/photo-1669623973940.jpg",
      "active": 1
    },
    {
      "id": 64,
      "name": "baju biru",
      "stock": 9,
      "price": 30000,
      "categorys": "t_shirt",
      "photo": "http://localhost:4000/img/photo-1673942112517.png",
      "active": 1
    },
    {
      "id": 65,
      "name": "baju dua",
      "stock": 7,
      "price": 30000,
      "categorys": "t_shirt",
      "photo": "http://localhost:4000/img/photo-1674466196779.png",
      "active": 1
    },
    {
      "id": 57,
      "name": "baju kulit",
      "stock": 9,
      "price": 30000,
      "categorys": "t_shirt",
      "photo": "http://localhost:4000/img/photo-1673856734730.png",
      "active": 1
    },
    {
      "id": 58,
      "name": "baju musim dingin",
      "stock": 9,
      "price": 30000,
      "categorys": "t_shirt",
      "photo": "http://localhost:4000/img/photo-1674289082157.png",
      "active": 1
    },
    {
      "id": 47,
      "name": "baju tes",
      "stock": 4,
      "price": 2900,
      "categorys": "t_shirt",
      "photo": "http://localhost:4000/img/photo-1673107016791.jpg",
      "active": 1
    },
    {
      "id": 62,
      "name": "baju tes aja",
      "stock": 10,
      "price": 35000,
      "categorys": "t_shirt",
      "photo": "http://localhost:4000/img/photo-1673980498544.png",
      "active": 1
    },
    {
      "id": 67,
      "name": "baju tes baru",
      "stock": 4,
      "price": 35000,
      "categorys": "t_shirt",
      "photo": "http://localhost:4000/img/photo-1674099949882.png",
      "active": 1
    },
    {
      "id": 69,
      "name": "baju tes jual",
      "stock": 9,
      "price": 29000,
      "categorys": "t_shirt",
      "photo": "http://localhost:4000/img/photo-1674347325879.png",
      "active": 1
    },
    {
      "id": 60,
      "name": "Bandung Tas",
      "stock": 9,
      "price": 2900,
      "categorys": "tas",
      "photo": "http://localhost:4000/img/photo-1674368321326.png",
      "active": 1
    },
    {
      "id": 43,
      "name": "celana-1",
      "stock": 3,
      "price": 25000,
      "categorys": "short",
      "photo": "http://localhost:4000/img/photo-1669301795815.jpg",
      "active": 1
    },
    {
      "id": 44,
      "name": "celana-panjang-1",
      "stock": 3,
      "price": 25000,
      "categorys": "pants",
      "photo": "http://localhost:4000/img/photo-1669218944539.jpg",
      "active": 1
    },
    {
      "id": 45,
      "name": "celana-panjang-2",
      "stock": 3,
      "price": 25000,
      "categorys": "pants",
      "photo": "http://localhost:4000/img/photo-1669830459177.jpg",
      "active": 1
    },
    {
      "id": 56,
      "name": "celana baru luar biasa",
      "stock": 4,
      "price": 26000,
      "categorys": "pants",
      "photo": "http://localhost:4000/img/photo-1673733986107.jpg",
      "active": 1
    },
    {
      "id": 36,
      "name": "jacket-1",
      "stock": 3,
      "price": 25000,
      "categorys": "jacket",
      "photo": "http://localhost:4000/img/photo-1669527361734.jpg",
      "active": 1
    },
    {
      "id": 37,
      "name": "jacket-2",
      "stock": 3,
      "price": 25000,
      "categorys": "jacket",
      "photo": "http://localhost:4000/img/photo-1669723477379.jpg",
      "active": 1
    },
    {
      "id": 38,
      "name": "jacket-3",
      "stock": 3,
      "price": 25000,
      "categorys": "jacket",
      "photo": "http://localhost:4000/img/photo-1669824207812.jpg",
      "active": 1
    },
    {
      "id": 39,
      "name": "jacket-4",
      "stock": 3,
      "price": 25000,
      "categorys": "jacket",
      "photo": "http://localhost:4000/img/photo-1669728728302.jpg",
      "active": 1
    },
    {
      "id": 40,
      "name": "sepatu-1",
      "stock": 3,
      "price": 25000,
      "categorys": "soes",
      "photo": "http://localhost:4000/img/photo-1669806080398.png",
      "active": 1
    }
  ],
  "message": "get data success"
}
```

#### Get Product By Id

```
  GET /product/:id
```

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": 34,
      "name": "Baju-2",
      "stock": 2,
      "price": 26000,
      "categorys_id": 1,
      "photo": "http://localhost:4000/img/photo-1669073493825.jpg"
    }
  ],
  "message": "get data success"
}
```

#### Get Product By User_Id
```
  GET /product/user
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id from req.payload   |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": 34,
      "name": "Baju-2",
      "stock": 2,
      "price": 26000,
      "categorys_id": 1,
      "photo": "http://localhost:4000/img/photo-1669073493825.jpg"
    }
  ],
  "message": "get data success"
} 
```
#### Delete Product 
```
  DELETE /product/:id
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id from req.params   |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "delete data sukses"
}   
```

#### Update product 

```
  PUT /product/:id
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `name`     | `string` | **Required**. name    |
| `stock`     | `integer` | **Required**. stock    |
| `price`     | `integer` | **Required**. price    |
| `categorys_id`     | `string` | **Required**. categorys_id    |
| `photo`     | `string` | **Required**. photo    |


Response 200

```json
===belum ada
```

#### Insert Product

```
  POST /product
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `name`     | `string` | **Required**. name    |
| `stock`     | `integer` | **Required**. stock    |
| `price`     | `integer` | **Required**. price    |
| `categorys_id`     | `string` | **Required**. categorys_id    |
| `photo`     | `string` | **Required**. photo    |


Response 200

```json
===belum ada
```

#### Update status non active Product

```
  PUT /product/notActive/:id
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id from req.params    |



Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "update data sukses"
}
```

#### Update status active Product

```
  PUT /product/active/:id
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id from req.params    |



Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "update data sukses"
}
```

</details>

## API Reference - Categorys

<details>
<summary>Show</summary>
<br>

#### Insert Categorys

```
  POST /categorys
```
Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `categorys`     | `string` | **Required**. categorys    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "insert data sukses"
}
```

#### Get all categorys

```
  GET /categorys
```
Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": 39,
      "categorys": "kaos"
    },
    {
      "id": 38,
      "categorys": "tes category satu"
    },
    {
      "id": 31,
      "categorys": "tas"
    },
    {
      "id": 5,
      "categorys": "pants"
    },
    {
      "id": 4,
      "categorys": "short"
    },
    {
      "id": 3,
      "categorys": "jacket"
    },
    {
      "id": 2,
      "categorys": "soes"
    },
    {
      "id": 1,
      "categorys": "t_shirt"
    }
  ],
  "message": "get data sukses"
}
```

#### Update category

```
  PUT /categorys/:id
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id from categorys    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "update data sukses"
}
```

#### Delete category

```
  DELETE /categorys/:id
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id from categorys    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "delete data sukses"
}
```

</details>



## API Reference - Addproduct

<details>
<summary>Show</summary>
<br>

#### Insert AddProduct

```
  POST /addProduct
```
Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `products_id`     | `string` | **Required**. products_id    |
| `categorys_id`     | `string` | **Required**. categorys_id    |
| `user_id`     | `string` | **Required**. from req.payload.id    |
| `count`     | `string` | **Required**. count    |

Response 200   

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "insert data sukses"
}
```

#### Get All AddProduct 

```
  GET /addProduct/All
```

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "8ff84b9e-9e90-46f9-bced-8e1b1ca596ee",
      "products_id": 38,
      "products_name": "jacket-3",
      "products_photo": "http://localhost:4000/img/photo-1669824207812.jpg",
      "products_price": 25000,
      "products_stock": 3,
      "users_toko": "0cf2484e-5638-41d9-887b-1eab61a9518d",
      "categorys": "jacket",
      "categorys_id": 3,
      "user_id": "f9635313-ef6a-4a32-8c99-1ac1d8361a76",
      "user_name": "siti nur",
      "count": 1,
      "status": 1
    },
    {
      "id": "42339235-9aef-402a-b05b-87860fa96189",
      "products_id": 65,
      "products_name": "baju dua",
      "products_photo": "http://localhost:4000/img/photo-1674466196779.png",
      "products_price": 30000,
      "products_stock": 7,
      "users_toko": "8d94ddc6-c777-42f7-a795-8df67323c524",
      "categorys": "t_shirt",
      "categorys_id": 1,
      "user_id": "f9635313-ef6a-4a32-8c99-1ac1d8361a76",
      "user_name": "siti nur",
      "count": 1,
      "status": 1
    },
    {
      "id": "abffebd7-d464-473c-aadd-81468490e290",
      "products_id": 65,
      "products_name": "baju dua",
      "products_photo": "http://localhost:4000/img/photo-1674466196779.png",
      "products_price": 30000,
      "products_stock": 7,
      "users_toko": "8d94ddc6-c777-42f7-a795-8df67323c524",
      "categorys": "t_shirt",
      "categorys_id": 1,
      "user_id": "f9635313-ef6a-4a32-8c99-1ac1d8361a76",
      "user_name": "siti nur",
      "count": 1,
      "status": 1
    },
   

    {
      "id": "562bb75e-03c8-4fe4-95c1-e54afaa25720",
      "products_id": 34,
      "products_name": "Baju-2",
      "products_photo": "http://localhost:4000/img/photo-1669073493825.jpg",
      "products_price": 26000,
      "products_stock": 2,
      "users_toko": null,
      "categorys": "t_shirt",
      "categorys_id": 1,
      "user_id": "f68e2eab-7c88-4c58-bd4f-1972b01f47a1",
      "user_name": "yuyun",
      "count": 1,
      "status": 0
    }
  ],
  "message": "get data success"
}
```

#### Get Addproduct By Id

```
  GET /addProduct/:id
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id from req.params.id    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "42339235-9aef-402a-b05b-87860fa96189",
      "products_id": 65,
      "products_name": "baju dua",
      "products_photo": "http://localhost:4000/img/photo-1674466196779.png",
      "products_price": 30000,
      "products_stock": 7,
      "users_toko": "8d94ddc6-c777-42f7-a795-8df67323c524",
      "categorys": "t_shirt",
      "categorys_id": 1,
      "user_id": "f9635313-ef6a-4a32-8c99-1ac1d8361a76",
      "user_name": "siti nur",
      "count": 1,
      "status": 1
    }
  ],
  "message": "get data success"
}
```

#### Get Order 

```
  GET /addProduct/order
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `search`     | `string` | **Required**. search by products.users_id    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "9e932e63-2fd9-4272-ae54-c52e7685afe5",
      "products_id": 62,
      "products_name": "baju tes aja",
      "products_photo": "http://localhost:4000/img/photo-1673980498544.png",
      "products_price": 35000,
      "products_stock": 10,
      "categorys": "t_shirt",
      "categorys_id": 1,
      "user_id": "5b2d5d1a-5b69-4ce8-91b6-f3e5a6a795bd",
      "user_name": "sulis",
      "users_toko": "b2ba8c32-8567-4b02-92c1-d26f9f7c11f9",
      "count": 1,
      "statusorder": null,
      "status": 1
    },
    {
      "id": "27c05e8b-cce9-4e69-8ccf-626604f8e371",
      "products_id": 64,
      "products_name": "baju biru",
      "products_photo": "http://localhost:4000/img/photo-1673942112517.png",
      "products_price": 30000,
      "products_stock": 9,
      "categorys": "t_shirt",
      "categorys_id": 1,
      "user_id": "5b2d5d1a-5b69-4ce8-91b6-f3e5a6a795bd",
      "user_name": "sulis",
      "users_toko": "b2ba8c32-8567-4b02-92c1-d26f9f7c11f9",
      "count": 1,
      "statusorder": null,
      "status": 1
    },
    {
      "id": "4b14f451-b52d-419b-92ad-72aa54151ebd",
      "products_id": 62,
      "products_name": "baju tes aja",
      "products_photo": "http://localhost:4000/img/photo-1673980498544.png",
      "products_price": 35000,
      "products_stock": 10,
      "categorys": "t_shirt",
      "categorys_id": 1,
      "user_id": "ec82897f-cd8e-41e7-8318-bd6f09778375",
      "user_name": "sri y",
      "users_toko": "b2ba8c32-8567-4b02-92c1-d26f9f7c11f9",
      "count": 1,
      "statusorder": "Delivery",
      "status": 1
    },
    {
      "id": "97f29395-06a6-4019-8c35-c5a78540a1fa",
      "products_id": 64,
      "products_name": "baju biru",
      "products_photo": "http://localhost:4000/img/photo-1673942112517.png",
      "products_price": 30000,
      "products_stock": 9,
      "categorys": "t_shirt",
      "categorys_id": 1,
      "user_id": "2c5ae3a8-b1b3-4652-9bcd-efbbe26f71cd",
      "user_name": "sri costummer 1",
      "users_toko": "b2ba8c32-8567-4b02-92c1-d26f9f7c11f9",
      "count": 1,
      "statusorder": null,
      "status": 1
    }
  ],
  "message": "get data success"
}
```

#### Update status addProduct 

```
  PUT /addProduct/updateStatus
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "update data sukses"
}
```

#### Update status updateDelevery

```
  PUT /addProduct/updateDelevery/:id
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `id`     | `string` | **Required**. id from req.params.id    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "update data sukses"
}
```

#### Delete addProduct

```
  DELETE /addProduct/:id
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `id` | `string` | **Required**. id from req.prams.id        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "delete data sukses"
}
```
</details>


## API Reference - Checkout

<details>
<summary>Show</summary>
<br>

#### Get Checkout By User_Id

```
  GET /checkout
```
Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "f20b3e5b-977f-45e9-b167-55dca178301a",
      "products_id": 36,
      "products_name": "jacket-1",
      "products_photo": "http://localhost:4000/img/photo-1669527361734.jpg",
      "products_price": 25000,
      "products_stock": 3,
      "user_idtoko": "0cf2484e-5638-41d9-887b-1eab61a9518d",
      "categorys": "t_shirt",
      "user_id": "b2b1a7f1-51d2-4945-8c69-00ea3567e0ad",
      "user_name": "sri yuniar",
      "statuspayment": 0,
      "count": 1,
      "status": null
    },
    {
      "id": "f70a588d-9347-480d-8349-f00b70b96234",
      "products_id": 45,
      "products_name": "celana-panjang-2",
      "products_photo": "http://localhost:4000/img/photo-1669830459177.jpg",
      "products_price": 25000,
      "products_stock": 3,
      "user_idtoko": null,
      "categorys": "pants",
      "user_id": "b2b1a7f1-51d2-4945-8c69-00ea3567e0ad",
      "user_name": "sri yuniar",
      "statuspayment": 0,
      "count": 1,
      "status": null
    }
  ],
  "message": "get data success"
}
```

#### Update Status Payment

```
  PUT /payment/:user_id
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body params

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `user_id` | `string` | **Required**. user_id from req.prams.user_id        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "update data sukses"
}
```

</details>


## Related Project
* [`Backend Project Belanja `](https://github.com/sriyuniar541/Apk-Belanja-Be)
* [`REST API Telegram`](====link deploy be here====)

## Contact
  * Sri Yuniar [@sriyuniar541](https://github.com/sriyuniar541)
