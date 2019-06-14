import {expect} from "chai";
import * as sinon from "sinon";
import PDV from "../../src/Models/PDV";
import PDVService from "../../src/Services/PDVService";
import PDVAddress from "../../src/Models/PDVAddress";
import PDVCoverageArea from "../../src/Models/PDVCoverageArea";

describe("Test/Unit/PDVServiceTest", (): void => 
{
    describe("#save", (): void => 
    {
        it("Should save pdv", (): Promise<void> => 
        {
            const stubPDVSave = sinon
                .stub(PDV.prototype, "save")
                .callsFake((): any => Promise.resolve(null));
            const stubPDVAddressSave = sinon
                .stub(PDVAddress.prototype, "save")
                .callsFake((): any => Promise.resolve(null));
            const stubPDVCoverageAreaSave = sinon
                .stub(PDVCoverageArea.prototype, "save")
                .callsFake((): any => Promise.resolve(null));

            const data = {
                owner_name: "some random name",
                address: {},
                coverage_area: []
            };

            const service: PDVService = new PDVService();

            return service.save(data).then(result => 
            {
                expect(result).to.be.instanceOf(PDV);

                stubPDVSave.restore();
                stubPDVAddressSave.restore();
                stubPDVCoverageAreaSave.restore();
            });
        });

        it("Should return null if problems registering PDV", (): Promise<
        void
        > => 
        {
            const stubPDVSave = sinon
                .stub(PDV.prototype, "save")
                .callsFake(
                    (): any =>
                        Promise.reject(new Error("Problems registering pdv"))
                );

            const data = {
                owner_name: "some random name"
            };

            const service: PDVService = new PDVService();

            return service.save(data).catch(
                (err: Error): void => 
                {
                    expect(err.message).to.be.equal("Problems registering pdv");

                    stubPDVSave.restore();
                }
            );
        });
    });

    describe("#findAll", (): void => 
    {
        it("Should list PDVs", (): Promise<void> => 
        {
            const pdv: PDV = PDV.build({
                trading_name: "World",
                owner_name: "Hello",
                document: "19381293821"
            });
            pdv.dataValues.address = null;
            pdv.dataValues.coverageArea = [];

            const stubPDVFindAll = sinon
                .stub(PDV, "findAll")
                .callsFake((): any => Promise.resolve([pdv]));

            const service: PDVService = new PDVService();

            return service.findAll().then(pdvs => 
            {
                expect(pdvs).to.be.lengthOf(1);
                stubPDVFindAll.restore();
            });
        });
    });

    describe("#findById", (): void => 
    {
        it("Should get a PDV by ID", (): Promise<void> => 
        {
            const pdv: PDV = PDV.build({
                trading_name: "World",
                owner_name: "Hello",
                document: "19381293821"
            });
            pdv.dataValues.address = null;
            pdv.dataValues.coverageArea = [];

            const stubPDVFind = sinon
                .stub(PDV, "findByPk")
                .callsFake((): any => Promise.resolve(pdv));

            const service: PDVService = new PDVService();

            return service.findById(1).then(pdv => 
            {
                expect(pdv.trading_name).to.be.equal("World");
                expect(pdv.owner_name).to.be.equal("Hello");
                stubPDVFind.restore();
            });
        });

        it("Should return null if PDV not found", (): Promise<void> => 
        {
            const stubPDVFind = sinon
                .stub(PDV, "findByPk")
                .callsFake((): any => Promise.resolve(null));

            const service: PDVService = new PDVService();

            return service.findById(1).then(pdv => 
            {
                expect(pdv).to.be.null;
                stubPDVFind.restore();
            });
        });
    });
});
