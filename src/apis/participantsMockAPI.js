import {REVIEWED_STATUS_NOT_REVIEWED} from "../constants/participantsConsts";

const DEFAULT_PARTICIPANT = {
    id: 0,
    name: 'Bob',
    age: 42,
    hasSiblings: false,
    envExposures: ['Mold', 'Pest and Pet Allergens', 'Pesticides', 'Phthalates'],
    geneMutations: ['FGD1', 'EDNRB', 'LMBR1'],
    reviewedStatus: REVIEWED_STATUS_NOT_REVIEWED
};

const DEFAULT_PARTICIPANTS =
    [{
        id: 0,
        name: 'Bob Taffert',
        age: 42,
        hasSiblings: false,
        envExposures: ['Mold', 'Pest and Pet Allergens', 'Pesticides', 'Phthalates'],
        geneMutations: ['FGD1', 'EDNRB', 'LMBR1'],
        reviewedStatus: REVIEWED_STATUS_NOT_REVIEWED
    },
        {
            id: 1,
            name: 'Thomas Crane',
            age: 38,
            hasSiblings: false,
            envExposures: [],
            geneMutations: [],
            reviewedStatus: REVIEWED_STATUS_NOT_REVIEWED
        },
        {
            id: 2,
            name: 'Cierra Vega',
            age: 42,
            hasSiblings: true,
            envExposures: [],
            geneMutations: [],
            reviewedStatus: REVIEWED_STATUS_NOT_REVIEWED
        }];

const ENVIRONMENTAL_EXPOSURES_LIST = ['Lead', 'Pollution', 'Mercury', 'Mold', 'Pest and Pet Allergens', 'Pesticides', 'Phthalates'];
const GENE_MUTATIONS_LIST = ['FGD1', 'EDNRB', 'CP', 'LMBR1', 'COL2A1'];

export {DEFAULT_PARTICIPANT, DEFAULT_PARTICIPANTS, ENVIRONMENTAL_EXPOSURES_LIST, GENE_MUTATIONS_LIST};
