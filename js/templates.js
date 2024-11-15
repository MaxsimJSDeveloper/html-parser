export const templateFirst = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport">
    <title>Sample HTML</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section of the webpage.</p>
        </section>
        <section id="about">
            <h2>About Section</h2>
            <p>This is the about section of the webpage.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>`;

export const templateSecond = `<!DOCTYPE html><html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML to JSON</title>
    <script src="html2json.js"></script>
    <style>
      h1 {
        font-family: sans-serif
      }
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .container {
        display: flex;
        width: 100%;
        gap: 10px;
      }

      .field {
        display: flex;
        flex-direction: column;
        width: 50%;
      }

      textarea {
        width: 100%;
        height: calc(100vh - 170px);
        max-width: 100%;
        white-space: pre;
      }

      .buttons {
        display: flex;
        gap: 10px;
        margin-top: 10px;
      }

      button {
        width: 150px;
        height: 40px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>Jito's Front-end Intern "html2json" Test Task</h1>
    <div class="container">
      <div class="field">
        <label for="html">Input for "html2json" conversion:</label>
        <textarea id="html" placeholder="Enter your HTML"></textarea>
      </div>
      <div class="field">
        <label for="json">Results of "html2json" conversion:</label>
        <textarea disabled id="json" placeholder="Here will be output from your html2json function"></textarea>
      </div>
    </div>
    <div class="buttons">
      <button onclick="convertHtml2JsonAndSet()">Convert to JSON</button>
      <button onclick="showExample1()">Input Example 1</button>
      <button onclick="showExample2()">Input Example 2</button>
    </div>
  </body>
</html>
`;
