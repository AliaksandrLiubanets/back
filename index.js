const http = require("http")
const { usersController } = require("./usersController")

process.on('unhandledRejection', function (reason, p) {
    debugger
    console.log('sdfsdfsdfsdfsdfsfs');
    console.log(reason, p)
})

// set CORS Headers
const cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if(req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return true
    }
    return false
}

const server = http.createServer((req, res) => {

    if(cors(req, res)) return   

    switch (req.url) { 
        case '/users':
         usersController(req, res)            
            break;
        case '/lessons':
            res.write('tasks')
            break;
        default:
            res.write('Page not found')
    }    
})

server.listen(7542);