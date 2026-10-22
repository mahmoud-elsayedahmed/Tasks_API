# Task Manager

A small task-management application built as a first Node.js and Express project. Users can add tasks, view the current task list, and delete a task.

## Project structure

```text
.
├── server.js           # Express server and API routes
├── public/
│   └── index.html      # Browser interface
├── package.json
└── package-lock.json
```

## My backend work

The backend is implemented in `server.js` using Express.

- Created an Express application and configured it to run on port `5000`.
- Added `express.json()` so the server can read JSON request bodies.
- Created an in-memory `tasks` array to temporarily store task data while the server is running.
- Added an incrementing task ID (`Nid`) for every new task.
- Built API endpoints for getting, adding, and deleting tasks.
- Added validation to prevent creating a task with an empty title.
- Configured Express to serve the files in the `public` folder.

> Tasks are stored only in memory. They are removed when the server stops or restarts. A database can be added later to keep tasks permanently.

## API endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/tasks` | Returns all current tasks. |
| `POST` | `/tasks` | Adds a new task. |
| `DELETE` | `/tasks/:id` | Deletes the task with the given ID. |

### Add a task

Send a `POST` request to `/tasks` with a JSON body:

```json
{
  "title": "Study Express"
}
```

Example response:

```json
{
  "id": 1,
  "title": "Study Express"
}
```

## Frontend added for the project

The frontend is located in `public/index.html`.

- Built an Arabic right-to-left task page with HTML and CSS.
- Added a form for entering a new task.
- Added JavaScript that sends a `POST /tasks` request when the form is submitted.
- Added a task list that displays newly created tasks in the browser.
- Added a delete button for every displayed task that sends `DELETE /tasks/:id`.
- Added basic error messages when an API request fails.

The frontend and backend communicate through `fetch()` requests. The `title` entered by the user is sent to the server as:

```json
{
  "title": "The task text"
}
```

## Run the project

Install dependencies first:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Then open:

```text
http://localhost:5000
```

To view the API response directly, open:

```text
http://localhost:5000/tasks
```

## Next steps

- Load existing tasks from `GET /tasks` when the page opens.
- Store tasks in a JSON file or database.
- Add task completion status.
- Edit task titles.
- Improve API error messages and validation.
