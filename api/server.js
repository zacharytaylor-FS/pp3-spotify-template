const express = require('express');
const cors = require('cors')
const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())

app.get('api/v1/demo', (req, res, next) => {
     try {
          const artists = [
               {id: 1, 'name': 'Hunxho'},
               {id: 2, 'name': 'Trippie Redd'},
          ];

          return res.status(200).json({artists})
     } catch (err) {
          console.error(err)
     }
})
app.get('api/v1/spotify', (req, res) => {
     try {
          const artists = [
               {id: 1, 'name': 'Hunxho'},
               {id: 2, 'name': 'Trippie Redd'},
          ];

          return res.status(200).json({artists})
     } catch (err) {
          console.error(err)
     }
});

app.listen(port, () =>{
   console.log(`Express Server listening on port: ${port}`)
})