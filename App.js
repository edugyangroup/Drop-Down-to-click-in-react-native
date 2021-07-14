import React from "react"
import { Input, Button, Center, NativeBaseProvider,View,Text } from "native-base"
export const Example = () => {
  const [show, setShow] = React.useState("")
  const [array, setArray] = React.useState([2,3,10,15,26,35,50,63])
  const [value, setValue] = React.useState()
  const handleClick = () =>{
    var count=parseInt(array.length);
    var index=parseInt(array[value]);
    if(count>index){
     setShow(array[value])
    }
    else{
      alert("Enter Correct Index")
    }
  }
   const handleChange = (event) => setValue(event.target.value)
  return (
    <View>
    <Text> Search Element Is :{show}</Text>
    <Input
    onChange={handleChange}
      InputRightElement={
        <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
          Search
        </Button>
      }
      placeholder="Index"
    />
    </View>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
