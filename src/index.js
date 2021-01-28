// 1 - pull in the HTTP server module
const http = require('http');

// 2 - locally this will be 3000, on Heroku it will be assigned
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// 3 - process.env is an environmental variable
// https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env
//console.log(process.env);

// 4 - Here is the hard-coded web page we will send back
// note that we enclosed the string of HTML in back-ticks so that we could have a nicely formatted and readable multi-line string

const index = `
<html>
    <head>
        <title>First Node Page </title>
    <head>
    <body>
        <h1>First Node Page!</h1>
		<p>Server-side JavaScript is cool!</p>
    </body>
</html>`;

// 5 - this is the function that will be called every time a client request comes in
// note that in this course we'll be using arrow functions 100% of the time in our server-side code
const onRequest = (request, response) => {
    console.log(request.url);
    response.writeHead(200, {'Content-Type': 'text/html'}); // send response headers
    response.write(index); // send content
    response.end(); // close connection
}

// 6 - create the server, hook up the request handling function, and start listening on `port`
http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);