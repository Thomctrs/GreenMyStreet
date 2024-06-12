import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Linking } from "react-native"; // Import de ScrollView

import styles from "../../../styles";

const PrivacyPanel = ({ onClose }) => {
  return (
    <View style={styles.privacyPanel}>
      <View style={styles.panelHeader}>
        <Text style={styles.panelTitle}>Privacybeleid</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={[styles.scrollContainer, styles.scrollView]}>
        <Text style={styles.privacyText}>
          Welkom bij <Text style={{ fontWeight: "bold", color: "green" }}>GreenMyStreet</Text>! Wij
          respecteren uw privacy en zijn toegewijd aan het beschermen van uw persoonlijke gegevens.
          {"\n\n"}
          GreenMyStreet verzamelt geen persoonlijke gegevens tijdens het gebruik van de app, behalve
          de benodigde machtigingen voor toegang tot bepaalde functies.{"\n\n"}
          <Text style={{ fontWeight: "bold", color: "green", textAlign: "center" }}>
            Waarom hebben wij bepaalde machtigingen nodig?:
          </Text>
          {"\n\n"}-{" "}
          <Text style={{ fontWeight: "bold", color: "green" }}>Toegang tot de fotogalerij:</Text> De
          app kan toegang vragen tot de fotogalerij van uw apparaat om u in staat te stellen
          afbeeldingen te selecteren om deze vervolgens te bewerken. Er worden geen (persoonlijke)
          gegevens verzameld of opgeslagen vanuit uw fotogalerij.{"\n"}-{" "}
          <Text style={{ fontWeight: "bold", color: "green" }}>Gebruik van API's:</Text> We
          gebruiken API's om de functionaliteit van onze app te verbeteren, maar er worden geen
          persoonlijke gegevens gedeeld met deze API's. Enkel de geüploade foto om zo tot het beste
          resultaat te komen.{"\n"}-{" "}
          <Text style={{ fontWeight: "bold", color: "green" }}>Opslaan op de telefoon:</Text>{" "}
          Wanneer u bewerkte afbeeldingen opslaat, worden deze lokaal op uw telefoon opgeslagen en
          worden er geen gegevens overgebracht naar onze servers of andere partijen.{"\n"}-{" "}
          <Text style={{ fontWeight: "bold", color: "green" }}>Gebruik van de camera:</Text> De app
          kan toegang vereisen tot de camera van uw apparaat om u in staat te stellen foto's te
          maken. Er worden geen gegevens verzameld of opgeslagen vanuit het gebruik van uw camera.
          {"\n\n"}
          We zijn toegewijd aan het beschermen van uw gegevens en zullen deze niet gebruiken voor
          andere doeleinden dan hierboven beschreven.{"\n\n"}
          Door onze app te gebruiken, gaat u akkoord met de voorwaarden van ons privacybeleid.
          {"\n\n"}
          Als u vragen of zorgen heeft over ons privacybeleid, neem dan gerust contact met ons op
          via{" "}
          <Text
            style={{ color: "blue", textDecorationLine: "underline" }}
            onPress={() => Linking.openURL("mailto:visionswap@mosterman.net")}>
            visionswap@mosterman.net
          </Text>
          .{"\n"}
          {"\n"}
          <Text
            style={{
              fontWeight: "bold",
              fontStyle: "italic",
              textAlign: "center",
              color: "green",
            }}>
            Laatst bijgewerkt: 31 mei 2024{"\n"}
            {"\n"}
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPanel;
