/**
* @param {any} prevProps  
* @param {any} nextProps  
* @returns {boolean} is Match prevProps and nextProps  
*/
const compareProps = (prevProps:any, nextProps:any) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}


export default compareProps;