class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.text}</li>
    )
  }
}

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [
        {
          id: 1,
          text: 'buy milk fam'
        },
        {
          id: 2,
          text: 'buy more milk fam'
        },
        {
          id: 3,
          text: 'buy even more milk fam'
        },
      ],
      inputValue: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    console.log('SUBMIT FAM', this.state.inputValue);
    e.preventDefault();
  }


  handleChange(e) {
    console.log('CHANGING', e.target.value)
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    const toDoItems = this.state.todo.map((item) => {
      return (<ToDoItem key={item.id} text={item.text}/>);
    });
    return (
      <div>
        <h1>To Do App</h1>
        <ul>
          {toDoItems}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.inputValue}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <ToDoApp/>, document.getElementById('root'));

//   fetch('http://localhost:8080/api/todos')
//   .then((response) => response.json())
//   .then((todos) => {
//     todosNode.innerHTML = todos
//     .map((todo) => {
//       return `<li>${todo.text}</li>`;
//     })
//     .join('\n');
//   });
// };
