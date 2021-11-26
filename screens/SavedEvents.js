/**
 * React Native Event Booking App UI - Featured Screnn
 * -> The screen can be seperated 4 sections
 * 
 * TODO:
 * [] Build the header section
 * [] Build the search section (TextInput)
 * [] Build the FEATURED section (Flatlist)
 * [] Build the FOR YOU section 
 */
 import React from 'react';
 import { Text, View, StyleSheet, Button, FlatList, TouchableWithoutFeedback, ImageBackground } from 'react-native';
 
 import styled from 'styled-components/native';
 import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
 import { McText, McIcon, McAvatar } from '../components';
 import { SafeAreaView } from 'react-native-safe-area-context';
 import moment from 'moment';
 
 
 
 const SavedEvents = ({ navigation }) => {
 
   const _renderItem = ({ item, index }) => {
     return (
       <TouchableWithoutFeedback
         onPress={() => {
           console.log(navigation);
           navigation.navigate("EventDetail", { selectedEvent: item });
         }}
       >
         <View
           style={{
             marginLeft: index === 0 ? 30 : 20,
             marginRight: index === dummyData.Events.length - 1 ? 30 : 0
           }}
         >
           <ImageBackground source={item.image}
             resizeMode='cover'
             borderRadius={SIZES.radius}
             style={{
               width: SIZES.width / 2 + 70,
               height: SIZES.width / 2 + 70,
               justifyContent: 'space-between'
             }}
           >
             <View
               style={{
                 alignItems: 'flex-end',
                 marginHorizontal: 15,
                 marginVertical: 15
               }}
             >
               <DateSquare>
                 <Text
                   style={{
                     letterSpacing: 2
                   }}
                 >
                   {moment(item.startingTime).format('MMM').toUpperCase()}
                 </Text>
                 <Text
                   style={{
                     ...FONTS.h2
                   }}
                 >
                   {moment(item.startingTime).format('DD')}
                 </Text>
               </DateSquare>
             </View>
             <View
               style={{
                 marginLeft: 20,
                 marginBottom: 25
               }}
             >
               <McText style={{ ...FONTS.body3 }}>{item.type}</McText>
               <McText style={{ ...FONTS.h2 }}>{item.title}</McText>
             </View>
 
           </ImageBackground>
         </View>
       </TouchableWithoutFeedback>
     )
   }
 
   return (
     <SafeAreaView style={styles.container}>
       {/* Header Section */}
       <SectionHeader>
         <View>
           <McText></McText>
           <McText h1>Explore events</McText>
         </View>
       </SectionHeader>
 
       {/* Featured */}
       <SectionTitle>
         <McText h5>FEATURED</McText>
       </SectionTitle>
 
       <View>
         <FlatList
           horizontal
           contentContainerStyle={{}}
           keyExtractor={(item) => 'event_' + item.id}
           data={dummyData.Events}
           renderItem={_renderItem}
         >
 
         </FlatList>
       </View>
 
     </SafeAreaView>
   );
 };
 
 const DateSquare = styled.View`
     width: 60px;
     height: 60px;
     border-radius: 15;
     background-color: ${COLORS.white};
     justify-content: center;
     align-items: center;
 `;
 
 
 const SectionTitle = styled.View`
   margin: 20px ${SIZES.padding}
 `;
 
 const SectionHeader = styled.View`
   padding: 16px ${SIZES.padding};
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
 `;
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: COLORS.black,
   },
 });
 
 export default SavedEvents;
 