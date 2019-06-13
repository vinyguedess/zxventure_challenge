import PDVService from "./Services/PDVService";

const pdvs = () => new PDVService().findAll();

const pdv = obj => new PDVService().findById(obj.id);

const createPdv = ({data}) =>
    new PDVService().save(data).catch(err => 
    {
        throw new Error("Problems registering PDV");
    });

export default {
    pdvs,
    pdv,
    createPdv
};
