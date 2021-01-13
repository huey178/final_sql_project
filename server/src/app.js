const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config')
const sql = require('mssql');


const app = express();

app.use(morgan('combined')); //Console logs the requests that are being made

app.use(bodyParser.json());
app.use(cors());



let db = sql.connect(config,(err)=>{
    if(err)throw err;
    console.log('Database has connected!')
});

// Retrieve the types of transactions by pulling out the warehouseType paramater in the request.  i.e w1, w2, all
app.get('/getTransactions/:warehouseType', async (req,res) => {
     try{
        if(req.params.warehouseType === "w1" || req.params.warehouseType === 'w2'){
            let transaction = await db.request().query(`SELECT Seq, Warehouse, SN, Quantity FROM FGTransaction WHERE Warehouse = '${req.params.warehouseType}'`);
           res.json(transaction);}
           else if(req.params.warehouseType === 'all'){
             let transaction = await db.request().query(`SELECT Seq, Warehouse, SN, Quantity FROM FGTransaction`);
            
            res.json(transaction);
            }
            else {
                res.send('I don\'t know what you want for me!');
           }
    }
    catch(err){
res.send(err)
    }
}

);

// Allows you to insert a transaction
app.post('/addTransaction', async (req,res) => {
    let {warehouse, modelNo,sn, quantity} = req.body;
    if(warehouse != '' && modelNo!='' && sn != '' && quantity !=''){
    try{
    await db.request().query(`INSERT INTO FGTransaction(Warehouse, ModelNo, SN, Quantity) VALUES ('${warehouse}', '${modelNo}','${sn}', '${quantity}')`)
        res.send('Sucessfully added new record!');
        }
        catch(err){
            throw err;
        }}
        else{
            console.log('Please complete all fields');
            res.send('Please complete all fields');
        }
    });



        app.listen(3000,() => {
            console.log('Server started on port 3000');
        });




