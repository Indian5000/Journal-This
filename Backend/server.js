const http=require('http');

const server=http.createServer((req,res)=>{
    if (req.url==='/balls' && req.method==='GET'){
        res.writeHead(200);
        res.end("You have been balled");
    } else{
        res.writeHead(404);
        res.end("Why the hell you want to go THERE");
    }
});

server.listen(5000,(()=>{
    console.log("BOOM SERVER ON 5000");
}))