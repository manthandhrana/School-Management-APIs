const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());

app.use(express.json());


require('./swagger/swagger')(app);
app.use('/', require('./routes/school'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
  console.log(`Swagger docs available at http://localhost:${process.env.PORT}/api-docs`);
});
