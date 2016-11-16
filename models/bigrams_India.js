var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bigramsSchema = new Schema({

	first: String,

	second: String,

	frequency: Number,

	probability: { type: Number,default:0 },

	PMI: Number,

	p:Number



});

bigramsSchema.index({ first:1,second:1 }, { unique: true });

var bigrams = mongoose.model( 'bigrams_India' , bigramsSchema );

module.exports = bigrams;
