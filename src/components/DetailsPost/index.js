import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Styles from './styles';

const DetailsPost = props => {
  const post = props.post;
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Image
          style={Styles.image}
          source={{
            uri: post.image,
          }}
        />
        <Text style={Styles.bedroom}>
          {post.bed} bed {post.bedroom} bedroom
        </Text>
        <Text style={Styles.description} numberOfLines={2}>
          {post.type} {post.title}
        </Text>
        <Text style={Styles.prices}>
          <Text style={Styles.oldPrice}>${post.oldPrice}</Text>
          <Text style={Styles.newPrice}> ${post.newPrice} </Text>/ night
        </Text>
        <Text style={Styles.totalPrice}>${post.totalPrice} total</Text>
        <Text style={Styles.longDescription}>{post.longDescription}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailsPost;
