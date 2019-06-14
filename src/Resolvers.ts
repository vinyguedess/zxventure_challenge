import PDVService from "./Services/PDVService";

const pdvs = ({coordinates, limit, offset}) =>
    new PDVService().findAll(limit || 100, offset || 0, coordinates);

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
