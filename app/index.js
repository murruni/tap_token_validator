const PORT = process.env.PORT || 3001;

// configuracion express de la app
var app = require('./app');

app.listen(PORT, () => {
    console.log(`servidor corriendo en puerto ${PORT}`);
});
