import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert ,Pressable ,TouchableOpacity} from 'react-native';


function EmergencyAccepted({navigation}){

    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <Image
        style={styles.emergencyButton}
        source={require('../../../assets/urgence.png')
        } />
        <TouchableOpacity
          style={styles.CancelButton}
          onPress={() => navigation.navigate('TrackAmbulance')}
        >
          <Text style={styles.buttonText}>Track Your Ambulance</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    CancelButton:{
        width: "90%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#077871",
        marginTop: 80,
    },
    buttonText:{
        color:"#ffffff"
    }
  
  });
  export default EmergencyAccepted