// import React from 'react';
// //import logo from './logo.svg';
// import './App.css';

// class dropdown extends React.Component {

//   constructor(props) {
//     super(props);
//     this.onClickForward = this.onClickForward.bind(this)
//     // this.onClickBack =this.onClickBack.bind(this)

//     const img0 = require('./img/img.jpg');
//     const img1 = require('./img/img1.jpg');
//     const img2 = require('./img/img2.jpg');

//     this.state={
//       index:0,
//       imgList:[img0,img1,img2]
//     }
//   }

//  onClickForward =()=>{
//       if(this.state.index+1===this.state.imgList.length){
//         this.setState({
//           index:0
//         })
//       }
//       else{
//         this.setState({
//           index:this.state.index+1
//         })
//       }
//   }
//   onClickBack=()=>{
//     if(this.state.index-1===-1){
//       this.setState({
//         index:this.state.imgList.length-1
//       })
//     }
//     else{
//       this.setState({
//         index:this.state.index-1
//       })
//     }
//   }
//   render(){
//   return (
//   <div>
//   <img style={{height:500,width:'100%'}} src={this.state.imgList[this.state.index]}alt=""/><br/>
//   {/* <button onClick={this.onClickBack}>Back</button> */}
//   <button onClick={this.onClickForward}>Forward</button>
// </div>
// )
// }
// }
// export default dropdown;

import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.Lime = require('./img/img.jpg')
    this.Coconut = require('./img/img1.jpg');
    this.Mango = require('./img/img2.jpg');
    this.state = {
      value:'value',
    };
  }
     
  handleChange(event) 
  {
    debugger
    this.setState({ value: event.target.value });
    if (event.target.value === 'mango') {
      this.state = {
        value: 'coconut',
        imgList: this.Mango
      };
      document.getElementById('img').src = this.Mango
    }
    if (event.target.value === 'coconut') {
      this.state = {
        value: 'coconut',
        imgList: [this.Coconut]
      };
      document.getElementById('img').src = this.Coconut
    }
    if (event.target.value === 'lime') {
      this.state = {
        value: 'lime',
        imgList: [this.Lime]
      };
      document.getElementById('img').src = this.Lime
    }


  }
  render() {
    return (
      <div>
        <label>
          <h1>{this.state.value}</h1>
          <img style={{ height: 200, width: '100%' }} id='img' src={this.state.imgList} alt="" /><br />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="img">img</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      </div>
    );
  }
}
export default App