import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import CountryItem from '../../components/auth/countryItem';
import {useAppSelector} from '../../store/hooks';

const CountryCode: React.FC = () => {
  const {countries} = useAppSelector(state => state.auth);
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <FlatList
        data={countries}
        renderItem={({item}: {item: any}) => <CountryItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default CountryCode;
