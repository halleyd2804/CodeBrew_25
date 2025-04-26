
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Read environment variables
const { MONGODB_URI, PORT = 5000 } = process.env;

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in environment variables.');
  process.exit(1);
}

// Connect to MongoDB, explicitly specifying the "Test" database
mongoose
  .connect(MONGODB_URI, {
    dbName: 'Test', // ensures we're using the Test database
  })
  .then(() => console.log('MongoDB connected to Test database'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Define schema matching your CropData documents
const plantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    nutrition: { type: [String], default: [] },
    water: { type: String, default: '' },
    sunlight: { type: String, default: '' },
    growing_time: { type: String, default: '' },
    warning: { type: [String], default: [] },
  },
  { collection: 'CropData' } // use CropData collection
);

const Plant = mongoose.model('Plant', plantSchema);

// DEBUG: fetch first document to verify connection
app.get('/api/debug', async (_req, res) => {
  try {
    const doc = await Plant.findOne().lean();
    if (!doc) return res.status(404).json({ error: 'No documents found in CropData' });
    res.json(doc);
  } catch (error) {
    console.error('Error in debug route:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// List plant names
app.get('/api/plants', async (_req, res) => {
  try {
    const plants = await Plant.find({}, 'name').limit(100).lean();
    res.json(plants.map((p) => p.name));
  } catch (error) {
    console.error('Error fetching plant list:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Fetch plant by name (case-insensitive)
app.get('/api/plants/:name', async (req, res) => {
  const { name } = req.params;
  console.log('Searching for plant name:', name);
  try {
    const plant = await Plant.findOne({ name: { $regex: `^${name}$`, $options: 'i' } }).lean();
    if (!plant) {
      console.warn(`Plant not found: ${name}`);
      return res.status(404).json({ error: 'Plant not found' });
    }
    res.json(plant);
  } catch (error) {
    console.error('Error fetching plant:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const soilSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, unique: true },
    nutrition: { type: [String], default: [] },
  },
  { collection: 'SoilData' } 
);

const Soil = mongoose.model('Soil', soilSchema);

// List soil names
app.get('/api/soil', async (_req, res) => {
  try {
    const soil = await Soil.find({}, 'type').limit(100).lean();
    res.json(soil.map((p) => p.type));
  } catch (error) {
    console.error('Error fetching soil list:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Fetch soil by name (case-insensitive)
app.get('/api/soil/:type', async (req, res) => {
  const { type } = req.params;
  console.log('Searching for soil name:', type);
  try {
    const soil = await Soil.findOne({ type: { $regex: `^${type}$`, $options: 'i' } }).lean();
    if (!soil) {
      console.warn(`Soil not found: ${type}`);
      return res.status(404).json({ error: 'Soil not found' });
    }
    res.json(soil);
  } catch (error) {
    console.error('Error fetching soil:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

