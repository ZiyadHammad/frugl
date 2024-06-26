import { useEffect } from 'react'
import axios from 'axios'

const Cron = () => {

  useEffect(() => {
    const handleCronJob = async () => {
      try {
        // const response = await axios.get('http://localhost:5001/cron');
        console.log('Backend response:');
        
      } catch (error) {
        console.error('Error while handling cron job:', error);
      }
    };

    handleCronJob();
  }, []);

  return null
  
}

export default Cron