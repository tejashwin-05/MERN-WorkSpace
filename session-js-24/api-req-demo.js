//make API request(HTTP Req)
function getPostData(){
    fetch('https://jsonplaceholder.typicode.com/posts',{method:"GET"})
    .then(res=>res.json())
    .then(posts=>console.log(posts))
    .catch(err=>console.log(err))
}

getPostData();

// function getUserData(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     // 1. Find the user with username "Ervin Howell"
//     const userErvinHowell = users.find(user => user.username === 'Ervin Howell');
    
//     // 2. Find the users belonging to the street "Victor Plains"
//     const usersVictorPlains = users.filter(user => user.address.street === 'Victor Plains');
    
//     // 3. Get geo information of user "Clementine Bauch"
//     const userClementineBauch = users.find(user => user.username === 'Clementine Bauch');
//     const geoInfoClementineBauch = userClementineBauch ? userClementineBauch.address.geo : null;
    
//     // 4. Find the number of users in the result
//     const numberOfUsers = users.length;
    
//     // Print results
//     console.log('User with username "Ervin Howell":', userErvinHowell);
//     console.log('Users on "Victor Plains":', usersVictorPlains);
//     console.log('Geo information of "Clementine Bauch":', geoInfoClementineBauch);
//     console.log('Number of users:', numberOfUsers);
//   })
//   .catch(error => console.error('Error processing data:', error));

// }

// getUserData();

