import React, { Component } from 'react';

class Todo extends Component {
    constructor(){
      super();
  
      this.state={
        titulo:"",
        responsable:"",
        descripcion:"",
        prioridad:""
      }
      this.handleInput=this.handleInput.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
  

    handleInput(e){
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    handleSubmit(e){
      e.preventDefault();
      this.props.handleAdd(this.state);
    }
    
  
    render() {
  

      return (
        <div className="card mt-4">
        <form  className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              className="form-control"
              value={this.state.titulo}
              placeholder="Title"
              onChange={this.handleInput}
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              className="form-control"
              value={this.state.responsable}
              placeholder="Responsible"
              onChange={this.handleInput}

              
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              value={this.state.descripcion}
              placeholder="Description"
              onChange={this.handleInput}

              />
          </div>
          <div className="form-group">
            <select
                name="prioridad"
                className="form-control"
                value={this.state.prioridad}
                onChange={this.handleInput} 
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>

      </div>
      );
    }
  }
  
  export default Todo;
  