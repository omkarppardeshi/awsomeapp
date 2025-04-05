import React,{Component} from 'react';
import Class from './Class';
import Functional from './Functional';
class App extends Component{
  render(){
    return(
      <div>
          {/* <Class/> */}
          <Functional/>
      </div>
    )
  }
}

export default App;