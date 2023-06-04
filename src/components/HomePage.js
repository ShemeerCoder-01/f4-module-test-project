import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../actions/apiActions';
import '../style/HomePage.css'

import { useNavigate } from 'react-router-dom';



function HomePage({ data }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])



    const handleItemClick = (itemId) => {

        navigate(`/displaypage/${itemId}`);
    };


    return (
        <div>
            <h1 className='heading'>Social Media App.</h1>
            <div className='grid'>
                {
                    data &&
                    data.map((item, idx) => {
                        return (
                            <div onClick={() => handleItemClick(item.id)} key={item.id} className='grid-item'>
                                <img className='images' src={`https://picsum.photos/200?random=${item.id}`} alt="Item" />
                                <p>User ID : {item.userId}</p>
                                <p>Title : {item.title.length > 12 ? item.title.slice(0, 12) : item.title}</p>
                                <p>Body : {item.body.length > 50 ? item.body.slice(0, 50) : item.body}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default HomePage;