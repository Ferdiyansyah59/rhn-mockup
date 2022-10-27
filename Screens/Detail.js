import {
  Modal,
  View,
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function ModalDetail() {
  const navigation = useNavigation();

  const closeModalHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <>
      <StatusBar
        style='light'
        backgroundColor='#334A80'
        translucent
      />
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={{ paddingTop: 40 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
              padding: 10,
            }}
          >
            <Pressable
              style={{
                height: 28,
                width: 28,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 150,
                backgroundColor: 'white',
              }}
              onPress={closeModalHandler}
            >
              <Entypo
                name='cross'
                size={20}
                color='black'
              />
            </Pressable>
            <Entypo
              name='dots-three-horizontal'
              size={24}
              color='white'
            />
          </View>
        </View>
        {/* MM */}
        <View
          style={{
            flex: 1,
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
            backgroundColor: 'white',
            marginTop: 20,
            paddingHorizontal: 25,
          }}
        >
          {/* Head */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <View
                style={{
                  backgroundColor: '#FDD041',
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  width: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontWeight: '800', color: 'white' }}>
                  On Progress
                </Text>
              </View>
              <Text style={styles.title}>Redesign Pixel</Text>
              <Text style={styles.title}>Website</Text>
            </View>
            <View>
              <Text style={styles.date}>20</Text>
              <Text style={styles.date}>Jan</Text>
            </View>
          </View>
          {/* End Head */}
          {/* Desc */}
          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: '#81848B', lineHeight: 22 }}>
              In this project, I need to redesign website pixel.com become clean
              website. It is very importantto choose a best image asset and
              color. The maingoal is to make colorful website
            </Text>
          </View>
          {/* End Desc */}
          {/* Card 1*/}
          <View
            style={{
              width: '100%',
              backgroundColor: '#F3F4F9',
              borderRadius: 15,
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Text style={{ color: '#334A80', fontWeight: '800', fontSize: 16 }}>
              Label
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#81848B', fontSize: 12 }}>
                UI Interface
              </Text>
              <MaterialIcons
                name='keyboard-arrow-right'
                size={24}
                color='#81848B'
              />
            </View>
          </View>
          {/* End Card */}
          {/* Card 2*/}
          <View
            style={{
              width: '100%',
              backgroundColor: '#F3F4F9',
              borderRadius: 15,
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Text style={{ color: '#334A80', fontWeight: '800', fontSize: 16 }}>
              Assign
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#81848B', fontSize: 12 }}>
                Mary Carter
              </Text>
              <Image
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 100,
                  marginLeft: 8,
                }}
                source={require('../assets/profile.jpg')}
              />
              <MaterialIcons
                name='keyboard-arrow-right'
                size={24}
                color='#81848B'
              />
            </View>
          </View>
          {/* End Card */}
          {/* Card 3*/}
          <View
            style={{
              width: '100%',
              backgroundColor: '#F3F4F9',
              borderRadius: 15,
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Text style={{ color: '#334A80', fontWeight: '800', fontSize: 16 }}>
              Tasks
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#81848B', fontSize: 12 }}>7/10</Text>
              <MaterialIcons
                name='keyboard-arrow-right'
                size={24}
                color='#81848B'
              />
            </View>
          </View>
          {/* End Card */}

          {/* Buah */}
          <View style={{ marginTop: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 12,
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: '800', color: '#373E79' }}
              >
                Attachment
              </Text>
              <Text style={{ fontSize: 10, fontWeight: '100' }}>See All</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  backgroundColor: '#F3F4F9',
                  height: 150,
                  width: 150,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 20,
                }}
              >
                <View>
                  <AntDesign
                    name='plus'
                    size={30}
                    color='#373E79'
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#373E79',
                    }}
                  >
                    Add
                  </Text>
                </View>
              </View>
              {Array(5)
                .fill(1)
                .map((_, i) => {
                  return (
                    <Image
                      style={{
                        height: 150,
                        width: 150,
                        borderRadius: 15,
                        marginRight: 20,
                      }}
                      source={require('../assets/kucing.webp')}
                    />
                  );
                })}
            </ScrollView>
          </View>
        </View>
        {/* End White */}
      </SafeAreaView>
    </>
  );
}

export default ModalDetail;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: '#334A80',
  },
  title: {
    color: '#334A80',
    fontWeight: '800',
    fontSize: 26,
  },
  date: {
    fontWeight: '800',
    fontSize: 20,
    color: '#F29394',
    textAlign: 'center',
  },
});
