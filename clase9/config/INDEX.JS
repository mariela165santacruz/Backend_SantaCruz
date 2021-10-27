let express = require("express");
let exphbs = require("express-handlebars");
let cors = requiere("cors");
let {config} = require("./config");
let serverRoutes = require("./routes");

//Initializations
let app = express();

//Setting
app.engine("ext", (filePath,  data, callback)=>{
    FileSystem.readFile(filePath, (errror, content)=>{
        if(error) return callback(new Error(err));
        let rendered = content.toString().replace('^^titulo$$', ''+data.titulo+'')
                                         .replace('^^mensaje$$', ''+data.mensaje+'')
                                         .replace('^^autor$$', ''+data.autor+'')
                                         .replace('^^version$$', ''+data.version+'')
        
                                         
        return callback(null, rendered);
    })
});
app.set("views", "./viewsdos" );
app.set("views engine", "cte");
//Middlewares
app.use(cors(`${config.cors}`))

const PORT = config.port;

//Routes
serverRoutes(app);

//Start the server
app.listen(PORT, ()=>{
    console.log("server On! escuchando dotev ", PORT, config.email_support);
})