# HTML to JSON Converter

## Project Description

The **HTML to JSON Converter** is a tool designed to convert HTML code into JSON format. This functionality is particularly beneficial for developers working with web technologies, as many modern applications require data to be processed in JSON format. This project was developed as part of a test assignment for an internship position as a front-end developer at Jito.

The `html2json` function is implemented with the following objectives:

- **Handle Various HTML Structures**: Effectively manages different HTML variations, including nested tags, attributes, text nodes, and styles.
- **Robust Execution**: Executes without failures, even when encountering minor errors in the input HTML.
- **Input Data Validation**: Incorporates checks for the correctness of the input data to enhance user experience and reliability.

**Note**: ChatGPT was utilized during the development process, and the entire chat history is available in the `ai_help/chatgpt_chat.txt` folder.

## Tasks

The `html2json` function performs the following tasks:

1. **Convert HTML to JSON**: Accepts HTML code and returns its corresponding representation in JSON format.
2. **Error Handling**: Addresses potential errors that may arise when processing invalid HTML code, providing informative error messages while preventing application crashes.

## Project Structure

The project comprises the following files and folders:

- **`html2json.js`**: Contains the implementation of the `html2json` function and its supporting algorithms for converting HTML to JSON.
- **`html_samples/`**: A folder containing text files for testing the function, featuring both simple and complex examples of HTML code.
- **`index.html`**: The main HTML file featuring a user interface for converting HTML to JSON, allowing users to input HTML and receive JSON output.
- **`ai_help/`**: A folder containing additional resources, including:
  - **`chatgpt_chat.txt`**: Documentation of the correspondence related to the project's implementation assistance.

### Additional Files and Folders

- **`js/`**: Contains all JavaScript code components.
- **`templates.js`**: Includes markup used in the converter's operation examples.
- **`state.js`**: A global object for storing HTML and parsing positions.
- **`refs.js`**: Contains main constants that store HTML elements.
- **`parseNode.js`**: The parser function that iteratively converts HTML to JSON.
- **`constants.js`**: Contains constants for other functions.
- **`eventHandlers.js`**: Contains callback functions for event handling.
- **`validation/`**: A folder with validation functions:
  - **`validateInitialHtml.js`**: Validates HTML before parsing.
  - **`validateNode.js`**: Validates nodes during the parsing process.
- **`utils/`**: Contains reusable utility functions:
  - **`getErrorContext.js`**: Determines the location of an error.
  - **`normalizeHtml.js`**: Normalizes HTML input.
  - **`skipWhitespace.js`**: Skips whitespace during parsing.
- **`ui/`**: Contains functions for enhancing the user interface.
- **`parsers/`**: Contains parser functions used in `parseNode.js`:
  - **`parseAttributes.js`**: Parses HTML attributes.
  - **`parseClosingTag.js`**: Parses closing tags.
  - **`parseComment.js`**: Parses comments.
  - **`parseCssContent.js`**: Parses CSS rules.
  - **`parseDoctype.js`**: Parses DOCTYPE declarations.
  - **`parseOpeningTag.js`**: Parses opening tags.
  - **`parseText.js`**: Parses text nodes.
- **`main.js`**: Contains event handlers for user interaction.
- **`styles.css`**: Stylesheet for the user interface.
- **`img/`**: A folder containing icons and images used in the project.

## How to Run the Project

1. Download the project and extract the `.zip` file to your local machine.
2. Open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Edge).
3. Paste the HTML code into the "Input HTML" field and click the "Convert to JSON" button to view the output in the "Results of conversion" field.
4. Test the function using provided HTML examples located in the `html_samples/` folder.

## Expected Results

When functioning correctly, the program will produce JSON output that corresponds to a structured representation of the original HTML. The conversion should execute seamlessly, even if the HTML code contains minor errors or non-standard structures. The code should maintain a clean and well-organized style.

### Key Features

- **Code Cleanliness**: Functions have clear purposes and descriptive names, ensuring readability and maintainability.
- **Error Handling**: Mechanisms are in place to prevent crashes from invalid input, providing users with helpful error messages.
- **User Interface**: The interface is designed to be intuitive, with clear prompts and buttons for conversion and clearing.

## Conclusion

The **HTML to JSON Converter** project demonstrates my skills in developing front-end applications and my ability to address data processing challenges. I hope this solution provides a valuable assessment of my capabilities and approach to development. For any questions, suggestions, or comments, please feel free to reach out; I am open to discussion and feedback.

## Contacts

- **Author**: Maksym
- **Email**: [golovkomaksim852@gmail.com](mailto:golovkomaksim852@gmail.com)
