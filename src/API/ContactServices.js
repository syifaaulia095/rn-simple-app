import axios from 'axios';
export async function fetchNewsChannelAPI(){
  return await axios.get(`https://simple-contact-crud.herokuapp.com/`, null )
    .then((response) => {
      console.log("response call channel", response.data)
      return response.data
    })
    .catch(err => {
      throw err;
    });
} 