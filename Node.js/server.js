const http = require("http");
const url = require("url");
const fs = require("fs");
const querystring = require("querystring");

//handling form submissions
// Create the server
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Serve the HTML form
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.method === "POST" && req.url === "/submit") {
    // Handle form submission
    let body = "";

    // Collect data from the form
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Process the data
    req.on("end", () => {
      const formData = querystring.parse(body);
      console.log("Form Data Received:", formData);

      // Send a response back to the client
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
          <h1>Form Submitted Successfully!</h1>
          <p>Name: ${formData.name}</p>
          <p>Email: ${formData.email}</p>
        `);
    });
  } else {
    // Handle other routes (404 Not Found)
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

//middle ware function
// function logRequests(req, res, next) {
//   console.log(`${req.method} request made to ${req.url}`);
//   next();
// }

// const server = http.createServer((req, res) => {
//   logRequests(req, res, () => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to the Home Page!\n");
//   });
// });

//Route Handler

// Sample users data
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const server = http.createServer((req, res) => {
//   const { pathname } = url.parse(req.url);

//   // Handle requests for all users
//   if (pathname === "/users") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   }
//   // Handle requests for a specific user
//   else if (pathname.startsWith("/users/")) {
//     // Extract the user ID from the URL
//     const userId = pathname.split("/")[2];

//     // Find the user in the array
//     const user = users.find((u) => u.id === parseInt(userId));

//     if (user) {
//       // If the user is found, return the user data
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(user));
//     } else {
//       // If the user is not found, return a 404 error
//       res.writeHead(404, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ error: "User not found" }));
//     }
//   } else {
//     // Handle other routes (404 Not Found)
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found!\n");
//   }
// });
// const routes = {
//   "/": (req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to the Home Page!\n");
//   },
//   "/about": (req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to the About Page!\n");
//   },
//   "/notfound": (req, res) => {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not found!\n");
//   },
// };
// const server = http.createServer((req, res) => {
//   const path = url.parse(req.url).pathname;
//   const route = routes[path] || routes["/notfound"];
//   route(req, res);
// });

// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/submit") {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     req.on("end", () => {
//       console.log(body);
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end(
//         JSON.stringify({ message: "Data received successfully!", data: body })
//       );
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.write("Route not found!");
//     res.end();
//   }
// });
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

/*
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    // Handle POST request to "/submit"
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Data received successfully!", data: body }));
    });
  } else if (req.method === "GET" && req.url === "/info") {
    // Handle GET request to "/info"
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "This is a GET request", info: "Hello, World!" }));
  } else {
    // Handle unknown routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Route not found!");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/

// handling query paramters

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url.startsWith("/search")) {
//     // Parse query parameters from the URL
//     const queryObject = url.parse(req.url, true).query;

//     // Log the extracted query parameters
//     console.log("Query Parameters:", queryObject);

//     // Sample response using the query parameters
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({
//         message: "Query parameters received!",
//         params: queryObject,
//       })
//     );
//   } else {
//     // Handle unknown routes
//     res.writeHead(404, {
//       "Content-Type": "text/plain",
//       "custom-header": "node js server",
//       "custom-header2": "server tracking 1234",
//     });
//     res.write("Route not found!");
//     res.end();
//   }
// });

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
