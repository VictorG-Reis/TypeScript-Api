import app from './App';

const PORT = process.env.PORT || 3000 

const server = app.listen(PORT, () => {
  console.log('server is running on port', PORT);
})


export default server