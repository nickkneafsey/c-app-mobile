import gql from 'graphql-tag';

export default gql`
  query getQuestions($service: String) {
    questions(service: $service, test: "developerAssociate") {
      text,
      answers,
      correctAnswers
    }
  }
`;
