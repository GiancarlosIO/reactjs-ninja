var React  = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
// Module requires
var TodoItem = require('./todoitem');
var AddItem = require('./addItem');

// Create TodoComponent component
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ['wash up', 'watch tv', 'eat a cheese', 'buy flowers'],
      age: 30
    }
  },
  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));

    return (
      <div id="todo-list">
        <p onClick={this.clicked}>Todo!</p>
        <span>Edad: {this.state.age}</span>
        <ul>
          {todos}
        </ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  },
  // custom functions
  clicked: function () {
    console.log('u clicked me');
  },
  onDelete: function (item) {
    var updateTodos = this.state.todos.filter(function (val, index) {
      return item !== val;
    });
    this.setState({
      todos: updateTodos
    })
  },
  onAdd: function (item) {
    var updateTodos = this.state.todos;
    updateTodos.push(item);
    this.setState({
      todos: updateTodos
    });
  }
});

ReactDOM.render(<TodoComponent hello='Hello' />, document.getElementById('todo-wrapper'))
