import React from 'react';
import {View, Text} from 'react-native';

interface IProps {}

interface IState {}

export class UnconnectedAddNotes extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Add notes screen</Text>
      </View>
    );
  }
}

export const AddNotes = UnconnectedAddNotes;
