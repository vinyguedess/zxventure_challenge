import PDV from "./Models/PDV";


const pdvs = (): Promise<Array<PDV>> => PDV.findAll();

const createPdv = ({ data }, request) => {
    console.log(request.method, data);
    return null;
}


export default {
    pdvs,
    createPdv
}