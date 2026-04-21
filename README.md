# 🧠 HR Workflow Designer

A visual, drag-and-drop workflow builder for designing and simulating HR processes such as onboarding, approvals, and automated actions.

This project demonstrates building a modular, scalable frontend system using graph-based UI with **React Flow**.

---

## 🚀 Features

### 🎯 Visual Workflow Builder

* Drag and drop nodes onto the canvas
* Automatic vertical alignment for structured workflows
* Auto-connect nodes to maintain logical flow

### 🔗 Smart Connections

* Smooth, animated edges
* Handle-based connections (top → bottom)
* Prevents invalid flow (e.g., no connections after End node)

### 🧩 Node Types

* 🟢 **Start Node** – Entry point
* 📋 **Task Node** – Human task (with assignee support)
* ✅ **Approval Node** – Role-based approval
* ⚙️ **Automated Node** – System-triggered actions
* 🔴 **End Node** – Workflow completion

### ✏️ Dynamic Node Configuration

* Click a node to edit its properties
* Form adapts based on node type
* Controlled state updates

### 🧪 Workflow Simulation

* Simulate workflow execution step-by-step
* Displays execution order
* Validates workflow structure

---

## 🛠 Tech Stack

| Category       | Technology   |
| -------------- | ------------ |
| Frontend       | React (Vite) |
| Graph Engine   | React Flow   |
| State Handling | React Hooks  |
| Styling        | CSS / Inline |

---

## 📂 Project Structure

```id="2fz22l"
src/
 ├── components/
 │    ├── nodes/         # Custom node UI components
 │    ├── panels/        # Node editor + simulation panel
 │    ├── sidebar/       # Drag source (node list)
 │
 ├── services/           # Mock API (simulation logic)
 ├── utils/              # Validation logic
 ├── App.jsx             # Core workflow engine
```

---

## ▶️ How to Run

```bash id="v2qbyu"
npm install
npm run dev
```

Then open:
👉 http://localhost:5173

---

## 🧠 Key Design Decisions

* **Auto-connect logic**
  Simplifies workflow creation and enforces structure

* **Vertical alignment strategy**
  Ensures readability and mimics real workflow tools

* **Custom node components**
  Each node type is modular and reusable

* **Separation of concerns**
  UI, logic, and validation are cleanly separated

---

## ⚠️ Validation Rules

* Must include:

  * At least one **Start node**
  * At least one **End node**
* Nodes must be connected for simulation

---

## 🔮 Future Improvements

* Undo / Redo functionality
* Export / Import workflow (JSON)
* Smart auto-layout (graph positioning)
* Visual error indicators
* Backend integration for persistence

---

## 📸 Preview

*Add a screenshot of your UI here for better impact*

---

## 💡 What This Project Demonstrates

* Strong React fundamentals and component architecture
* Practical usage of graph-based UI (React Flow)
* Clean, modular, scalable design
* UX thinking (auto-connect, alignment, validation)

---

