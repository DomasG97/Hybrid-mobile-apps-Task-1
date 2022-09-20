import React, { useState } from "react"
import { View, Text, Button } from "react-native"

const MainView = () => {
  
  const [color1, setColor1] = useState("red")
  const [color2, setColor2] = useState("lightblue")
  const [color3, setColor3] = useState("orange")
  const [color4, setColor4] = useState("yellow")

  const [prevColor1, setPrevColor1] = useState()
  const [prevColor2, setPrevColor2] = useState()
  const [prevColor3, setPrevColor3] = useState()
  const [prevColor4, setPrevColor4] = useState()
  
  const changeColor1 = () => {
    if(color1 == "red"){
      setPrevColor1(color1)
      setColor1(randomColor)
    } else {
      setColor1(prevColor1)
    }
  }

  const changeColor2 = () => {
    if(color2 == "lightblue"){
      setPrevColor2(color2)
      setColor2(randomColor)
    } else {
      setColor2(prevColor2)
    }
  }

  const changeColor3 = () => {
    if(color3 == "orange"){
      setPrevColor3(color3)
      setColor3(randomColor)
    } else {
      setColor3(prevColor3)
    }
  }

  const changeColor4 = () => {
    if(color4 == "yellow"){
      setPrevColor4(color4)
      setColor4(randomColor)
    } else {
      setColor4(prevColor4)
    }
  }

  function randomColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
  }

  return (
    <View style={{flexDirection: "row", flex: 1}}>
      <View style={{backgroundColor: "gray", alignItems: "center", justifyContent: "space-evenly", width: '50%'}}>
        <Button onPress={changeColor1} title="Button1" color="green"/>
        <Button onPress={changeColor2} title="Button2" color="green"/>
        <Button onPress={changeColor3} title="Button3" color="green"/>
        <Button onPress={changeColor4} title="Button4" color="green"/>
      </View>
      <View style={{backgroundColor: "brown", alignItems: "center", justifyContent: "space-evenly", width: '50%'}}>
        <Text style={{backgroundColor: color1, padding: 20}}>Box1</Text>
        <Text style={{backgroundColor: color2, padding: 20}}>Box2</Text>
        <Text style={{backgroundColor: color3, padding: 20}}>Box3</Text>
        <Text style={{backgroundColor: color4, padding: 20}}>Box4</Text>
      </View>
    </View>
  )
}

export default MainView