import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card} from "react-bootstrap";

const User = () => {
    const params = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(params?.id){
            fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then(res => res.json())
                .then(data => data.filter(unit => unit?.userId == params?.id))
                .then(data => setUser(data))
        }
    }, []);

    return(
        <div className="posts d-flex flex-wrap justify-content-center m-4">
            {user?.map(user => {
                return (
                    <Card style={{width: '18rem', margin: '5px'}} key={user?.id}>
                        <Card.Body>
                            <Card.Title>{user?.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{user?.id}</Card.Subtitle>
                            <Card.Text>{user?.body}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}
export default User;