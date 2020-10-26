import React from 'react';
import {View, Text} from 'react-native';

interface IProps {}

interface IState {}

export class UnconnectedViewNotes extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>view notes screen</Text>
      </View>
    );
  }
}

export const ViewNotes = UnconnectedViewNotes;
