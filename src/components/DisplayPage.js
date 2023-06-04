import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/DisplayPage.css';

function DisplayPage({data}) {
    const { id } = useParams();
    const selectedItem = data.find((item) => item.id === Number(id));
    console.log(data);
    console.log(selectedItem,id);

 

  return (
    <div>
        <h1 className='head'>Social Media App.</h1>
        <div className='item'>
        <img className='currPhoto' src={`https://picsum.photos/200?random=${selectedItem.id}`} alt={selectedItem.title}/>
        <h3>User ID : {selectedItem.userId}</h3>
        <h3>Title : {selectedItem.title.length > 12?selectedItem.title.slice(0,12):selectedItem.title}</h3>
        <h3>Body : {selectedItem.body.length > 50?selectedItem.body.slice(0,50):selectedItem.body}</h3>
    </div>
    </div>
    
  )
}

export default DisplayPage;