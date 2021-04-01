import React from "react";

import Simple from "../templates/simple";

import Container from "../components/container";

import { Heading, Text } from "@chakra-ui/core";
import { navigate } from "gatsby";

export default class StartersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    navigate("/interim", {
      state: { phone: this.state.phone },
    });
  }

  render() {
    return (
      <Simple title="Courier Starters">
        <Container>
          <Heading>For starters, what's your phone number?</Heading>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>

          <Text width="600px">
            We’ll use it to demonstrate how our API deploys notifications to
            multiple channels. Starting with SMS, then we’ll add in more
            channels along the way.
          </Text>

          <Text>We promise not to use it for evil purposes.</Text>
        </Container>
      </Simple>
    );
  }
}
