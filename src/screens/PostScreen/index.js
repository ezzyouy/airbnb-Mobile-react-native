import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const PostScreen = () => {
  const route = useRoute();
  const post = places.find(place => place.id === route.params.postId);
  return (
    <View style={{backgroundColor: 'white'}}>
      <Post post={post} />
    </View>
  );
};

export default PostScreen;
