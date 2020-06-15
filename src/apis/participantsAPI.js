import {REVIEWED_STATUS_NOT_REVIEWED} from "../constants/participantsConsts";

const DEFAULT_PARTICIPANT = {
    name: 'Bob',
    age: 42,
    hasSiblings: false,
    envExposures: [],
    geneMutations: [],
    reviewedStatus: REVIEWED_STATUS_NOT_REVIEWED
};

const DEFAULT_PARTICIPANTS = [DEFAULT_PARTICIPANT, DEFAULT_PARTICIPANT, DEFAULT_PARTICIPANT];

const ENVIRONMENTAL_EXPOSURES_LIST = ['Lead', 'Pollution', 'Mercury', 'Mold', 'Pest and Pet Allergens', 'Pesticides', 'Phthalates'];
const GENE_MUTATIONS_LIST = ['FGD1', 'EDNRB', 'CP', 'LMBR1', 'COL2A1'];

export {DEFAULT_PARTICIPANT, DEFAULT_PARTICIPANTS, ENVIRONMENTAL_EXPOSURES_LIST, GENE_MUTATIONS_LIST};