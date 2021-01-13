import API from '@/services/API';


// Makes post request to endpoint on express server  
export default {
    addRecord(record){
        return API().post('addTransaction',record)
    }
}



// example of use

// AddRecord.addRecord({
//     Warhouse: 'w1',
//     ModelNo: '121',
//     SN: '102020',
//     Quantity: '2' 
// })