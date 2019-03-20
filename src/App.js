import React, { Component } from 'react';
import  Todo  from "./components/Todo";
import {items} from './clases.json';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      items 
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove =  this.handleRemove.bind(this);
  }

  
  handleAdd(todo){
    this.setState({
      items:[...this.state.items,todo]
    })

  }

  handleRemove(index){
    
    
    this.setState({
      items:this.state.items.filter((e,i)=>{ return i !== index })
    })
    
  }

  render() {

    console.log(this.state.items);  
    const array = this.state.items.map(
      (item,i)=>{ 
        return (
          
          <div className="col-3" key={i}>

            <div className="card mt-4" >
                <div className="card-header">
                <h5 className="card-title">{item.titulo}</h5>
                <span className="badge  eliminar" onClick={this.handleRemove.bind(this,i)}>Cerrar</span>

                </div>
                <div className="card-body">
                  <p className="card-text">{item.descripcion}</p>
                  <span className="badge badge-warning">{item.prioridad}</span>
              </div>
              <div className="card-footer text-muted">{item.responsable} </div>
            </div>
          </div>

        )
      })


    return (

      <div className="App">

          <div className="container">
          < div className="row">
    


            <div className="col-md-3">
                <Todo handleAdd={this.handleAdd}/>
            </div>
            {array}
             

            </div> 
          </div>   
         
        
      </div>
    );
  }
}

export default App;
