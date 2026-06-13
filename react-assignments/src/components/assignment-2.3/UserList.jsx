import React from 'react'
import User from './User'

function UserList() {
    let users=[
        {
            id: 1,
            image : "https://content.tupaki.com/en/feeds/2024/10/28/567389-10.gif",
            name : "Mahesh Babu",
            category : "Actor"
        },
        {
            id: 2,
            image : "https://img.indiaforums.com/person/480x360/1/2525-prabhas.jpg?c=4bM0D6",
            name : "Prabhas",
            category : "Actor"
        },
        {
            id: 3,
            image : "https://pakkatelugu.com/english/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-26-at-16.17.17-780x470-1.jpeg",
            name : "Pawan Kalyan",
            category : "Politician"
        },
        {
            id: 4,
            image : "https://images.indianexpress.com/2023/05/ss-rajamouli-1200.jpg",
            name : "SS Rajamouli",
            category : "Director"
        },
        {
            id: 5,
            image : "https://etvbharatimages.akamaized.net/etvbharat/prod-images/10-04-2024/1200-675-21191844-1099-21191844-1712748468822.jpg",
            name : "Anirudh",
            category : "Music Director"
        },
        {
            id: 6,
            image : "https://static.tnn.in/thumb/msid-112867386,thumbsize-965767,width-1280,height-720,resizemode-75/112867386.jpg?quality=100",
            name : "Dil Raju",
            category : "Producer"
        },
        {
            id: 7,
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2iQTUG3gvJLjsl0XCWsSYroOUbrfJhX3YSJ0RGkVE8uDUt8l_BvHLkWjtIlGmkUr5Yk8&usqp=CAU",
            name : "Lokesh Kanagaraj",
            category : "Director"
        },
        {
            id: 8,
            image : "https://i.ytimg.com/vi/A1rp4IPgKWE/maxresdefault.jpg",
            name : "DSP",
            category : "Music Director"
        }
    ]
  return (
    <div className=' d-flex justify-content-around'>
        <div>
            <User userObj={users[0]} />
            <User userObj={users[1]}/>
        </div>
        <div>
            <User userObj={users[2]}/>
            <User userObj={users[3]}/>
        </div>
        <div>
            <User userObj={users[4]}/>
            <User userObj={users[5]}/>
        </div>
        <div>
            <User userObj={users[6]}/>
            <User userObj={users[7]}/>
        </div>
    </div>
  )
}

export default UserList