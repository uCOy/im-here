import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react'
import { Participant } from '../components/Participant/';
import { styles } from './styles';

export function Home() {
  // const participantes = ["Eu"]

  const [participants, setParticipants] = useState<string[]>([])

  const[participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes("Richard")){
      return Alert.alert("Participante existe", 
      "Já existe um participante na lista com esse nome")
    }
    // participantes.push('Ana');
    // console.log(participantes);
    // setParticipantes(['Ana'])
    // console.log('Clicou no botão +')
    // ['Eu'] => ['Ana']
    // prevState = conteúdo atual do estado
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('');
    // ['Eu'] => ['Eu', 'Ana']
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name} ?`, [
      {
        text:'Sim',
        onPress: () => Alert.alert("Participante deletado!")
      },
      {
        text:'Não',
        style:'cancel'
      },
    ])
    // console.log(`Você Removeu Participante ${name}`)
  }
    return (
      <View style={styles.container}>
        <Text style={styles.eventName}>
            Nome do evento
        </Text>
        <Text style={styles.eventDate}>
            Sexta, 4 de Novembro de 2022.
        </Text>

        <View style={styles.form}>
          <TextInput 
            placeholder='Nome do Participante'
            style={styles.input}
            placeholderTextColor="#6B6B6B"
            onChangeText={setParticipantName}
            value={participantName}
            // keyboardType='numeric'
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={handleParticipantAdd}
          >
            <Text 
              style={styles.buttonText}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
          participants.map(participants => (
            <Participant 
              key={participants} name={participants} onRemove={() => handleParticipantRemove(participants)}/>
          ))
          }        
        </ScrollView>
      </View>
    );
}