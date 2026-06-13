//make HTTP request
function getUsersData(){
    fetch('https://jsonplaceholder.typicode.com/users',{method:"GET"})
    .then(res=>res.json())
    .then((users)=>{

      //1.Find the user with username "Ervin Howell"
      let username1 = users.find(element => element.name === "Ervin Howell");
      console.log(username1);

      //2.find the users belonging to the street "Victor Plains"
      let username2 = users.filter(element => element.address.street === "Victor Plains");
      console.log(username2)

      //3.find the geo information of user "Clementine Bauch"
      let username3 = users.find(element =>{
          if(element.name === "Clementine Bauch"){
              console.log(element.address.geo)
          }
        })

        //4.Find the number of users in the result
      let numberOfUsers = users.length
      console.log(numberOfUsers)
      })

      
    .catch(err=>console.log(err))
}

getUsersData();
