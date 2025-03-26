// Importing required modules (ES Modules syntax)
import express from "express"; // Express framework
import { connectDB } from "./config/db.js"; // Database connection
import { Person } from "./models/Person.js"; // Person model
import cookieParser from "cookie-parser";
// Initialize Express app and set port
const app = express();
const PORT = 3000;
app.use(cookieParser());

// Connect to MongoDB database
await connectDB();

// Middleware setup
app.use(express.json()); // Parse JSON request bodies

/*
 * Basic Routes
 */

// Home route
app.get("/", (req, res) => {
  res.cookie("name", "express-app");
  res.send("Hello world I am from Home Page");
});

app.get("/remove-cookie", (req, res) => {
  res.clearCookie("name");
  res.send("Cookie removed successfully");
});
app.get("/fetch", (req, res) => {
  console.log(req.cookies);
  res.send("Cookie fetched successfully");
});

// About route
// app.get("/about", (req, res) => {
//   res.send("Hello world I am from About Page");
// });

// Contact route
// app.get("/contact", (req, res) => {
//   res.send("Hello world I am from Contact Page");
// });

/*
 * CRUD Operations for Person Model
 */

// CREATE - Add new person to database
// app.post("/person", express.json(), async (req, res) => {
//   const { name, age, email } = req.body;
//   const newPerson = new Person({ name, age, email });

//   try {
//     await newPerson.save();
//     console.log(newPerson);
//     res.send("Person added successfully");
//   } catch (error) {
//     console.error("Error saving person:", error);
//     res.status(500).send("Error adding person");
//   }
// });

// // READ - Get person by ID
// app.get("/person/:id", async (req, res) => {
//   try {
//     const person = await Person.findById(req.params.id);
//     if (!person) return res.status(404).send("Person not found");
//     res.json(person);
//   } catch (error) {
//     res.status(500).send("Error finding person");
//   }
// });

// // READ - Search for persons with query parameters
// app.get("/person", async (req, res) => {
//   try {
//     const { name, age, email } = req.query;
//     const filter = {};
//     if (name) filter.name = name;
//     if (age) filter.age = age;
//     if (email) filter.email = email;

//     const persons = await Person.find(filter);
//     if (persons.length === 0)
//       return res.status(404).send("No matching persons found");

//     console.log("Found persons:", persons);
//     res.json(persons);
//   } catch (error) {
//     console.error("Find error:", error);
//     res.status(500).send("Error finding persons");
//   }
// });

// // UPDATE - Modify existing person
// app.put("/person", express.json(), async (req, res) => {
//   try {
//     const { name, age, email, updates } = req.body;
//     const updatedPerson = await Person.findOneAndUpdate(
//       { name, age, email },
//       updates,
//       { new: true }
//     );

//     if (!updatedPerson) return res.status(404).send("Person not found");

//     console.log("Updated person:", updatedPerson);
//     res.send("Person updated successfully");
//   } catch (error) {
//     console.error("Update error:", error);
//     res.status(500).send("Error updating person");
//   }
// });

// // DELETE - Remove person by ID
// app.delete("/person/:id", async (req, res) => {
//   try {
//     const deletedPerson = await Person.findByIdAndDelete(req.params.id);
//     if (!deletedPerson) return res.status(404).send("Person not found");
//     res.send("Person deleted successfully");
//   } catch (error) {
//     res.status(500).send("Error deleting person");
//   }
// });

// DELETE - Remove person by attributes
// app.delete("/person", express.json(), async (req, res) => {
//   try {
//     const { name, age, email } = req.body;
//     const deletedPerson = await Person.findOneAndDelete({ name, age, email });

//     if (!deletedPerson) return res.status(404).send("Person not found");

//     console.log("Deleted person:", deletedPerson);
//     res.send("Person deleted successfully");
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).send("Error deleting person");
//   }
// });

// /*
//  * Additional Routes and Middleware
//  */

// // View engine setup (commented out as not currently used)
// // app.set("view engine", "ejs");

// // Example middleware that logs request timing
// app.use((req, res, next) => {
//   console.log("Start");
//   res.on("finish", () => console.log("End"));
//   next();
// });

// // Error handling route
// app.get("/error", () => {
//   throw new Error("Custom Error");
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.log("Error:", err.message);
//   res.status(500).send("Something went wrong");
// });

// // Route with parameter validation
// app.get("/things/:name/:id([0-9]{5})", (req, res) => {
//   const { name, id } = req.params;
//   res.json({
//     message: `Hello ${name}, you requested item with id: ${id}!`,
//   });
// });

// // 404 handler for unmatched routes
// app.get("*", (req, res) => {
//   res.status(404).send("Sorry, this page was not found!");
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
