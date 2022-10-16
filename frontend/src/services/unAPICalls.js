import axios from 'axios';


export async function getResults(uname) {

    try{
        const response = await axios.post('http://localhost:5000/usrnameapi', {type: 'getResults', username: uname});
    
        //console.log('response  ', response)
        return response;
    } catch(error) {
        return [];
    }
    
}
