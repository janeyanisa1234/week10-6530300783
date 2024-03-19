
import React from "react";
import PostItem from "./Post-item";
import { useParams, useLocation } from 'react-router-dom';

const Posts = (props) => {
    const { id } = useParams();
    const urlString = new URLSearchParams(useLocation().search);
    const fname = urlString.get("fname");
    const lname = urlString.get("lname");

    return (
        <div>
            {id}
            {fname}
            {lname}
            <PostItem title='iphone13' content='detail of iphone 13'/>
            <PostItem title='iphone14' content='detail of iphone 14'/>
        </div>
    );
}

export default Posts;
