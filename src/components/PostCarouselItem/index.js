import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import Styles from './styles';

const PostCarouselItem = props => {
  const post = props.post;
  const width = useWindowDimensions().width;
  const navigation =useNavigation(),
    const goTopostPage=()=>{
      navigation.navigate('Post',{postId:post.id})
    }
  return (
    <Pressable onPress={goTopostPage} style={[Styles.container, {width: width - 60}]}>
      <View style={Styles.innerContainer}>
        <Image
          style={Styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={{flex:1, marginHorizontal:10}}>
          <Text style={Styles.bedroom}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={Styles.description} numberOfLines={2}>
            {post.type} {post.title}
          </Text>
          <Text style={Styles.prices}>
            <Text style={Styles.newPrice}> ${post.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarouselItem;
