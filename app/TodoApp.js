class TodoApp {
  constructor () {
  // $el is where everything gets rendered
    this.$el = document.querySelector('#todos');
    // input is where we add a new todo item
    this.input = document.querySelector('#new-todo');

    // initialize our todos array with todos
    this.todos = [{
      text: 'Feed the cat',
      id: 0
    }, {
      text: 'Master javascript',
      id: 1
    }];

    this.input.addEventListener('keyup', (e) => {
      if (e.which === 13) {
        // e.target.value is the inputs text value
        this.addTodo(e.target.value); // add the todo
        e.target.value = ''; // reset the text box
      }
    }, false);

    this.$el.addEventListener('click', (e) => {
      // delegeate the event to the span tag with a class of "remove"
      if ( e.target.classList.contains('remove') ) {
        // read the id from the data attribute;
        const id = e.target.dataset.todoid;
        // loop through all todos filtering out the todo that has
        // the id of the span's todoid attribute
        this.todos = this.todos.filter((todo) => todo.id != id);
        // rerender todos
        this.renderAll();
      }
    });

    // kick things off by rendering the initial todos
    this.renderAll();
}

  this.input.addEventListener('keyup', (e) => {
    if (e.which === 13) {
      // e.target.value is the inputs text value
      this.addTodo(e.target.value); // add the todo
      e.target.value = ''; // reset the text box
    }
  }, false);

  this.$el.addEventListener('click', (e) => {
    // delegeate the event to the span tag with a class of "remove"
    if ( e.target.classList.contains('remove') ) {
      // read the id from the data attribute;
      const id = e.target.dataset.todoid;
      // loop through all todos filtering out the todo that has
      // the id of the span's todoid attribute
      this.todos = this.todos.filter((todo) => todo.id != id);
      // rerender todos
      this.renderAll();
    }
  });

  // kick things off by rendering the initial todos
  this.renderAll();
}

  // add todo handles creating a todo object
  addTodo (text) {
    const todo = {
      id: (this.todos[this.todos.length - 1].id + 1),
      text,
    };
    // it generates the id by looking at the last item in the array
    // reading its id and adding 1 to it, so no two todos have the same id
    this.todos.push(todo);
    // then it adds it to the todos
    this.render(todo);
    // then it renders
  };

  render ({id, text}) {
    // render creates a div with an id of the todo's id
    // and the text value
    // as well as a span to remove the todo
    const el = `
      <div>
          ${text}
          <span class="remove" data-todoid="${id}">
            x
          </span>
      </div>
      `;
    this.$el.innerHTML += el;
  }

  renderAll () {
    // renderAll calls render() for each todo item
    // after resetting the $el's innerHTML to be empty
    this.$el.innerHTML = '';
    this.todos.forEach((todo) => {
      this.render(todo);
    });
  };
}

module.exports = TodoApp;
// export default TodoApp;
