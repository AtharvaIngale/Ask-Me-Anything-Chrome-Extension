# Ask-Me-Anything-Chrome-Extension
Ask Me Anything Chrome Extension consists of mock chatgpt api using node.js.

# ChatGPT Chrome Extension and Mock API Documentation

This documentation provides detailed instructions on how to set up and use the ChatGPT Chrome Extension along with a Mock API for simulating interactions with a ChatGPT-like service.

## Table of Contents

1. **Introduction**
2. **Chrome Extension Development**
   - 2.1 Manifest File (manifest.json)
   - 2.2 Popup User Interface (popup.html)
   - 2.3 JavaScript Logic (popup.js)
3. **Mock GenAI API**
   - 3.1 Setting Up the API
   - 3.2 API Endpoint (/api/chat)
4. **Integration**
   - 4.1 Communicating with the Mock API
5. **Documentation of Usage**
6. **Bonus: Error Handling and UI/UX**
7. **Conclusion**

## 1. Introduction

The ChatGPT Chrome Extension and Mock API project aims to demonstrate the integration of a Chrome extension with a simulated ChatGPT API. Users can input questions in the extension popup, and the extension will communicate with the mock API to receive and display predefined responses.

## 2. Chrome Extension Development

### 2.1 Manifest File (manifest.json)

- The `manifest.json` file defines the extension's metadata and behavior.
- It specifies permissions, UI elements, and scripts.
- Customization options include extension name, version, and icons.

### 2.2 Popup User Interface (popup.html)

- `popup.html` serves as the user interface of the extension.
- It contains input fields, buttons, and display areas.
- You can style this HTML file using CSS.

### 2.3 JavaScript Logic (popup.js)

- `popup.js` handles user interactions and API communication.
- It listens for button clicks, retrieves input, and makes API requests.
- Customize it to your needs, including error handling and UX improvements.

## 3. Mock GenAI API

### 3.1 Setting Up the API

- The Mock GenAI API is created using Node.js and Express.
- Initialize a Node.js project, install Express, and create the server.
- Ensure the API is running on a specific port (e.g., `localhost:3000`).

### 3.2 API Endpoint (/api/chat)

- The `/api/chat` endpoint receives POST requests.
- It accepts a JSON object with a `question` field.
- You can customize the API logic to generate responses based on the input question.

## 4. Integration

### 4.1 Communicating with the Mock API

- In `popup.js`, a fetch request is used to send user questions to the Mock GenAI API.
- The API response is displayed in the extension's popup.
- Ensure the extension and the API server are running simultaneously.

## 5. Documentation of Usage

- To use the ChatGPT Chrome Extension:
  1. Load the extension as an "unpacked extension" in Chrome. 
  2. Click on the extension icon to open the popup.
  3. Enter your question in the input field and click the "Ask" button.
  4. The response from the Mock GenAI API will be displayed in the popup.

## 6. Bonus: Error Handling and UI/UX

- Implement error handling in `popup.js` to manage scenarios where the API is unreachable.
- Enhance the UI/UX by customizing the CSS in `popup.html` and adding user-friendly features to the popup.

## 7. Conclusion

This documentation provides a comprehensive guide for creating a ChatGPT Chrome Extension integrated with a Mock GenAI API. It covers extension development, API setup, integration steps, and bonus features for error handling and user experience improvements.

Feel free to replace the mock API with a real ChatGPT API to create a functional AI chat extension.
