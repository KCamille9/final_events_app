/**
 * React Native Event Booking App UI - Event Detail Screnn
 * -> The screen can be seperated 4 sections and 1 fixed bottom bar
 * 
 * TODO:
 * [] Build the header image background section
 *    [] Rendering the image background sub section (ImageBackground)
 *    [] Rendering the header sub section
 *    [] Rendering the footer sub section (LinearGradient)
 * [] Build the buttons group section
 * [] Build the description section
 * [] Build the location section (google map in dark mode)
 * [] Build the fixed bottom bar
 */
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Platform,
    TouchableOpacity
} from 'react-native'

import styled from 'styled-components/native';

import { FONTS, SIZES, COLORS, icons, dummyData, images }
    from "../constants";

import moment from 'moment';

import { McIcon, McText } from "../components";

import { LinearGradient } from 'expo-linear-gradient';


const EventDetail = ({ navigation, route }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        let { selectedEvent } = route.params;
        setSelectedEvent(selectedEvent);
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    backgroundColor: COLORS.black
                }}
                style={{
                    backgroundColor: COLORS.black
                }}
            >
                <ImageBackground
                    resizeMode='cover'
                    source={selectedEvent?.image}
                    style={{
                        width: '100%',
                        height: SIZES.height < 700 ? SIZES.height * 0.4 : SIZES.height * 0.5
                    }}
                >
                    <View style={{ flex: 1 }}>
                        {/* Image Header */}
                        <SectionImageHeader>
                            <TouchableOpacity
                                style={{
                                    width: 56,
                                    height: 40,
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10
                                }}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                {/* Back Icon */}
                                <McIcon
                                    source={icons.back_arrow}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: COLORS.white
                                    }}
                                />
                            </TouchableOpacity>

                            <View
                                style={{
                                    width: 96,
                                    height: 40,
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    borderRadius: 10
                                }}
                            >
                                <TouchableOpacity>
                                    {/* Icon */}
                                    <McIcon
                                        source={icons.like}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: COLORS.white,
                                            marginLeft: 16
                                        }}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    {/* Icon */}
                                    <McIcon
                                        source={icons.share}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: COLORS.white,
                                            marginRight: 16
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>

                        </SectionImageHeader>

                        {/* Image Footer */}
                        <SectionImageFooter>
                            <LinearGradient
                                colors={['transparent', '#000']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={{
                                    width: '100%',
                                    height: 400,
                                    justifyContent: 'flex-end'
                                }}

                            >
                                <FooterContentView>
                                    <View>
                                        <McText style={{ letterSpacing: 2 }}>{selectedEvent?.type}</McText>
                                        <McText h1>{selectedEvent?.title}</McText>
                                        <McText>
                                            STARTING {moment(selectedEvent?.startingTime).format('hh:mm A')}
                                        </McText>
                                    </View>

                                    <LinearGradient
                                        // Button Linear Gradient
                                        colors={['#439DFEE8', '#F687FFE8']}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 1 }}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 15,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <McText>
                                            {moment(selectedEvent?.startingTime)
                                                .format('MMM')
                                                .toUpperCase()}
                                        </McText>
                                        <McText>
                                            {moment(selectedEvent?.startingTime)
                                                .format('DD')
                                            }
                                        </McText>
                                    </LinearGradient>

                                </FooterContentView>

                            </LinearGradient>

                        </SectionImageFooter>
                    </View>
                </ImageBackground>

                {/* Buttons group section */}
                <ButtonSection>

                    <TouchableOpacity
                        style={{
                            width: 76,
                            height: 32,
                            marginRight: 16,
                            borderRadius: 10,
                            backgroundColor: COLORS.white,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <McText h6 style={{ color: COLORS.black }}>ABOUT</McText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            width: 124,
                            height: 32,
                            borderRadius: 10,
                            backgroundColor: COLORS.input,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <McText h6 style={{ opacity: 0.5 }}>PARTICIPANTS</McText>
                    </TouchableOpacity>

                </ButtonSection>

                {/* Description Section */}
                <DescriptionSection>
                    <McText body3>{selectedEvent?.description}</McText>

                </DescriptionSection>

            </ScrollView>

            {/* Fixed bottom bar */}
            <BottomBarSection>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginHorizontal: 30
                    }}
                >
                    <View>
                        <McText body3>PRICE</McText>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end'
                            }}
                        >
                            <McText h2>$17.60</McText>
                            <McText h2>/person</McText>
                        </View>
                    </View>

                    {/* Buy ticket */}
                    <TouchableOpacity>
                        <LinearGradient
                            colors={['#439DFEE8', '#F687FFE8']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            style={{
                                width: 173,
                                height: 53,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <McText h4>BUY A TICKET</McText>
                                <McIcon 
                                    source={icons.buy_ticket}
                                    size={24}
                                    style={{
                                        marginLeft: 11
                                    }}
                                ></McIcon>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>

            </BottomBarSection>
        </View>
    )
}


const BottomBarSection = styled.View`
    height: 130px;
    width: ${SIZES.width + 'px'};
    border-radius: ${SIZES.radius};
    background-color: ${COLORS.tabBar};
    position: absolute;
    bottom: 0px;
    justify-content: center;
`;

const DescriptionSection = styled.View`
    margin: 0px 30px;
`;

const ButtonSection = styled.View`
    margin: 15px 30px;
    flex-direction: row;
`;

const FooterContentView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 30px;

`;

const SectionImageFooter = styled.View`
    flex: 1;
    justify-content: flex-end;
    position: relative;
`;

const SectionImageHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${Platform.OS === 'ios' ? '40px' : '20px'};
    margin-left: 30px;
    margin-right: 30px;
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    }
})

export default EventDetail;
