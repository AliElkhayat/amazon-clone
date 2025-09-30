# 🛒 Amazon Clone  

A **responsive Amazon Clone** built with **React-Vite**, styled using **CSS**, featuring **Firebase Authentication**, **Shopping Cart**, and real-time **toast notifications** with **React Hot Toast**.  

🔗 **Live Demo**: [Amazon Clone](https://amazon-clone-xi-two.vercel.app/)  

---
## 📸 Screenshots
-----------------------



<img width="960" height="434" alt="am1" src="https://github.com/user-attachments/assets/5f9b6cb0-aaf4-4aff-b5c4-20fb6bc0c734" />
----------

<img width="329" height="425" alt="am2" src="https://github.com/user-attachments/assets/e83f6721-2075-42c7-beb9-0fffae3f1d9a" />

---------------
<img width="309" height="437" alt="am3" src="https://github.com/user-attachments/assets/cfd5b5be-71d6-4482-8b9f-c8ca73d2c9e2" />

---------------------------

<img width="960" height="437" alt="am4" src="https://github.com/user-attachments/assets/09e499d7-6343-4b29-a497-41778f55feb7" />




## 🚀 Features  

- 📱 **Responsive design** (mobile, tablet, desktop)  
- 🔐 **Firebase Authentication** (login & signup)  
- 🛍️ **Cart system** powered by Context API  
- ⚡ **Add to Cart / Remove from Cart** functionality  
- 🔔 **Toast notifications** (React Hot Toast) when:  
  - Adding items to cart  
  - Deleting items from cart
  - Updating item quantity  

- 🖼️ Clean UI inspired by Amazon  

---

## 🛠️ Tech Stack  

- **Frontend**: React  
- **Styling**: CSS  
- **Auth**: Firebase Authentication  
- **State Management**: Context API  
- **Notifications**: React Hot Toast  

---

## 📊 Project Flow  

```mermaid
    flowchart TD
A[User] -->|Browse Products| B[Amazon Clone UI]
B -->|Login/Signup| C[Firebase Auth]
C -->|Auth Success| B
B -->|Add to Cart| D[Context API Cart State]
D -->|Trigger| E[React Hot Toast]
B -->|Remove from Cart| D
D -->|Buy Item| F[Payment / Order Confirmation]
```
----------------------------
# ⚙️ Installation & Setup

### Clone the repository
git clone https://github.com/your-username/amazon-clone.git

### Navigate into project
cd amazon-clone

### Install dependencies
npm install

### Add Firebase config
### .env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
...

### Start development server
npm run dev

-----------------------------------------


# Built with ❤️ by Ali Mahmoud.

Black wolf
