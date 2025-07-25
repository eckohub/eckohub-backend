const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./src/routes/auth.routes');
const profileRoutes = require('./src/routes/profile.routes');
const passwordRoutes = require('./src/routes/password.routes');
const adminRoutes = require('./src/routes/admin.routes');
const productRoutes = require('./src/routes/product.routes');
const clientRoutes = require('./src/routes/client.routes');
const supplierRoutes = require('./src/routes/supplier.routes');
const categoryRoutes = require('./src/routes/category.routes');
const brandRoutes = require('./src/routes/brand.routes');
const modelRoutes = require('./src/routes/model.routes');
const typeRoutes = require('./src/routes/type.routes');
const unitRoutes = require('./src/routes/unit.routes');
const warehouseRoutes = require('./src/routes/warehouse.routes');
const inventoryRoutes = require('./src/routes/inventory.routes');
const purchaseRoutes = require('./src/routes/purchase.routes');
const saleRoutes = require('./src/routes/sale.routes');
const quoteRoutes = require('./src/routes/quote.routes');
const adjustmentRoutes = require('./src/routes/adjustment.routes');
const configRoutes = require('./src/routes/config.routes');
const paramRoutes = require('./src/routes/param.routes');
const logRoutes = require('./src/routes/log.routes');

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/password', passwordRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/products', productRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/brands', brandRoutes);
app.use('/api/models', modelRoutes);
app.use('/api/types', typeRoutes);
app.use('/api/units', unitRoutes);
app.use('/api/warehouses', warehouseRoutes);
app.use('/api/inventories', inventoryRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/adjustments', adjustmentRoutes);
app.use('/api/config', configRoutes);
app.use('/api/params', paramRoutes);
app.use('/api/logs', logRoutes);

app.get('/', (req, res) => res.send('EckoHub Backend API'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
