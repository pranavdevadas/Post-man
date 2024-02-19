const express = require("express");
const app = express();

app.get("/userHome",(req,res) => {
    res.send({
        "data": "user home data"
      })
})

app.post("/userSignup",(req,res) => {
    res.send({
        "message": "Registration successful"
      })
})

app.get('/userlogout',(req,res)=>{
    res.send({
        "message": "Logged out successfully"
      })
})

app.get('/searchproduct',(req,res)=>{
    res.send({
        "products": [
          {
            "productId": "string",
            "name": "string",
            "price": "number",
            "rating": "",
            "images": [
              "string"
            ]
          }
        ]
      })
})

app.get('/user/cart',(req,res)=>{
    res.send({
        "cartItems": [
          {
            "productId": "string",
            "name": "string",
            "price": "number",
            "quantity": "number",
            "color": "string",
            "rating": "number",
            "images": [
              "string"
            ]
          }
        ]
      })
})

app.post('/user/payment',(req,res)=>{
    res.send({
        "message": "Payment successful"
      })
})

app.get('/user/checkout',(req,res)=>{
    res.send({
        "users": {
          "address": "string"
        }
      })
})

app.get('/user/profile',(req,res)=>{
    res.send({
        "Users": {
          "username": "string",
          "email": "string",
          "phoneNumber": "number",
          "address": "string"
        }
      })
})

app.get('/user/addaddress',(req,res)=>{
    res.send({
        "message": "Address added successfully"
      })
})

app.put('/user/editaddress',(req,res)=>{
    res.send({
        "message": "updated successfully"
      })
})

app.get('/product',(req,res)=>{
    res.send({
        "productId": "string"
      })
})

app.get('/user/wishlist',(req,res)=>{
    res.send({
        "wishlistItems": [
          {
            "productId": "string",
            "name": "string",
            "price": "number",
            "images": [
              "string"
            ],
            "color": "string",
            "rating": "number"
          }
        ]
      })
})

app.post('/login',(req,res)=>{
    res.send({
        "message": "Login successful"
      })
})

app.put('/user/changepassword',(req,res)=>{
    res.send({
        "message": "Password succesfully created"
      })
})

//Admin 

app.post('/admin/login',(req,res)=>{
  res.send({
    "message": "Admin login successful"
  })
})

app.get('/admin/dashboard',(req,res)=>{
  res.send({
    "dashboardData": {
      "totalOrders": "number",
      "totalUsers": "number",
      "totalRevenue": "number",
      "latestorders": "numbers",
      "bestsellers": "numbers",
      "image ": "string",
      "ordrerid": "number"
    }
  })
})

app.get('/admin/orderview',(req,res)=>{
  res.send({
    "orders": [
      {
        "orderId": "string",
        "date": "string",
        "totalAmount": "number",
        "status": "string",
        "method": "string",
        "customer": "string"
      }
    ]
  })
})

app.get('/admin/orderdetials',(req,res)=>{
  res.send({
    "orderDetails": {
      "orderId": "string",
      "date": "string",
      "name": "string",
      "email": "string",
      "mobile": "string",
      "totalAmount": "number",
      "status": "string",
      "address": "string",
      "items": [
        {
          "productId": "string",
          "productName": "string",
          "quantity": "number",
          "price": "number"
        }
      ]
    }
  })
})

app.put('/admin/editstatus',(req,res)=>{
  res.send({
    "Message": "successfully logged out"
  })
})

app.get('/admin/productview',(req,res)=>{
  res.send({
    "products": [
      {
        "productId": "string",
        "stock": "number",
        "price": "number",
        "status": "string",
        "date": "date"
      }
    ]
  })
})

app.post('/admin/addproduct',(req,res)=>{
  res.send({
    "message": "Product added successfully"
  })
})

app.delete('/admin/deleteproduct',(req,res)=>{
  res.send({
    "message": "Product delete successfully"
  })
})

app.get('/admin/userslist',(req,res)=>{
  res.send({
    "users": [
      {
        "userId": "string",
        "username": "string",
        "email": "string",
        "phone": "number",
        "status": "string",
        "orders": "string",
        "date": "date"
      }
    ]
  })
})

app.get('/admin/user',(req,res)=>{
  res.send({
    "user": {
      "userId": "string",
      "username": "string",
      "email": "string",
      "status": "string",
      "address": "string",
      "phone": "number",
      "ordercount": "number"
    }
  })
})

app.get('/admin/userdetials',(req,res)=>{
  res.send({
    "user": {
      "userId": "string",
      "orderId": "string",
      "username": "string",
      "email": "string",
      "status": "string",
      "address": "string",
      "phone": "number",
      "total": "number",
      "date": "date"
    }
  })
})

app.put('/admin/blockuser',(req,res)=>{
  res.send({
    "message": "User blocked successfully"
  })
})

app.put('/admin/addcoupon',(req,res)=>{
  res.send({
    "message": "Coupon added successfully"
  })
})

app.get('/admin/logout',(req,res)=>{
  res.send({
    "Message": "successfully logged out"
  })
})


app.put('/admin/editproduct',(req,res)=>{
  res.send({
    "message": "Product updated successfully"
  })
})

app.get('/admin/userdetials',(req,res)=>{
  res.send({
    "user": {
      "userId": "string",
      "orderId": "string",
      "username": "string",
      "email": "string",
      "status": "string",
      "address": "string",
      "phone": "number",
      "total": "number",
      "date": "date"
    }
  })
})

app.post('/admin/addbanners',(req,res)=>{
  res.send({
    "message": "Banner added successfully"
  })
})

app.delete('/admin/deletebanner',(req,res)=>{
  res.send({
    "message": "Banner is deleted succefully"
  })
})

app.put('/admin/addcatogary',(req,res)=>{
  res.send({
    "message": "Catagory succefully added"
  })
})

// app.delete('/admin/coupondelete',(req,res)=>{
//   res.send({
//     "message": "coupon succefully deleted"
//   })
// })

const port = 3000;

app.listen(port,() => console.log("Server is running on http://localhost:3000"))