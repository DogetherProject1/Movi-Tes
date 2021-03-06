import React, {useState} from 'react';
import styled from '@emotion/native';
import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';

const Container = styled(View)`
  /* width: 45%; */
  /* elevation: 2; */
  /* border-width: 1px; */
  /* justify-content: center; */
  /* border-radius: 10px; */
  /* border: 1px solid black; */
`;

const Wrapper = styled(View)`
  width: 100%;
  margin-right: 33px;
  /* padding-top: 5px; */
  background-color: #222222;
  /* border: 1px solid white; */
  border-radius: 10px;
  /* border-right-width: 0.2; */
`;

export default function CategoryPicker(props) {
  // console.log({place});

  return (
    <Wrapper>
      <View style={{marginTop: 5, marginLeft: 15}}>
        <Text style={{color: 'white', alignItems: 'center', fontSize: 16}}>
          μ₯λ₯΄
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        {/* <Text style={{color:'white'}}> μ₯λ₯΄ </Text> */}
      </View>
      <Container>
        <Picker
          selectedValue={props.place}
          onValueChange={value => props.setPlace(value)}
          // dropdownIconColor='blue'
          mode="dialog"
          style={{borderWidth: 1, borderStyle: 'dashed', color: 'white'}}
          dropdownIconColor="white">
          <Picker.Item label="π₯°  λ‘λ§¨μ€ & λ©λ‘" value="π₯°  λ‘λ§¨μ€ & λ©λ‘" />
          <Picker.Item label="π€¨  μ‘μ & μ€λ¦΄λ¬" value="π€¨  μ‘μ & μ€λ¦΄λ¬" />
          <Picker.Item label="π±  κ³΅ν¬ & νΈλ¬" value="π±  κ³΅ν¬ & νΈλ¬" />
          <Picker.Item label="π€©  SF & ννμ§" value="π€©  SF & ννμ§" />
          <Picker.Item label="π©π»ββ€οΈβπβπ¨π»  μ±μΈ" value="π©π»ββ€οΈβπβπ¨π»  μ±μΈ" />
        </Picker>
      </Container>
    </Wrapper>
  );
}
