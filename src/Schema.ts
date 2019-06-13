import { buildSchema } from "graphql";

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
        coverage_area: [[PDVCoverageAreaInput]]
    }

    type PDV {
        id: ID!,
        trading_name: String,
        owner_name: String,
        document: String
    }

    type Query {
        pdvs: [PDV]
    }

    type Mutation {
        createPdv(data: PDVInput): PDV
    }
`);