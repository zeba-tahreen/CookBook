import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API from '../../utils/API';


class CreateRecipe extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      dish: '',
      description: '',
      photo: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit = () => {
    console.log(" recipe data is here")
    API.createRecipes({
        title: this.state.title,
        dish: this.state.dish,
        description: this.state.description,
        photo: this.state.photo
    })
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

  
  onSubmit = (e) => {
    e.preventDefault();

    const { title, dish, description, photo } = this.state;

    axios.post('/api/recipe', { title, dish, description, photo })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { user, title, dish, description, photo } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD Your Recipe
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Recipe List</Link></h4>
            <form onSubmit={this.onSubmit}>
              {/* <div className="form-group">
                <label for="isbn">ISBN:</label>
                <input type="text" className="form-control" name="isbn" value={isbn} onChange={this.onChange} placeholder="ISBN" />
              </div> */}
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="dish">Ingredients:</label>
                <input type="text" className="form-control" name="dish" value={dish} onChange={this.onChange} placeholder="Ingredients" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea className="form-control" name="description" value={description} onChange={this.onChange} placeholder="Description" cols="80" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="photo">Photo:</label>
                <input type="file" className="form-control" name="photo" value={photo} onChange={this.onChange} placeholder="Published Year" />
              </div>
             
              <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRecipe;
