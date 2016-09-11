function TodoApp () {
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

  // add todo handles creating a todo object
  this.addTodo = function(text) {
    var todo = {
      text: text,
      id: (this.todos[this.todos.length - 1].id + 1)
    };
    // it generates the id by looking at the last item in the array
    // reading its id and adding 1 to it, so no two todos have the same id
    this.todos.push(todo);
    // then it adds it to the todos
    this.render(todo);
    // then it renders
  };

  this.render = function(todo) {
    // render creates a div with an id of the todo's id
    // and the text value
    // as well as a span to remove the todo
    var el = '<div id='+todo.id+'>'+todo.text +' <span class="remove" data-todoid="'+todo.id+'">x</span></div>';
    this.$el.innerHTML += el;
  };

  this.renderAll = function() {
    // renderAll calls render() for each todo item
    // after resetting the $el's innerHTML to be empty
    var self = this;
    self.$el.innerHTML = '';
    this.todos.forEach(function(todo) {
      self.render(todo);
    });
  };

  var self = this; // cache a reference to (this);

  this.input.addEventListener('keyup', function (e) {
    if (e.which === 13) {
      // e.target.value is the inputs text value
      self.addTodo(e.target.value); // add the todo
      e.target.value = ''; // reset the text box
    }
  }, false);

  this.$el.addEventListener('click', function(e) {
    // delegeate the event to the span tag with a class of "remove"
    if ( e.target.classList.contains('remove') ) {
      // read the id from the data attribute;
      var id = e.target.dataset.todoid;
      self.todos = self.todos.filter(function(todo) {
        // loop through all todos filtering out the todo that has
        // the id of the span's todoid attribute
        return todo.id != id;
      });
      // rerender todos
      self.renderAll();
    }
  });

  // kick things off by rendering the initial todos
  this.renderAll();
}

module.exports = TodoApp;
