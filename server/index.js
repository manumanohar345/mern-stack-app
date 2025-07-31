
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Employee = require('./models/Employee');
const Item = require('./models/Item');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mern_stack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Employee CRUD
app.get('/api/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});
app.post('/api/employees', async (req, res) => {
  const emp = new Employee(req.body);
  await emp.save();
  res.json(emp);
});
app.put('/api/employees/:id', async (req, res) => {
  const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(emp);
});
app.delete('/api/employees/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// Inventory CRUD
app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});
app.post('/api/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});
app.put('/api/items/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});
app.delete('/api/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
