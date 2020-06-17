async function myFunc(){
   const gif = await axios.get('http://api.giphy.com/v1/gifs/randomid');
    console.log('gif');
}