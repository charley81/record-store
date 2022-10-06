# uptownRecs

A inventory tracking app for a small business utilizing node, mongoose, mongoDB, express, JSX, and cloudinary. This app allows the user to upload a product to the page, edit the project, upload files (save to cloudinary), and delete the project

### Requirements

```
1. Interent connection
2. NodeJS
3. Text Editor (I use VS Code)
4. MongoDB
5. Cloudinary
6. JSX (templating language)
7. Mongoose
```

### Instructions

Open the project in Vs Code and create a .env file

Add mongodb URL:

```
MONGO_URI = mongodb+srv://yourusername:<password>@cluster0.rv10hrx.mongodb.net/?retryWrites=true&w=majority
```

Add Cloudinary Cloud Name, API Key, & API Secret.. these are examples below

```
CLOUDINARY_CLOUD_NAME = yourusername
CLOUDINARY_API_KEY = 104170994342147
CLOUDINARY_API_SECRET = XKduGmnbomBMd34DeekdXeenyle9o
```

### Running the Application

Now download required packages and start the server

```
npm install
```

```
npm run server
```

## Routes

| Method | URL                    | Description                                   |
| ------ | ---------------------- | --------------------------------------------- |
| GET    | /products              | Get all products                              |
| GET    | /products/new          | Get a form to create a new product            |
| DELETE | /products/:id          | Delete a single product by id                 |
| PUT    | /products/:id/purchase | decrement product quantity and update product |
| PUT    | /products/:id          | Update a single product                       |
| POST   | /products              | Create a new product                          |
| GET    | /products/:id/edit     | Get edit form to edit product by id           |
| GET    | /products/:id          | Get a product by id                           |

### Screenshots

Index View
![Index View](https://res.cloudinary.com/charley81/image/upload/v1665009242/uptownRecs/index_zb3lxr.png)

Show View
![Show View](https://res.cloudinary.com/charley81/image/upload/v1665009240/uptownRecs/show_m84hox.png)

Edit View
![Edit View](https://res.cloudinary.com/charley81/image/upload/v1665009235/uptownRecs/edit_h3lrwl.png)

### Take Away:

- Working with a node server using express, mongoose, mongoDB, and JSX for a view engine along with uploading files

### Challenges

- Allowing the user to upload a image file from their computer
- What is the user doesn't upload a image => app breaks
- When you update a product if you don't upload a image => app breaks
- You must upload a image

### Ideas incorperated into project

- Give the user feedback and create a better user experience
- Truncating text on index products and showing full text on details page => for more pleasing UI
- Not showing add products link in nav while on add product page => user experience
- Making the entire product clickable => instead of making user click a small area
- Responsive styling => looks great on mobile, tablet, and desktop
- Hover effects => giving user feedback
- Call to actions => highlighting clickable areas

### Next Steps

1. Authentication
2. Add image preivew
3. Add listen link to show view
4. Add functionality where you cannot add the same product twice
5. Add custom alerts giving user feedback i.e delete successful, are you sure you want to delete, update successful etc.

## License

```
The MIT License (MIT)

Copyright (c) 2016 Mr Modise

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
