import React, {useEffect, useState} from "react";
import CardPosts from "../components/CardPosts";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        }catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return(
        <div className="all-users text-center">
            <h1 className="m-3">All Users</h1>
                <div className="users-list d-flex flex-wrap justify-content-center">
                    {users?.map(user => {
                        return(
                            <CardPosts user={user} key={user?.id}/>
                        )
                    })}
                </div>
        </div>
    )
}
export default AllUsers;