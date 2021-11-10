import React, {useEffect, useRef, useState} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import feed from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultMap = () => {
  const [selectPlaceId, setSelectPlaceId] = useState(null);
  const flatList = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChange = useRef(({viewableItem}) => {
    if (viewableItem.length > 0) {
      const selectPlace = viewableItem[0].item;
      setSelectPlaceId(selectPlace.id);
    }
  });
  const width = useWindowDimensions().width;
  useEffect(() => {
    if (!selectPlaceId || !flatList) {
      return;
    }
    const index = feed.findIndex(place => place.id === selectPlaceId);
    flatList.current.scrollToIndex({index});

    const selectedPlace = feed[index];
    const region={
        latitude:selectedPlace.coordinate.latitude,
        longitude:selectedPlace.coordinate.longitude,
        latitudeDelta:0.8,
        longitudeDelta:0.8
    }
    map.current.animateToRegion(region);
    return () => {
        setSelectPlaceId(null);
    };
  }, [selectPlaceId]);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {feed.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectPlaceId}
            onPress={() => setSelectPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 40}}>
        <FlatList
          ref={flatList}
          data={feed}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig}
          onViewableItemsChanged={onViewChange}
        />
      </View>
    </View>
  );
};

export default SearchResultMap;
