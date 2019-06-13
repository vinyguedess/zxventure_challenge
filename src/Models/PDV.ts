import Sequelize from "sequelize";
import {
    Table,
    Model,
    Column,
    HasOne,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    HasMany,
    DataType
} from "sequelize-typescript";
import PDVAddress from "./PDVAddress";
import PDVCoverageArea from "./PDVCoverageArea";

@Table({tableName: "pdv"})
export default class PDV extends Model<PDV> 
{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @AllowNull(false)
    @Column(DataType.CHAR)
    trading_name: string;

    @AllowNull(false)
    @Column(DataType.CHAR)
    owner_name: string;

    @AllowNull(false)
    @Column(DataType.CHAR)
    document: string;

    @HasOne(() => PDVAddress)
    address: PDVAddress;

    @HasMany(() => PDVCoverageArea)
    coverageArea: PDVCoverageArea[];
}
