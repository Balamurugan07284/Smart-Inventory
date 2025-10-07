
const express = require('express');
const router = express.Router();
const inventory = require('../db.json').inventory;

// Get all inventory items
router.get('/', (req, res) => {
  res.json(inventory);
});

// Get single inventory item
router.get('/:id', (req, res) => {
    const item = inventory.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
});

// Add a new inventory item
router.post('/', (req, res) => {
    const { name, category, sku, stock, price, status } = req.body;
    if (!name || !category || !sku || !stock || !price || !status) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }
    const newItem = {
        id: inventory.length + 1,
        name,
        category,
        sku,
        stock,
        price,
        status
    };
    inventory.push(newItem);
    res.status(201).json(newItem);
});

// Update an inventory item
router.put('/:id', (req, res) => {
    const item = inventory.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item not found' });

    const { name, category, sku, stock, price, status } = req.body;
    item.name = name || item.name;
    item.category = category || item.category;
    item.sku = sku || item.sku;
    item.stock = stock || item.stock;
    item.price = price || item.price;
    item.status = status || item.status;

    res.json(item);
});

// Delete an inventory item
router.delete('/:id', (req, res) => {
        const itemIndex = inventory.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).json({ message: 'Item not found' });

    inventory.splice(itemIndex, 1);
    res.json({ message: 'Item deleted' });
});

module.exports = router;
