import { Schema, model } from 'mongoose';
import './ReviewModel.js';
//  why need to  import Review Model

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, 'Too short product title'],
      maxlength: [100, 'Too long product title'],
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      minlength: [20, 'Too short product description'],
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required'],
    },
    sold: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      trim: true,
      max: [200000, 'Too long product price'],
    },
    priceAfterDiscount: {
      type: Number,
    },
    colors: [String],

    imageCover: {
      type: String,
      required: [true, 'Product Image cover is required'],
    },
    images: [String],
    category: {
      type: Schema.ObjectId,
      ref: 'Category',
      required: [true, 'Product must belong to a category'],
    },
    subcategories: [
      {
        type: Schema.ObjectId,
        ref: 'SubCategory',
      },
    ],
    brand: {
      type: Schema.ObjectId,
      ref: 'Brand',
    },

    ratingsAverage: {
      type: Number,
      min: [1, 'Rating must be above or equal 1.0'],
      max: [5, 'Rating must be below or equal 5.0'],
      // Remove default value or set it to null
      default: 4.5,
      set: (val) => Math.round(val * 10) / 10
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // ✅ إصلاح وضع timestamps في مكانه الصحيح
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
 // what is 
productSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product',
  localField: '_id',
});

// Mongoose query middleware
productSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'category',
    select: 'name -_id',
  });
  next();
});

// Function to set image URLs
const setImageURL = (doc) => {
  if (doc.imageCover) {
    doc.imageCover = `${process.env.BASE_URL}/products/${doc.imageCover}`;
  }
  if (doc.images) {
    doc.images = doc.images.map((image) => 
      `${process.env.BASE_URL}/products/${image}`);
  }
};


// Apply image URL formatting on query results
productSchema.post('init', (doc) => setImageURL(doc));
productSchema.post('save', (doc) => setImageURL(doc));

export default model('Product', productSchema);
