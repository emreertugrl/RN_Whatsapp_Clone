import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import firestore from '@react-native-firebase/firestore';
import {useAppSelector} from '../../store/hooks';
import CallItem from '../../components/call/callItem';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../utils/routes';
const Calls: React.FC = () => {
  const {phoneNumber} = useAppSelector(state => state.auth);
  const [calls, setCalls] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const subscribe = firestore()
      .collection('Calls')
      .onSnapshot(querySnapshot => {
        const calls = querySnapshot.docs.map(doc => ({
          id: doc?.id,
          ...doc.data(),
        }));
        console.log('calls', calls);
        // navigation.navigate(Routes.USERCALL,{})
        setCalls(calls);
      });
    return () => subscribe();
  }, []);

  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          data={calls.reverse()}
          inverted
          ListEmptyComponent={<Text>No Calls</Text>}
          renderItem={({item}) => <CallItem item={item} />}
          keyExtractor={item => item?.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Calls;
