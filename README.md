📌 Task Manager App (Express + EJS + Tailwind)

A simple Task Manager web application built with Express.js, EJS, and TailwindCSS.
It lets you create, view, and rename tasks (stored as text files).


🚀 Features

➕ Create Tasks with title and details

📖 View Task Details on a separate page

✏️ Rename Tasks with a simple edit form

🎨 Styled using TailwindCSS

⚡ Live reloading with nodemon

📂 Project Structure
├── views/
│   ├── index.ejs    # Homepage (list tasks + create form)
│   ├── show.ejs     # Show details of a task
│   ├── edit.ejs     # Rename task form
├── files/           # Stores all tasks as .txt files
├── index.js         # Express server
├── package.json     # Dependencies and scripts
├── package-lock.json
└── README.md

🛠️ Installation & Setup

Clone the repository:

git clone https://github.com/JatinSinghal1411/Task-Manager.git
cd Task-Manager


Install dependencies:

npm install


Start the development server:

npm start


Open your browser at:

http://localhost:3000

⚙️ Tech Stack

Backend: Node.js, Express.js

Templating: EJS

Styling: TailwindCSS

Dev Tool: Nodemon
