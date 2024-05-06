import { View, Text } from 'react-native'
import React from 'react'
import Video, {VideoRef} from 'react-native-video';

export default function App() {
  const background = 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8';
 //const background = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  
  return (
    <View style={{flex:1}}>
      <Text>VIDEO</Text>
    <Video 
    // Can be a URL or a local file.
    source={{uri:background}}
    // Store reference  
    // Callback when remote video is buffering                                      
    muted={true}
    // Callback when video cannot be loaded              
    onError={(error)=>{
      console.log(error)
    }}               
    style={{width:500,height:300}}
   />
   </View>
  )
}
