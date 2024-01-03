import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error Connect Data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='into'>
      <div>

          <h1>
            React App Express Data
          </h1>
          {data && <p>{data.message}</p>}
      </div>
    </div>
  )
}

export default App
