import API from '@/services/API';


// Makes a post request to the database 
export default {
    getTransactions(warehouseType){
        return API().get(`getTransactions/${warehouseType.warehouseType}`)
    }
}

// example of use
 
// AddRecord.getRecord({
//     warehouseType: 'w1',
// })