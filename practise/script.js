let url = 'https://cat-fact.herokuapp.com/facts';

(async ()=> {
    let response = await fetch(url);
    console.log(response) 
    let data = await response.json()
    console.log(data)
})();








