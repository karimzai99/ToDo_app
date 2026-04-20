# 📝 ToDo App

A clean and minimal To-Do web application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. This project allows users to **create**, **update**, and **delete** tasks, making task management simple and effective.

## 🔗 Figma Prototype

- 🖌️ [View UI Design](https://www.figma.com/proto/xF6mNyu4gMFQ9N0HVVzLU2/Untitled?node-id=1-2&p=f&m=draw&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&t=WCsGwWxpeRVuA6J3-1)

## 🚀 Features

- 📋 Add new tasks
- ✅ Mark tasks as completed or uncompleted
- 📝 Edit tasks
- ❌ Delete tasks
- 🗃️ Save tasks in MongoDB for persistence
- 🖼️ Templated views using EJS
- 🔁 Use of method override for RESTful form actions

## 🧰 Tech Stack

| Technology      | Description                       |
| --------------- | --------------------------------- |
| Node.js         | JavaScript runtime                |
| Express.js      | Web framework                     |
| MongoDB         | NoSQL database                    |
| Mongoose        | ODM for MongoDB                   |
| EJS             | Templating engine                 |
| method-override | Enable PUT & DELETE in HTML forms |
| dotenv          | Load environment variables        |

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/karimzai99/ToDo_app.git
cd ToDo_app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Run the App

```bash
npm start
```

Visit: [http://localhost:3000/todo](http://localhost:3000/todo)

## 📡 Available Routes

| Method | Route            | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/todo`          | View all todos       |
| POST   | `/todo`          | Add new todo         |
| GET    | `/todo/:id/edit` | Edit a specific todo |
| PUT    | `/todo/:id`      | Update a todo        |
| DELETE | `/todo/:id`      | Delete a todo        |

## 🙌 Author

**Naseer Wakhan**
🌐 [GitHub](https://github.com/karimzai99)

---

✅ Built with ❤️ to help you stay organized and productive.




