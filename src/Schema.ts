import {buildSchema} from "graphql";

export default buildSchema(`
    input PDVCoverageAreaInput {
        latitude: Float,
        longitude: Float
    }

    input PDVAddressInput {
        latitude: Float,
        longitude: Float
    }

    input PDVInput {
        trading_name: String,
        owner_name: String,
        document: String,
        address: PDVAddressInput
        coverage_area: [PDVCoverageAreaInput]
    }

    type PDVAddress {
        type: String,
        coordinates: [Float]
    }

    type PDVCoverageArea {
        type: String,
        coordinates: [[Float]]
    }

    type PDV {
        id: ID!,
        trading_name: String,
        owner_name: String,
        document: String,
        address: PDVAddress,
        coverageArea: PDVCoverageArea
    }

    type Query {
        pdvs(limit: Int, offset: Int, coordinates: [Int]): [PDV],
        pdv(id: Int): PDV
    }

    type Mutation {
        createPdv(data: PDVInput): PDV
    }
`);
