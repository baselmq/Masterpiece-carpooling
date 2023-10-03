import React from "react";
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
import { useColorCxt } from "../../../hooks/useColorCxt";

const CIRCLE_SIZE = 40;
const CIRCLE_RING_SIZE = 2;

const AlertColor = () => {
  const { value, dispatch, visible } = useColorCxt();

  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            dispatch({
              type: "SET_VISIBLE",
              payload: false,
            });
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
                    {PathColor.colorsCar.map((item, index) => {
                      const isActive = value === index;
                      return (
                        <View key={item}>
                          <TouchableWithoutFeedback
                            onPress={() => {
                              dispatch({
                                type: "SET_VALUE",
                                payload: index,
                              });
                            }}
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
                    onPress={() => {
                      dispatch({
                        type: "SET_VISIBLE",
                        payload: false,
                      });
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/* <InputCustom
        onPressIn={() =>
          dispatch({
            type: "SET_VISIBLE",
            payload: true,
          })
        }
        control={control}
        name="car_color"
        label="Color Car"
        rules={AuthRules.name}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
