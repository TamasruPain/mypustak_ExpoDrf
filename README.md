
---

## ⚙️ **Backend Setup (Django REST Framework)**

1. **Navigate to backend folder**

    ```bash
    cd backend
    ```

2. **Create virtual environment**

    ```bash
    python -m venv env
    ```

3. **Activate environment**

    - Windows Git Bash

      ```bash
      source env/Scripts/activate
      ```

    - Windows CMD

      ```bash
      env\Scripts\activate
      ```

    - Mac/Linux

      ```bash
      source env/bin/activate
      ```

4. **Install requirements**

    ```bash
    pip install django djangorestframework
    ```

5. **Run migrations**

    ```bash
    python manage.py migrate
    ```

6. **Run the server**

    ```bash
    python manage.py runserver 0.0.0.0:8000
    ```

7. **Endpoints**

    - `GET api/v1/books/` – Fetch list of books
    - `POST api/v1/order/` – Place an order

---

## ⚛️ **Frontend Setup (React Native Expo)**

1. **Navigate to frontend folder**

    ```bash
    cd frontend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the app**

    ```bash
    npx expo start
    ```

4. **Test on physical device or emulator**

    - For **physical device**, ensure your Django backend URL uses your **local IP address**.
    - Example in `host_url.ts`:

      ```ts
      const hostUrl = 'http://192.168.xx.xx:8000';
      export default hostUrl;
      ```

---

## 🔑 **Important Notes**

- Update your **local IP address** in `host_url.ts` before running on physical device.
- Ensure **backend and phone are on the same WiFi network**.

---



## ✍️ **Author**

- **Name:** Tamasru Pain
- **Project:** MyPustak Assignment (Expo + Django REST)


