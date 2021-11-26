import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Featured, Schedule, Tickets, Mine } from '../screens';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { McText, McIcon } from '../components';

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, icon }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <McIcon
        size={focused ? 24 : 32}
        source={icon}
        resizeMode="contain"
        style={{
          tintColor: focused ? COLORS.byu_royal : COLORS.byu_royal,
        }}
      />
    </View>
  );
};
const TabLabel = ({ focused, text }) => {
  return focused ? (
    <McText
      h4
      
      style={{
        marginTop: -25,
        paddingBottom: 10,
        color: COLORS.byu_royal,
        // color: focused ? COLORS.byu_royal : COLORS.byu_royal,
        // tintColor: COLORS.byu_royal
      }}
    >
      {text}
    </McText>
  ) : (
    <McText
      h4
      
      style={{
        marginTop: -25,
        paddingBottom: 10,
        // color: COLORS.byu_royal,
        color: COLORS.byu_blueGray
        // tintColor: COLORS.byu_royal
      }}
    >
      {text}
      </McText>
  );
};

const Tabs = ({ params }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          opacity: 0.9,
          borderTopColor: 'transparent',
          height: 111,
          borderRadius: 1
        },
      }}
    >
      <Tab.Screen
        name="Featured"
        component={Featured}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_1} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Featured" />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_2} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Schedule" />
          ),
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_3} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Tickets" />
          ),
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.tab_4} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabLabel focused={focused} text="Mine" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
