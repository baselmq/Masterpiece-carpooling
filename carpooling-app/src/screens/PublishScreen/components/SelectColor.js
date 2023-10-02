import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import BtnCustom from "../../../components/buttons/BtnCustom";
import { PathFonts, PathFontsSize } from "../../../utils/PathFonts";
import { PathColor } from "../../../utils/PathColor";

const colors = [
  "#6874e7",
  "#b8304f",
  "#758E4F",
  "#fa3741",
  "#F26419",
  "#F6AE2D",
  "#7A93AC",
  "#33658A",
  "#42273B",
  "#171A21",
  "#008080",
  "#000080",
  "#EAEAEA",
  "#C0C0C0",
  "#808080",
];

const CIRCLE_SIZE = 40;
const CIRCLE_RING_SIZE = 2;

const AlertColor = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <View style={styles.sheetHeader}>
                <Text style={styles.sheetHeaderTitle}>Select Car color</Text>
              </View>
              <View style={styles.sheetBody}>
                <View style={styles.group}>
                  {colors.map((item, index) => {
                    const isActive = value === index;
                    return (
                      <View key={item}>
                        <TouchableWithoutFeedback
                          onPress={() => setValue(index)}
                        >
                          <View
                            style={[
                              styles.circle,
                              isActive && { borderColor: item },
                            ]}
                          >
                            <View
                              style={[
                                styles.circleInside,
                                { backgroundColor: item },
                              ]}
                            />
                          </View>
                        </TouchableWithoutFeedback>
                      </View>
                    );
                  })}
                </View>
                <BtnCustom
                  title={"Confirm"}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <BtnCustom title={"Show"} onPress={() => setModalVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  sheetHeader: {
    borderBottomWidth: 1,
    borderBottomColor: PathColor.gray[100],
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  sheetHeaderTitle: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s20,
    textAlign: "center",
    marginTop: 4,
  },
  sheetBody: {
    padding: 20,
  },

  group: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  circle: {
    width: CIRCLE_SIZE + CIRCLE_RING_SIZE * 4,
    height: CIRCLE_SIZE + CIRCLE_RING_SIZE * 4,
    borderRadius: 9999,
    backgroundColor: "white",
    borderWidth: CIRCLE_RING_SIZE,
    borderColor: "transparent",
    marginRight: 8,
    marginBottom: 12,
  },
  circleInside: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: 9999,
    position: "absolute",
    top: CIRCLE_RING_SIZE,
    left: CIRCLE_RING_SIZE,
  },
});

export default AlertColor;
