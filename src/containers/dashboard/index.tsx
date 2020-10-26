import React from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface IProps {
  navigation: {
    navigate: (routeName: string) => void;
  };
}

interface IState {
  notes: any;
}

export class UnconnectedDashboard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      notes: [
        {
          title: 'test note 1',
          description: 'test note 1 description',
        },
        {
          title: 'test note 2',
          description: 'test note 2 description',
        },
        {
          title: 'test note 2',
          description: 'test note 2 description',
        },
      ],
    };
  }

  renderList = (item: object) => {
    console.log('asljdbaskdasd', item);
    // return(

    // )
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{flex: 1}}>
          <View style={styles.innerContainer}>
            <TextInput style={styles.input} />
            <TouchableOpacity
              style={styles.inputText}
              onPress={() => this.props.navigation.navigate('AddNotesScreen')}>
              <Text style={{fontSize: 32}}>+</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={this.state.notes}
            extraData={this.props}
            showsVerticalScrollIndicator={false}
            scrollEnabled
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderList}
          />
        </View>
      </View>
    );
  }
}

export const Dashboard = UnconnectedDashboard;
