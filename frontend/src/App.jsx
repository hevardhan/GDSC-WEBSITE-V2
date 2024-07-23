import axios from 'axios'
import React from 'react'

class App extends React.Component {
state = {
  details: [],
}
componentDidMount(){
  let data;
  axios.get('http://127.0.0.1:8000/')
  .then(res => {
    data = res.data;
    this.setState({
      details:data
    });
  })
  .catch(err => { })
}

render(){
  return (
    <div>
      <header>Data Gen From DJ</header>
      <hr></hr>
      {this.state.details.map((output,id)=>
      (
        <div key={id}>
          <div>
          <h2>{output.employee}</h2>
          <h2>{output.department}</h2>
          <img src={`${output.photo}`} alt={`${output.photo}`} />
          </div>
        </div>
      ))}
    </div>
  )
}

}

export default App
