
# Books Manager API

This is a **RESTful API** built with **Node.js** and **Express** to manage books. You can **Create**, **Read**, **Update**, and **Delete** books. It follows the **REST principles** and handles basic CRUD operations.

## Features

- **Create a Book**: Add a new book to the database.
- **Get All Books**: Retrieve all the books from the database.
- **Get Single Book**: Retrieve details of a specific book by ID.
- **Update a Book**: Modify an existing book's details.
- **Delete a Book**: Remove a book from the database.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for building the API.
- **Postman**: For testing the API.

## Setup Instructions

### Prerequisites

- **Node.js** installed. If you don’t have it, download and install from [Node.js](https://nodejs.org/).
- **Postman** (or any API client) to test the API.

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/books-manager-api.git
   cd books-manager-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

4. **Test the API** using Postman or any API client.

### Available Endpoints

1. **Get All Books**  
   - **URL**: `/api/v1/books`
   - **Method**: `GET`
   - **Description**: Fetches all books.

2. **Get Single Book**  
   - **URL**: `/api/v1/books/:id`
   - **Method**: `GET`
   - **Description**: Fetches a single book by ID.

3. **Create a Book**  
   - **URL**: `/api/v1/books`
   - **Method**: `POST`
   - **Body**:
     ```json
     {
       "title": "Book Title",
       "author": "Author Name"
     }
     ```
   - **Description**: Adds a new book.

4. **Update a Book**  
   - **URL**: `/api/v1/books/:id`
   - **Method**: `PUT`
   - **Body**:
     ```json
     {
       "title": "Updated Book Title",
       "author": "Updated Author Name"
     }
     ```
   - **Description**: Updates a book by ID.

5. **Delete a Book**  
   - **URL**: `/api/v1/books/:id`
   - **Method**: `DELETE`
   - **Description**: Deletes a book by ID.


## Testing with Postman

You can use Postman to test the API endpoints.

Here is a sample collection for testing the API:
1. **GET all books**
2. **GET a book by ID**
3. **POST to create a new book**
4. **PUT to update a book**
5. **DELETE to remove a book**

### How to import the Postman collection:

1. Download the collection file: `books-manager-api.postman_collection.json`.
2. In Postman, click **Import**.
3. Select the **File** option and import the downloaded `.json` file.

## Contributing

If you have suggestions or improvements, feel free to fork the repository and create a pull request.

## License

This project is open-source.
