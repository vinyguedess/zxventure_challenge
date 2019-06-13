import request from "supertest";
import { app } from "../../src/bootstrap";

describe("Test/Integration/PDVTest", (): void => 
{

    describe("Create PDV", (): void => {
        it("Should insert a PDV without trouble", (done: Function): void => {
            request(app)
                .post("/graphql")
                .send({
                    query: `
                        mutation CreatePDV($data: PDVInput) {
                            createPdv(data: $data) {
                                id
                            }
                        }
                    `,
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
                                [
                                    [10, 20], [30, 40]
                                ],
                                [
                                    [10, 20], [30, 40]
                                ]
                            ]
                        }
                    }
                })
                .then(options => {
                    console.log(options.text)
                    done()
                });
        })
    });

});