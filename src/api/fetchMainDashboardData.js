import {invokeApi} from "@/spidr/src/idpUtils";
import _ from "lodash";

export default async function (){
  const data = await invokeApi('maindashboard');
  let dataForUi = _.get(data, "projectionsData.projections", [])
  dataForUi = _.map(dataForUi, v => ({
    ...v,
    variance: v.marketSensing - v.internal
  }))
  return dataForUi;
}
