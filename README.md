# 2218521

# 🔗 URL Shortener

A simple and efficient URL Shortener built using Python and Flask. This project allows users to convert long URLs into short, unique codes that can be used to redirect back to the original links.

---

## 📌 Features

- 🔒 Unique short URL generation
- 🔁 Automatic redirection to the original URL
- 🧠 In-memory or file-based storage (configurable)
- 📊 Click tracking (optional)
- 🌐 Minimal and responsive front-end
- 📦 Simple and lightweight – perfect for learning or small-scale deployments

---

## ⚙️ How It Works

1. **User Input**: The user submits a long URL through the input form.
2. **Short Code Generation**: The system generates a short, unique code (e.g., `abc123`).
3. **Mapping**: This short code is stored in a database or dictionary along with the original URL.
4. **Redirection**: When a user visits `/abc123`, the server looks up the original URL and redirects them.

---

## 🚀 Technologies Used


- **HTML/CSS** – for front-end
- **express/axios**- for back-end

---

## 🛠️ Setup Instructions

### 🔧 Prerequisites

- axios-1.6.0
- express-4.18.2
- `pip` installed

### 📥 Clone the Repository

```bash
git clone https://github.com/ashutoshR112/2218521.git
cd 2218521
