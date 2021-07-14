import React,{Component} from "react"
import { Box, SectionList, Center, NativeBaseProvider,View,IconButton,Icon,Input,Button } from "native-base"
import {TouchableOpacity,Text} from 'react-native';
import { AntDesign } from "@expo/vector-icons"
const data = [
    {
      title: "Section 1",
      data: [],
    },
  ]
class Example extends Component{
  constructor(){
    super()
    this.state={
      data:data,
      action:false,
      index:0,
      text:"",
    }
  }
  addSection=()=>{
    var test=this.state.data;
    var count=parseInt(this.state.data.length)+1;
    var testx={title:"Section "+count,
    data:[]}
    test.push(testx)
    this.setState({data:test})
  }
  model=(actionV,index)=>{
  var count=this.state.data.length;
  var i=0;
  while(i<=count){
    if(this.state.data[i].title==index){
    this.setState({index:i,action:actionV})
    }
    i=i+1;
  }
  }
  addLecture=(actionV)=>{
    this.setState({action:actionV})
    var test=this.state.data;
    var data=test[this.state.index].data;
    data.push(this.state.text)
    test[this.state.index].data=data;
    this.setState({data:test})
  }
  handleIndex = (text) => {
      this.setState({ text: text })
   }
  render(){
  return (
    <View>
    {this.state.action==true?
    <View style={{position:"absloue",alignItems:"center",justifyContent:"center",   width:"100%",height:"100%"}}>
    <Input mx={3} placeholder="Lecture Name" onChangeText = {this.handleIndex}/>
    <Button style={{marginTop:12}} onPress={() => this.addLecture(false)}>Save Lecture</Button>
    </View>:null}
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <Box px={5} py={2} rounded="md" my={2} bg="secondary.200">
        {item}
        </Box>
      )}
      renderSectionHeader={({ section: { title,index } }) => (
        <TouchableOpacity
        onPress={()=>{this.model(true,title)}}>
        <Box
          px={5}
          py={2}
          rounded="md"
          my={2}
          bg="primary.200"
          _text={{
            fontWeight: "bold",
          }}
        >
          {title}
          <Text>
          Click To Add Sub Data
          </Text>
        </Box>
        </TouchableOpacity>
      )}
    />
    {this.state.action==false?
     <IconButton
     onPress={()=>{this.addSection()}}
     style={{backgroundColor:"blue"}}
      variant="solid"
      icon={<Icon size="md" as={<AntDesign name="plus" />} color="white" />}
    />:null}
    </View>
  )
}
}
export default class App extends Component {
  render(){
  return (
    <NativeBaseProvider>
        <Example />
    </NativeBaseProvider>
  )
  }
}
