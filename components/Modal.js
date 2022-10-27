import { Modal, View, Text, Pressable, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

function ModalCustom({ visible, close }) {
  return (
    <>
      <SafeAreaView>
        {/* <StatusBar
          style='light'
          backgroundColor='#334A80'
          translucent
        /> */}
        <View>
          <Modal
            visible={visible}
            animationType='slide'
          >
            <View style={{ backgroundColor: '#334A80' }}>
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
                  onPress={close}
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
            <View style>
              {/* Head */}
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
                  }}
                >
                  <Text style={{ fontWeight: '800', color: 'white' }}>
                    On Progress
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </>
  );
}

export default ModalCustom;
