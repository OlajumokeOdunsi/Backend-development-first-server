const htttp = require('http')       // ( This line imports the built-in Node.js 'http' module, 
                                     // which allows you to create an HTTP server and handle HTTP requests and responses.
                                        // )

const fs = require('fs')   // (This line imports another built-in Node.js 
                    // module called 'fs' (short for file system). 
                    // It provides functions for interacting with the file system, such as reading and writing files.
                    // )
htttp.createServer((req, res)=>{ 
    res.setHeader('Content-Type', 'text/html')  // This line sets the 'Content-Type' header of the HTTP response to indicate that the content being sent back to the client is HTML.


  //(This line creates an HTTP server using the createServer method 
 // provided by the 'http' module.
 // The createServer method takes a callback function 
 // as an argument. This callback function will be executed
  // whenever the server receives an HTTP request. 
  //It takes two parameters: req (the request object) and res (the response object).
  // )

  fs.readFile('./index.html', (err,data)=>{
    // This line uses the fs.readFile function to asynchronously 
    // read the contents of the file named 'index.html'. 
    // It takes two arguments: the path to the file and a callback
    //  function to be executed once the file has been read. If an error occurs during the reading process,
    //   it will be passed to the callback function as the first argument (err), otherwise, 
    //   the data read from the file will be passed as the second argument (data).
    if(err){
        console.error(" hey, hey, there is error")
        res.end()
        // If an error occurred while reading the file (e.g., the file does 
        // not exist or cannot be read), this block of code will handle it by 
        // logging the error to the console and ending the response.
         return;  //end of the function to prevent further processing
    }
    res.writeHead(200);
    // This line sets the HTTP status code of the response to 200, 
    // which indicates that the request was successful.
    res.end(data);
    // Finally, this line sends the contents of the 'index.html' 
    //file back to the client as the response body and ends the response.
  })
}).listen(3000,()=>{
    console.log('My server is listeneing on port "3000')
    // This section of code chains the listen method to the createServer method. 
    // It tells the server to start listening for incoming HTTP requests on port 3000. 
    // When the server starts successfully, it executes the callback function, 
    // which simply logs a message to the console indicating that the server is now listening on port 3000.





})

                      

