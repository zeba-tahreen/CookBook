import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import API from '../../utils/API';
import CreateRecipe from './CreateRecipe';

class Saved extends Component {
  state = {
    recipeList: []
  };

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    API.getSavedRecipes()
      .then(res => this.setState({ recipeList: res.data }))
      .catch(err => console.log(err));
  };

  deleteRecipe = recipeId => {
    API.deleteRecipe(recipeId)
      .then(this.getRecipes)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        {/* make jumbotron */}
        <div className="jumbotron jumbotron-fluid text-light">
          <div className="container-fluid">
            <CreateRecipe/>
          </div>
        </div>
        {/* create row with two columns */}
        <div className="container-fluid">
          <div className="row">
            {/* begin recipe result section */}
            <div className="col-12">
              {!this.state.recipeList.length ? (
                <h2 className="text-center">No Saved Recipes To Display</h2>
              ) : (
                <React.Fragment>
                  <h3>Showing Saved Recipes</h3>
                  <div className="row">
                    {this.state.recipeList.map(recipe => {
                      return (
                        <div className="col-12 col-md-4" key={recipe._id}>
                          <div className="card">
                            <img src={recipe.image} alt={recipe.title} className="card-img-top" />
                            <div className="card-body">
                              <h5 className="card-title">{recipe.title}</h5>
                              <p className="card-text">Released: {recipe.date}</p>
                              {recipe.authors ? <p className="card-text">By: {recipe.authors.join(', ')}</p> : ''}
                              <p className="card-text">
                                <strong>Description</strong>: {recipe.description}{' '}
                              </p>

                              <a
                                href={recipe.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="btn btn-success btn-small">
                                See More.
                              </a>
                              <button onClick={() => this.deleteRecipe(recipe._id)} className="btn btn-dark btn-small">
                                Delete recipe.
                              </button>
                              <Link to={`/saved/${recipe._id}`} className="btn btn-block btn-danger">View recipe</Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Saved;