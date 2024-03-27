# Task Board Application

This is a task board application that allows users to manage tasks across multiple lists. Users can create lists, add tasks to the lists, drag tasks between lists, mark tasks as completed, and remove completed tasks from the list.


## Setup Instructions

1. **Clone the repository:**
    git clone https://github.com/Abbas-Sayyed99/Task_Board.git

2. **Install dependencies:**
    npm install

3. **Set up PostgreSQL database:**
- Install PostgreSQL and create a new database.
- Update the database configuration in `config/database.js` with your database credentials.

## API Endpoints

### Users

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login user.

### Lists

- **GET /api/lists**: Get all lists.
- **POST /api/lists**: Create a new list.
- **PUT /api/lists/:listId**: Update list details.
- **DELETE /api/lists/:listId**: Delete a list.

### Tasks

- **PUT /api/tasks/:taskId/move/:listId**: Move task to another list.
- **PUT /api/tasks/:taskId/complete**: Mark task as completed and remove from list.

