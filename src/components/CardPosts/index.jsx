import React from "react";
import {useNavigate} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";

const CardPosts = ({user}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/all-users/${user?.id}`)
    }
    return(
        <Card style={{ width: '18rem', margin: '5px'}}>
            <Card.Body onClick={handleNavigate}>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
                <Card.Text className="fst-italic">
                    {user.email}
                </Card.Text>
                <Card.Text>
                    street: {user?.address?.street},
                    <br/>
                    suite: {user?.address?.suite},
                    <br/>
                    city: {user?.address?.city},
                    <br/>
                    zipcode: {user?.address?.zipcode}.
                </Card.Text>
                <Button variant="outline-dark">See posts</Button>
            </Card.Body>
        </Card>
    )
}
export default CardPosts;