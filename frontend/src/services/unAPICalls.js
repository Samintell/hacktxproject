import axios from 'axios';


export async function getResults(uname) {

    try{
        const response = await axios.post('http://localhost:5000/usrnameapi', {type: 'getResults', username: uname});
        console.log('response  ', response)
        return response.data;
    } catch(error) {
        return [];
    }
    
}

export async function createUser(data) {
    const response = await axios.post(`/api/user`, {user: data});
    return response.data;
}