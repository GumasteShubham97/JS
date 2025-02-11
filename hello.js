const express = require('express');
const app = express();

//console.log(routes.someText);

// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next(); // Allows the request to continue to the next middleware in line
// });

app.use('/',(req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log('In the another middleware!');
    res.send('<h1>Add Product Page</h1>');
});

app.use('/',(req, res, next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);

// Path: hello.test.js
// for these kindd of