import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

import styled from 'styled-components/native';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon, McAvatar } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';



const Mine = ({ params, route }) => {


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
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
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

              <TouchableOpacity
                onPress={() => {
                  console.log('bookmark touched');
                  //addToCart(item);

                  // first, clone it
                  const newItems = [...items];
                  newItems[item.id] = {
                    ...item,
                    isSaved: true
                  };
                  setItems(newItems);
                  //setItems(newItems);

                  console.log(item.id);
                  console.log(dummyData.Events[item.id - 1]);

                  dummyData.Events[item.id - 1].isSaved = true;
                  console.log(item)
                }}
              >
                <Image
                  source={icons.bookmark}
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 10,
                    marginBottom: 16,
                    tintColor: '#0025ED',
                    zIndex: 1000
                  }}
                />
              </TouchableOpacity>
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




  // Handlers n stuff

  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)

  const [menuList, setMenuList] = React.useState([])

  const [education, setEducation] = React.useState([])

  const [competition, setCompetition] = React.useState([])

  const [selectedMenuType, setSelectedMenuType] = React.useState(1)



  React.useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType)
  }, [])

  let selectedRecommend = dummyData.Events.filter(a => a.isSaved == true);


  // Handler
  function handleChangeCategory(categoryId, menuTypeId) {

    console.log("akiii")
    console.log(selectedRecommend)


    // Retrieve the popular menu
    let selectedEducation = dummyData.Events.find(a => a.type == "Popular")

    // Retrieve the recommended menu
    let selectedCompetition = dummyData.Events.find(a => a.type == "Recommended")

    // Find menu based on the menuTypeId
    let selectedMenu = dummyData.Events.find(a => a.id == menuTypeId)


    // Set the popular menu based on categoryId
    setEducation(selectedEducation?.list.filter(a => a.categories.includes(categoryId)))

    // Set the recommended menu based on categoryId
    setCompetition(selectedCompetition?.list.filter(a => a.categories.includes(categoryId)))

    // Set the menu based on categoryId
    // setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))

    // // Set today date based on categoryId
    // setDateToday(selectedTodayDate?.list.filter(a => a.categories.includes(categoryId)))
  }




  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight: index == dummyData.menu.length - 1 ?
                SIZES.padding : 0
            }}
            onPress={() => {
              setSelectedMenuType(item.id)
              handleChangeCategory(selectedCategoryId, item.id)
            }}
          >
            <Text
              style={{
                color: selectedMenuType == item.id ?
                  COLORS.primary : COLORS.black, ...FONTS.h3
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
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
          vertical
          contentContainerStyle={{}}
          keyExtractor={(item) => 'event_' + item.id}
          data={selectedRecommend}
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
    margin-left: 15px;
    margin-top: 15px;
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
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Mine;
