import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Styles from './styles';

const Post = (props) => {
  
    const post=props.post;
    const navigation =useNavigation(),
    const goTopostPage=()=>{
      navigation.navigate('Post',{postId:post.id})
    }
  return (
    <Pressable onPress={goTopostPage} style={Styles.container}>
      <Image
        style={Styles.image}
        source={{
          uri: post.image
        }}
      />
      <Text style={Styles.bedroom}>{post.bed} bed {post.bedroom} bedroom</Text>
      <Text style={Styles.description} numberOfLines={2}>
      {post.type} {post.title}
      </Text>
      <Text style={Styles.prices}>
          <Text style={Styles.oldPrice}>${post.oldPrice}</Text>
          <Text style={Styles.newPrice}>  ${post.newPrice} </Text>/ night
      </Text>
      <Text style={Styles.totalPrice}>${post.totalPrice} total</Text>
    </Pressable>
  );
};

export default Post;
