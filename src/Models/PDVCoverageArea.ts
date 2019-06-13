import {
    Model,
    Column,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    DataType,
    Table,
    ForeignKey
} from "sequelize-typescript";
import PDV from "./PDV";

@Table({modelName: "pdv_coverage_area"})
export default class PDVCoverageArea extends Model<PDVCoverageArea> 
{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    latitude: number;

    @AllowNull(false)
    @Column(DataType.FLOAT)
    longitude: number;

    @ForeignKey(() => PDV)
    pdv: PDV;
}
