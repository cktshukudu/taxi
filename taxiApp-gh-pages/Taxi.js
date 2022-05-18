const addApp = () => ({
    add: [],
    addTodo(event) {
      event.preventDefault();
      var item = this.$root.querySelector('.destination_input_task').value;
      if (item) {
        const id = this.add.length;
        this.add = [
          ...this.add, 
      {
            id,
            item: item,
            completed: false,
        editing: false
      }
        ]	
    }
}
});