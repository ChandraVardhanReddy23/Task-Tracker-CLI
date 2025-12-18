# Task Tracker CLI

A simple command-line interface (CLI) application for tracking and managing your tasks. Built with Node.js, this tool helps you organize your daily tasks with ease.

## Features

- ✅ Add new tasks
- 📋 List all tasks or filter by status
- ✏️ Update existing tasks
- 🗑️ Delete tasks
- 🔄 Mark tasks as in-progress or done
- 💾 Persistent storage using JSON file

## Prerequisites

- Node.js (v12 or higher)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/task-tracker-cli.git
cd task-tracker-cli
```

2. Ensure the `task.json` file exists in the project directory. If not, create an empty one:
```bash
echo "[]" > task.json
```

## Usage

Run commands using Node.js:

```bash
node index.js <command> [arguments]
```

### Available Commands

#### Add a Task
```bash
node index.js add "Buy groceries"
```

#### List All Tasks
```bash
node index.js list
```

#### List Tasks by Status
```bash
node index.js list todo
node index.js list in-progress
node index.js list done
```

#### Update a Task
```bash
node index.js update 1 "Buy groceries and cook dinner"
```

#### Mark Task as In Progress
```bash
node index.js mark-in-progress 1
```

#### Mark Task as Done
```bash
node index.js mark-done 1
```

#### Delete a Task
```bash
node index.js delete 1
```

## Task Structure

Each task contains the following properties:

- `id`: Unique identifier
- `title`: Task description
- `status`: Current status (todo, in-progress, done)
- `createdAt`: Timestamp when the task was created
- `UpdatedAt`: Timestamp when the task was last modified

## Example Workflow

```bash
# Add some tasks
node index.js add "Write project documentation"
node index.js add "Review pull requests"
node index.js add "Deploy to production"

# List all tasks
node index.js list

# Mark a task as in progress
node index.js mark-in-progress 1

# Update a task
node index.js update 2 "Review and merge pull requests"

# Mark a task as done
node index.js mark-done 1

# List only completed tasks
node index.js list done

# Delete a task
node index.js delete 3
```

## Data Storage

Tasks are stored in `task.json` file in the project root directory. The file is automatically created and updated as you manage your tasks.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

👨‍💻 **Chandra Vardhan Reddy**  
📍 B.Tech – Information Technology

## Project URL

Project idea from: [roadmap.sh](https://roadmap.sh/projects/task-tracker)
