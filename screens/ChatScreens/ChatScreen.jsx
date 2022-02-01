import React, { useCallback, useLayoutEffect, useState } from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { auth, db } from "../../firebase.js";
import { Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet, Button, Pressable, View } from "react-native";
import {
  addDoc,
  collection,
  orderBy,
  query,
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const ChatScreen = ({ route, navigation }) => {
  const [messages, setMessages] = useState([]);
  const { messageId, userUsername } = route.params;

  // const messageId =
  //   userUid < auth.currentUser.uid
  //     ? `${auth.currentUser.uid}-${userUid}`
  //     : `${userUid}-${auth.currentUser.uid}`;

  useLayoutEffect(() => {
    const collectionRef = collection(db, `groups/${messageId}/messages`);
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(db, `groups/${messageId}/messages`), {
      _id,
      createdAt,
      text,
      user,
    });
    // updateDoc(doc(db, `users/${auth.currentUser.uid}`), {
    //   chats: arrayUnion(messageId),
    // });
    // updateDoc(doc(db, `users/${userUid}`), {
    //   chats: arrayUnion(messageId),
    // });
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#2dc2db",
          },
          right: {
            backgroundColor: "#F36433",
          },
        }}
        textStyle={{
          right: {
            color: "#FFF8F0",
          },
          left: {
            color: "#FFF8F0",
          },
        }}
      />
    );
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.text}>
            <Ionicons name={"arrow-back-circle"} size={30} />
          </Text>
        </Pressable>
        <Text style={styles.userNameText}>{`${userUsername}`}</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        renderBubble={renderBubble}
        user={{
          _id: auth?.currentUser?.email,
          name: auth?.currentUser?.displayName,
        }}
        renderAvatar={() => null}
        showAvatarForEveryMessage={true}
      />
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2DC2BD",
    padding: 5,
    left: 0,
    borderRadius: 50,
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },
  headerContainer: {
    paddingTop: "15%",
    backgroundColor: "#F36433",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 0,
    flexDirection: "row",
  },
  header: {
    margin: "5%",
    marginTop: "10%",
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF8F0",
    alignSelf: "center",
    paddingBottom: "5%",
  },
  userNameText: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "#FFF8F0",
  },
});
