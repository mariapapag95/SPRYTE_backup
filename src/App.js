import React from 'react';
import Board from './Components/Board';

function App() {
  return (
    <div>
      <Board/>
    </div>
  );
}


export default App;

// import React from 'react';
// import './App.css';
// import Box from '@material-ui/core/Box';
// import ProductNameInput from './Components/ProductNames';
// import CompareProductInput from './Components/CompareProducts';
// import IndicatorsDropDown from './Components/Indicators';
// import TemplatesDropDown from './Components/TemplatesDropDown';
// import VolumeChart from './Components/VolumeChart'
// import SecondaryChart from './Components/SecondaryCharts'
// import MultiSeries from './Components/MultiSeries'

// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       unit1Chart : false,
//       unit2Chart : false,
//       test : [{x:1, y:6}, {x:2, y:2},{x:3, y:6},{x:4, y:7},{x:5, y:1},{x:6, y:6}, {x:7, y:2},{x:8, y:6},{x:9, y:7},{x:10, y:1},{x:11, y:6}, {x:12, y:2},{x:13, y:6},{x:14, y:7},{x:15, y:1},{x:16, y:6}, {x:17, y:2},{x:18, y:6},{x:19, y:7},{x:20, y:1}],
//       data : [],
//       volume: [],
//       series : [],
//       productName : "", // "value" needs to be passed in from ProductNameInput 
//       compareProds : [], // "value" needs to be passed in from CompareProductInput
//       indicators : [],
//     }
//   }

//   componentDidMount() {
//     this.populate()
//   }

//   toggle1 = () => {
//     this.setState({unit1Chart : !this.state.unit1Chart})
//   }

//   toggle2 = () => {
//     this.setState({unit2Chart : !this.state.unit2Chart})
//   }

//   populate() {
//     this.state.series.push({name: this.state.productName, data: this.state.test})
//   }

//   render () {
//     return (
//       <div className = "full">
//         <div className="flex-container">
//           <div className="flex-item0">
//             {/* <button onClick={this.toggle1}>
//               UNIT 1 CHART TOGGLE
//             </button>
//             <button onClick={this.toggle2}>
//               UNIT 2 CHART TOGGLE
//             </button> */}
//             <div className = "inputs">
//               <div>
//                   <Box display="flex" flexDirection="row">
//                   <ProductNameInput/>
//                   <CompareProductInput/>
//                   <IndicatorsDropDown/>
//                   <TemplatesDropDown/>
//                   </Box>
//               </div>
//             </div>
//           </div>
//           <div className="flex-item2">
//               <MultiSeries margin={0} series={this.state.series}/>
//           </div>
//           <div className="flex-itemHALF">VOLUME CHART</div>
//           {this.state.unit1Chart ? <div className="flex-item1">SOME UNIT</div> : null}
//           {this.state.unit2Chart ? <div className="flex-item1">OTHER UNIT</div> : null}
//           <div className="flex-item0">slider</div>
//           <div className="flex-item0">time buttons</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

