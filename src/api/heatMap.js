import {invokeApi} from "@/spidr/src/idpUtils";
import _ from "lodash";

let cachedData = null;
export default async function (){
  if (cachedData) {
    return await new Promise((res)=>{
      setTimeout(()=>{
        res(cachedData)
      }, 1300)
    })
  }
  const data = await invokeApi('heatmap'); // apidatacleint2 //maindashboard
  //console.log(data);
  let dataForUi = _.get(data, "data", [])
  console.log(dataForUi);
//   dataForUi = _.map(dataForUi, v => ({
//     ...v,
//     variance: v.marketSensing - v.internal
//   }))
  cachedData = dataForUi;
  return dataForUi;
}
