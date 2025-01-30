# Counter App

A simple counter application built using **React** following the **Intent-Model-View (IMV) architecture**.

## Features 🚀
- ✅ **Increment & Decrement**: Increase or decrease the counter value.
- ✅ **Limits**: Counter cannot go below **0** or above **100**.
- ✅ **Auto Increment**: Button to start auto-incrementing the counter.
- ✅ **Stop Auto Increment**: Stop the auto-increment feature at any time.
- ✅ **Styled UI**: Simple and clean UI using CSS.

---

## Project Structure 📁
```
counter-app/
│── src/
│   ├── intent/
│   │   ├── CounterIntent.js
│   ├── model/
│   │   ├── CounterModel.js
│   ├── view/
│   │   ├── CounterView.js
│   │   ├── CounterView.css
│   ├── App.js
│   ├── index.js
│── package.json
│── public/
│── node_modules/
│── .gitignore
│── README.md
```

---

## Installation & Setup 🛠

1️⃣ Clone the repository:
```sh
git clone https://github.com/your-username/counter-app.git
cd counter-app
```

2️⃣ Install dependencies:
```sh
npm install
```

3️⃣ Run the application:
```sh
npm start
```
The app will be available at **http://localhost:3000/**.

---

## Implementation Details 🏗

### **1️⃣ CounterModel.js** (Manages State)
- Holds the **counter value**.
- Provides functions to **increment, decrement, and auto-increment**.
- Ensures value stays within **0 to 100**.

### **2️⃣ CounterIntent.js** (Handles Logic)
- Calls model functions when **buttons are clicked**.
- Manages **start and stop auto-increment**.

### **3️⃣ CounterView.js** (User Interface)
- Renders buttons and **displays counter value**.
- Uses **React Hooks** (`useState`, `useEffect`) to update UI.

---

## Usage 🖥
- Click `+` to increase counter (max: **100**).
- Click `-` to decrease counter (min: **0**).
- Click `Auto Increment` to start auto-increasing.
- Click `Stop` to halt auto-incrementing.

---

## Future Improvements 🚀
- 🔹 Add dark mode 🌙.
- 🔹 Use local storage to **save counter state**.
- 🔹 Add animations and better UI.

---

## License 📜
This project is **MIT Licensed**.

---

## Author 💡
**[Your Name]** - Web Developer & Programmer

🔗 **GitHub**: [your-username](https://github.com/your-username)


