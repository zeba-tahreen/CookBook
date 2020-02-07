const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ingredientSchema = new mongoose.Schema({
    ingredientName: {
      type: String,
      maxlength: 25
    },
    quantity: {
      type: Number,
      default: 0,
      min: 0,
      max: 9999
    },
    type: {
      type: String,
      trim: true,
      required: true,
      maxlength: 10
    }
  });
  
  const instructionSchema = new mongoose.Schema({
    order: Number,
    step: {
      type: String,
      required: true,
      maxlength: 2000
    }
  });
  
  const recipeSchema = new mongoose.Schema(
    {
      nameOfRecipe: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
      },
      description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
      },
      category:{
          type:ObjectId,
          ref:"Category",
          required: true
      },
      ingredients: [ingredientSchema],
      photo:{
          data: Buffer,
          contentType: String
      },
      
      instructions: [instructionSchema],
      people:{
          type:Number,
          required: true
    },
    },
    { timestamps: true }
  );

  module.exports = mongoose.model("Recipe", recipeSchema);