# 🌱 My JavaScript Learning Journey  

Welcome to my first JavaScript repository! 🚀  

This repo marks the beginning of my journey into web development. As someone who started learning JavaScript from scratch, I wanted to build small yet meaningful projects to practice what I learned. Each project here represents a milestone—something new I explored, struggled with, and ultimately figured out.  

If you're also learning JavaScript, feel free to check out the code, experiment with it, and even contribute. Let's grow together! 💡  

---

## 🏗️ Projects I Built While Learning  

### **1. Bookmark Saver**  
My first-ever project! A simple bookmark saver with a dark mode toggle. *Note: It doesn’t store bookmarks in local storage yet.*  

### **🖩 Basic Calculator**  
A basic arithmetic calculator. While making this, I learned how JavaScript handles user inputs and mathematical operations.  

### **2. Heads and Tails Game**  
A fun little game that taught me about randomization and basic game logic. Includes a scoring system!  

### **3. Password Generator**  
A random password generator with options for 8 or 16 characters. This project helped me understand string manipulation and randomness in JavaScript.  

### **4. QR Code Generator**  
This was my attempt at working with APIs, but I built it before diving into backend development. *It’s currently not functional—feel free to contribute!*  

### **5. Rock Paper Scissors**  
A classic game! While building this, I improved my understanding of conditional statements and user interactions.  

### **6. English to Roman Numeral Converter**  
A tool that converts numbers to Roman numerals. *It has a known issue that I need to fix, but that’s part of the learning process!*  

### **7. Weather App**  
My first project using an API! This app fetches real-time weather data from OpenWeather. To make it work, replace the API key with your own:  

```javascript
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Process and display the weather data
    })
    .catch(error => console.error('Error fetching the weather data:', error));
```
## 🛠️ How to Use This Repository  

This repo is for beginners who want to see simple JavaScript projects in action. You can:  

1. **Clone the repository:**  
    ```bash
    git clone https://github.com/Misa-De-Codes/JavaScript-Basic-Projects.git
    ```  

2. **Navigate to the project folder:**  
    ```bash
    cd JavaScript-Basic-Projects
    ```  

3. **Open the project files:**  
   Open the corresponding `.html` files in your browser to test each project.  

4. **Modify and Experiment:**  
   Feel free to tweak the code, break things, and learn from it!