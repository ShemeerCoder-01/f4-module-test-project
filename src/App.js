import React, { useEffect } from 'react';
import HomePage from './components/HomePage';
import DisplayPage from './components/DisplayPage';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/apiActions';






function App() {

  const { loading, data, err } = useSelector(state => state.api);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [])



  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/displaypage/:id" element={<DisplayPage data={data} />} />
      </Routes>
    </div>
  )
}

export default App;