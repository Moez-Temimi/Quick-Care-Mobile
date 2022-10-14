import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import axios from "axios";
import { CommonActions } from "@react-navigation/native";
import link from "../../Adress";

function EditPageDoc({ navigation, route }) {
  // const [firstname, setFirstName] = useState(route.params.patient.firstName);
  // const [lastName, setLastName] = useState(route.params.patient.lastName);
  // const [email, setEmail] = useState(route.params.patient.email);
  // const [password, setPassword] = useState(route.params.patient.password);
  // const [phoneNumber, setPhoneNumber] = useState(route.params.patient.phoneNumber);
  // const [age, setAge] = useState(route.params.patient.age);
  // const [gender, setGender] = useState(route.params.patient.gender);
  // const [Chronical, setChronical] = useState(route.params.patient.chronicDiseases)
  // const data = [
  //     { label: 'male', value: 'male' },
  //     { label: 'female', value: 'female' },
  //     { label: "Other", value: "don't want to tell" },

  // ];

  // useEffect(() => { })

  // const changerFirstName = () => {
  //     axios.put("http://192.168.101.9:3000/user/updateAll", { id: route.params.patient.id, firstName: firstname }).then((a) => setFirstName(a.data.firstName)).catch((err) => console.log(err))
  // }

  // const changeLastName = () => {
  //     axios.put("http://192.168.101.9:3000/user/updateAll", { id: route.params.patient.id, lastName: lastName }).then((a) => setLastName(a.data.lastName)).catch((err) => console.log(err))
  // }

  // const changeEmail = () => {
  //     axios.put("http://192.168.101.9:3000/user/updateAll", { id: route.params.patient.id, email: email }).then((a) => setEmail(a.data.email)).catch((err) => console.log(err))
  // }

  // const changePhonenumber = () => {
  //     axios.put("http://192.168.101.9:3000/user/updateAll", { id: route.params.patient.id, phoneNumber: phoneNumber }).then((a) => setPhoneNumber(a.data.phoneNumber)).catch((err) => console.log(err))
  // }

  // const changeAge = () => {
  //     axios.put("http://192.168.101.9:3000/user/updateAll", { id: route.params.patient.id, age: age }).then((a) => setAge(a.data.age)).catch((err) => console.log(err))
  // }

  // const changegender = () => {
  //     axios.put("http://192.168.101.9:3000/user/updateAll", { id: route.params.patient.id, gender: gender }).then((a) => setGender(a.data.gender)).catch((err) => console.log(err))
  // }

  // const changechronicals = () => {
  //     axios.put("http://192.168.101.9:3000/user/updateAll", { id: route.params.patient.id, chronicDiseases: Chronical }).then((a) => setChronical(a.data.chronicDiseases)).catch((err) => console.log(err))
  // }

  const [data, setData] = useState({
    firstName: route.params.doctor.firstName,
    lastName: route.params.doctor.lastName,
    email: route.params.doctor.email,
    phoneNumber: route.params.doctor.phoneNumber,
    adress: route.params.doctor.adress,
    disponibility: route.params.doctor.disponibility,
  });
  useEffect(() => {
    axios
      .put(`${link}/doctor/update`, {
        id: route.params.doctor.id,
      })
      .then((a) => {
        console.log(a);
        setData(a.data);
      })
      .catch((err) => console.log(err));
  },[])

  return (
    <ScrollView>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
      <View style={styles.body}>
        <View
          style={styles.bodyContent}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.name}
            placeholder="First Name"
            key="firstName"
            value={data.firstName}
            name="firstName"
            onChangeText={(text) => setData({ ...data, firstName: text })}
          >
            {firstName}
          </TextInput>
          <TextInput
            style={styles.name}
            onChangeText={(last) =>console.log("haha")}
          >
            {lastName}
          </TextInput>
          <TextInput style={styles.info}>{email}</TextInput>
          <Text>Email :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(last) =>console.log("haha")}
              defaultValue={email}
            ></TextInput>
          </View>
          <Text>password :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(last) =>console.log("haha")}
              defaultValue={phoneNumber}
            ></TextInput>
          </View>
          <Text>phoneNumber :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(last) =>console.log("haha")}
              keyboardType="numeric"
              placeholder={phoneNumber}
              defaultValue={phoneNumber}
            ></TextInput>
          </View>
          <Text>Age :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(last) =>console.log("haha")}
              defaultValue={age}
            ></TextInput>
          </View>
          <Text>Medical records :</Text>
          <View style={styles.containerForEdit}>
            <TextInput
              style={styles.description}
              onChangeText={(last) =>console.log("haha")}
              ></TextInput>
          </View>
          <View style={styles.containerForEdit}>
            <Dropdown
              style={styles.dropdown}
              data={data}
              labelField="label"
              placeholder="Gender"
              value={gender}
              onChange={(item) => {
                setGender(item.value);
                console.log("selected", item);
              }}
            />
          </View>
          {/* <TouchableOpacity
            style={styles.confirm}
            onPress={() => {
              navigation.dispatch(
                CommonActions.navigate({
                  name: "ProfilePatient",
                  params: { id: route.params.patient.id },
                })
              );
              changerFirstName();
              changeLastName();
              changeEmail();
              changePhonenumber();
              changeAge();
              changechronicals();
              changegender();
            }}
          >
            <MaterialCommunityIcons name="check" size={50} color={"#077871"} />
          </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#077871",
    height: 120,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 60,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },

  bodyContent: {
    alignItems: "center",
    padding: 70,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#696969",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    width: 300,
    borderRadius: 12,
    borderColor: "#077871",
    borderWidth: 2,
    backgroundColor: "#fff",
    height: 40,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#077871",
    marginTop: 80,
  },
  loginText: {
    color: "#ffffff",
  },
  editIcon: {
    position: "absolute",
    left: 300,
    top: "40%",
  },
  dropdown: {
    backgroundColor: "#fff",
    width: 300,
    shadowColor: "#fff",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    borderRadius: 12,
    borderColor: "#077871",
    borderWidth: 2,
    marginTop: 20,
    alignContent: "center",
    textAlign: "center",
  },
  editbigIcon: {
    position: "absolute",
    left: 300,
    top: "8%",
  },
  confirm: {
    borderWidth: 2,
    borderColor: "#077871",
    marginTop: 15,
    borderRadius: 50,
  },
});

export default EditPageDoc;