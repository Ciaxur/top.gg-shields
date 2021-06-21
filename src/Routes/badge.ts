import { Router } from 'express';
import axios from 'axios';

const app = Router();

/**
 * Gets top.gg bot availability status given the
 *  bot id
 */
app.get('/:id', async (req, res) => {
  const { id } = req.params;

  // VERIFY REQUIRED PARAM
  if (!id) {
    return res
      .status(400)
      .json({
        message: 'Bot ID is required',
        error: 'Invalid parameter input. Expecting Bot ID as a parameter',
      });
  }
  
  // TRY ACCESSING BOT PAGE
  try {
    await axios.get(`https://top.gg/bot/${id}`);
    return axios.get('https://img.shields.io/badge/Tog.gg-Available-green')
      .then(res => res.data)
      .then(badgeData => res.send(badgeData))
      .catch(err => {
        console.log('Error:', err);
        return res
          .status(500)
          .json({
            message: 'Something bad happend. Shields.io did not respond :(',
          });
      });
  } 

  // BOT PAGE UNAVAILABLE
  catch(e) {
    return axios.get('https://img.shields.io/badge/Tog.gg-Unavailable-red')
      .then(res => res.data)
      .then(badgeData => res.send(badgeData))
      .catch(err => {
        console.log('Error:', err);
        return res
          .status(500)
          .json({
            message: 'Something bad happend. Shields.io did not respond :(',
          });
      });
  }
});

export default app;