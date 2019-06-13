import {Model} from "sequelize-typescript";

export default abstract class BaseDBService 
{
    protected model: any;
    protected include: any[] = [];

    abstract parseInstanceData(instance: Model<any>): any;

    public save(data: any, parse: boolean = true): any 
    {
        const instance: Model<any> = this.model.build(data);

        return instance
            .save()
            .then(() => (parse ? this.parseInstanceData(instance) : instance));
    }

    public findAll() 
    {
        return this.model
            .findAll({
                include: this.include
            })
            .then(pdvs => pdvs.map(this.parseInstanceData));
    }

    public findById(primaryKey: number) 
    {
        return this.model
            .findByPk(primaryKey, {
                include: this.include
            })
            .then(this.parseInstanceData);
    }
}
