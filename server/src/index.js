const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./api/auth/auth.route');
const serviceRoutes = require('./api/service/service.route');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend Running!');
});
app.use('/api/auth', authRoutes);
app.use('/api/service', serviceRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
