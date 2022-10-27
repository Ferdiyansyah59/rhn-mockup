import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();

  const data = [
    {
      persen: '50%',
      title: 'Redesign Pixel Website',
      subtitle: '20 January',
      color: '#334A80',
    },
    {
      persen: '25%',
      title: 'Mobile App Furniture',
      subtitle: '10 October',
      color: '#5748FD',
    },
    {
      persen: '75%',
      title: 'President IKEA Depok',
      subtitle: '7 November',
      color: '#1F9273',
    },
    {
      persen: '60%',
      title: 'Meat Ball Shop Pak Didi',
      subtitle: '10 December',
      color: '#75921F',
    },
  ];

  const team = [
    {
      name: 'Pixel Studios',
      char: 'P',
    },
    {
      name: 'Samsan Tech',
      char: 'S',
    },
    {
      name: 'Kertas Tech',
      char: 'K',
    },
  ];

  const openModalHandler = () => {
    navigation.navigate('Detail');
  };

  return (
    <>
      <SafeAreaView
        style={
          Platform.OS == 'ios'
            ? [styles.container, { marginHorizontal: 10 }]
            : styles.container
        }
      >
        <StatusBar
          backgroundColor='white'
          style='dark'
          translucent
        />
        {/* Profile Head */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={{ color: '#A8A8AA', fontSize: 10 }}>
              Mon, Nov 9 2022
            </Text>
            <Text style={{ color: '#373E79', fontWeight: '800' }}>
              Hi, Mary Carter
            </Text>
          </View>
          <Image
            style={styles.profileImage}
            source={require('../assets/profile.jpg')}
          />
        </View>
        {/* Search */}
        <View style={styles.search}>
          <Ionicons
            name='search'
            size={24}
            color='#373E79'
          />
          <TextInput
            style={styles.searchInput}
            placeholder='Search'
          />
        </View>
        {/* Horizontal Scroll View */}
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {data.map((item, i) => {
              return (
                <Pressable
                  key={i}
                  onPress={openModalHandler}
                >
                  <View style={[styles.card, { backgroundColor: item.color }]}>
                    <Text
                      style={{
                        fontSize: 10,
                        color: 'white',
                        marginTop: 10,
                      }}
                    >
                      {item.persen}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                        fontWeight: '800',
                        marginTop: 40,
                        marginBottom: 15,
                      }}
                    >
                      {item.title}
                    </Text>
                    <View
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        borderRadius: 15,
                        paddingVertical: 4,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: 10,
                        }}
                      >
                        until {item.subtitle}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
        {/* Notif */}
        <View style={{ marginVertical: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ color: '##373E79', fontWeight: '800', fontSize: 16 }}
            >
              Latest Notifiaction
            </Text>
            <Text style={{ fontWeight: '100', fontSize: 10 }}>Seee All</Text>
          </View>
          {/* Card */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              backgroundColor: '#F3F4F9',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 25,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons
                name='mail-outline'
                size={24}
                color='#373E79'
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: '#373E79',
                    fontSize: 16,
                    fontWeight: '800',
                  }}
                >
                  Ryan Malone
                </Text>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontSize: 14,
                    fontWeight: '100',
                  }}
                >
                  Ryan invite you to project
                </Text>
              </View>
            </View>
            <MaterialIcons
              name='keyboard-arrow-right'
              size={24}
              color='#373E79'
            />
          </View>
        </View>
        {/* Team */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '800', color: '#373E79' }}>
              My Team
            </Text>
            <Text style={{ fontSize: 10, fontWeight: '100' }}>See All</Text>
          </View>
          {/* Team Group */}
          {team.map((item, i) => {
            return (
              <View
                key={i}
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={{
                      borderRadius: 100,
                      backgroundColor: '#4F67E5',
                      width: 50,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: '800',
                        fontSize: 20,
                        color: 'white',
                      }}
                    >
                      {item.char}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#4F67E5',
                        fontWeight: '800',
                        fontSize: 16,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: '#A2A2A2',
                        fontWeight: '100',
                        fontSize: 14,
                      }}
                    >
                      You have 5 members
                    </Text>
                  </View>
                </View>
                {/*  */}
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={styles.profileImage}
                    source={require('../assets/profile.jpg')}
                  />
                  <Image
                    style={[styles.profileImage, { marginLeft: -12 }]}
                    source={require('../assets/profile.jpg')}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 30,
    // marginHorizontal: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 25,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
    backgroundColor: '#F3F4F9',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchInput: {
    width: '100%',
    height: 50,
    marginLeft: 5,
  },
  card: {
    height: 185,
    width: 145,
    borderRadius: 17,
    padding: 10,
    marginRight: 10,
  },
});
