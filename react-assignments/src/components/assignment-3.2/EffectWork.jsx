import React, { useState, useEffect } from 'react';

function EffectWork() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then((res) => res.json())
            .then((postList) => setPost(postList.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h2 className='text-center m-5'>User List</h2>
            <table className="table container text-center table-dark">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((postObj) => 
                        <tr key={postObj.id}>
                            <td>{postObj.email}</td>
                            <td>{postObj.first_name}</td>
                            <td>{postObj.last_name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default EffectWork;
