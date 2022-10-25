const mongoose = require('mongoose');

const dbConnection = async()=>{
    try {
        await mongoose.connect( process.env.DB_CNN ,{ 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        //await mongoose.connection.db.dropCollection('pokemones');
        console.log('BD PokeApi activa');
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar base de datos');
    }
}

module.exports= {
    dbConnection
}