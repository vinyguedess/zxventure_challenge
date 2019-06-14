import PDV from "../Models/PDV";
import PDVAddress from "../Models/PDVAddress";
import PDVCoverageArea from "../Models/PDVCoverageArea";
import BaseDBService from "./BaseDBService";

export default class PDVService extends BaseDBService 
{
    protected model = PDV;
    protected include = [PDVAddress, PDVCoverageArea];

    public async save(data) 
    {
        const pdv = await super.save(data, false);

        const address = PDVAddress.build(data.address);
        await Promise.all([
            address.save().then(() => pdv.$set("address", address)),
            Promise.all(
                data.coverage_area.map(area => new PDVCoverageArea(area).save())
            ).then((areas: any) => pdv.$set("coverageArea", areas))
        ]);

        return pdv;
    }

    public parseInstanceData(instance) 
    {
        if (!instance) return null;

        return {
            ...instance.dataValues,
            address: {
                type: "Point",
                coordinates: [
                    instance.dataValues.address.dataValues.latitude,
                    instance.dataValues.address.dataValues.longitude
                ]
            },
            coverageArea: {
                type: "Polygon",
                coordinates: instance.dataValues.coverageArea.map(area => [
                    area.dataValues.latitude,
                    area.dataValues.longitude
                ])
            }
        };
    }
}
