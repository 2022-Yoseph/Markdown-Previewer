const defaultMarkdown = `
# Welcome to the Markdown Previewer!

## This is a sub-heading


Here is some \`inline code\`

\`\`\`javascript
// This is a code block
function greet() {
  return "Hello, world!";
}
\`\`\`

- List item one
- List item two

> This is a blockquote

**This text is bold**

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultMarkdown
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Markdown Editor</h2>
        <textarea
          id="editor"
          value={this.state.markdown}
          onChange={this.handleChange}
        />
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked.parse(this.state.markdown, { breaks: true })
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
