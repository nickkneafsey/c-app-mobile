import React, { Component } from "react";
import { graphql } from "react-apollo";
import { View, Image } from "react-native";
import { Card, Text, Button } from "react-native-elements";
import _ from "lodash";

import fetchQuestionsByService from "../queries/fetchQuestionsByService";
import services from "../utilities/services";
import Storage from "../utilities/Storage";
import * as BackupData from "../data";
import formatServiceHighScoreKey from "../utilities/helpers";

class ServiceScreen extends Component {
  constructor(props) {
    super(props);

    const { service } = this.props.navigation.state.params;
    this.state = { highScore: 0, backupQuestions: BackupData[service] };
  }

  componentWillMount() {
    const { service } = this.props.navigation.state.params;
    // use replace because storage library doesnt allow for underscores
    Storage.load({
      key: formatServiceHighScoreKey(service)
    })
      .then(data => {
        this.setState({ highScore: data });
      })
      .catch(err => console.log("Error fetching high score"));
  }

  static navigationOptions = ({ navigation }) => {
    const service = _.find(services, { key: navigation.state.params.service });
    return { title: service.value };
  };

  render() {
    const { data, navigation } = this.props;
    const { backupQuestions } = this.state;

    const questions =
      data.questions && data.questions.length > 0
        ? data.questions
        : backupQuestions.data.questions;

    const service = _.find(services, { key: navigation.state.params.service });
    return (
      <Card>
        <Text h3 style={{ textAlign: "center" }}>
          {service.value}
        </Text>
        <Text></Text>
        <View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{ width: 150, height: 150, resizeMode: "contain" }}
              source={{ uri: service.largeImageUrl }}
            />
          </View>
          <Text></Text>
          <Text style={{ textAlign: "center" }}>
            Total Questions: {questions.length}
          </Text>
          <Text style={{ textAlign: "center" }}>
            Your best score: {this.state.highScore}%
          </Text>
          <Text></Text>
          <Button
            onPress={() => navigation.navigate("Questions", { questions })}
            title={"Start Answering Questions"}
            color={"white"}
            backgroundColor={"#ec912d"}
          />
        </View>
      </Card>
    );
  }
}

export default graphql(fetchQuestionsByService, {
  options: props => {
    return { variables: { service: props.navigation.state.params.service } };
  }
})(ServiceScreen);
