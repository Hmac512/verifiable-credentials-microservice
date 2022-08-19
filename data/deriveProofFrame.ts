export const deriveProofFrame = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/citizenship/v1",
    "https://w3id.org/security/bbs/v1",
  ],
  type: ["VerifiableCredential", "PermanentResidentCard"],
  credentialSubject: {
    "@explicit": true,
    type: ["PermanentResident", "Person"],
    givenName: {},
    familyName: {},
    gender: {},
  },
};
