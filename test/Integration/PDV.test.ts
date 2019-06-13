import request from "supertest";
import {app} from "../../src/bootstrap";
import Database from "../../src/Configurations/Database";

describe("Test/Integration/PDVTest", (): void => 
{
    const MUTATION_CREATE_PDV = `
        mutation CreatePDV($data: PDVInput) {
            createPdv(data: $data) {
                id
            }
        }
    `;

    before(done => 
    {
        Database.drop().then(() => done());
    });

    describe("Create PDV", (): void => 
    {
        it("Should insert a PDV", (done: Function): void => 
        {
            request(app)
                .post("/graphql")
                .send({
                    query: MUTATION_CREATE_PDV,
                    variables: {
                        data: {
                            trading_name: "ZX Ventures",
                            owner_name: "Ambev",
                            document: "1203812938",
                            address: {
                                latitude: -23.192382,
                                longitude: -46.12037
                            },
                            coverage_area: [
                                {
                                    latitude: 10,
                                    longitude: 20
                                },
                                {
                                    latitude: 30,
                                    longitude: 40
                                }
                            ]
                        }
                    }
                })
                .expect(/\"id\"\:\"1\"/)
                .expect(200, done);
        });

        it("Should fail inserting a PDV", (done: Function): void => 
        {
            request(app)
                .post("/graphql")
                .send({
                    query: MUTATION_CREATE_PDV,
                    data: {
                        trading_name: "ZX Ventures",
                        owner_name: "Ambed",
                        address: {
                            latitude: -23.1239812
                        }
                    }
                })
                .expect(/errors/)
                .expect(/Problems registering PDV/)
                .expect(200, done);
        });
    });

    describe("Listing PDVs", (): void => 
    {
        it("Should list PDVs", (done: Function): void => 
        {
            request(app)
                .get("/graphql")
                .send({
                    query: `
                        {
                            pdvs {
                                id
                            }
                        }
                    `
                })
                .expect(/\"id\"\:\"1\"/)
                .expect(200, done);
        });
    });

    describe("Fetching PDV by ID", (): void => 
    {
        it("Should fetch a PDV", (done: Function): void => 
        {
            request(app)
                .get("/graphql")
                .send({
                    query: `
                        {
                            pdv(id: 1) {
                                id
                            }
                        }
                    `
                })
                .expect(/\"id\"\:\"1\"/)
                .expect(200, done);
        });

        it("Should return null if not found", (done: Function): void => 
        {
            request(app)
                .get("/graphql")
                .send({
                    query: `
                        {
                            pdv(id: 1000) {
                                id
                            }
                        }
                    `
                })
                .expect(/\"pdv\"\:null/)
                .expect(200, done);
        });
    });
});
