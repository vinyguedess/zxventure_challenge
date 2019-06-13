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
        id: ID!,
        latitude: Float,
        longitude: Float
    }

    type PDVCoverageArea {
        id: ID!,
        latitude: Float,
        longitude: Float
    }

    type PDV {
        id: ID!,
        trading_name: String,
        owner_name: String,
        document: String,
        address: PDVAddress
        coverageArea: [PDVCoverageArea]
    }

    type Query {
        pdvs: [PDV],
        pdv(id: Int): PDV
    }

    type Mutation {
        createPdv(data: PDVInput): PDV
    }
`);
