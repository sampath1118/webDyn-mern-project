const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/webDB", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then( () => {
    console.log("database has been connected");
}).catch( (err) => {
    console.log(`failed to connnect with database ${err}`);
});