import PDV from "./PDV";
import {
    Model,
    PrimaryKey,
    AutoIncrement,
    Table,
    Column,
    DataType,
    AllowNull,
    ForeignKey
} from "sequelize-typescript";

@Table({tableName: "pdv_address"})
export default class PDVAddress extends Model<PDVAddress> 
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
