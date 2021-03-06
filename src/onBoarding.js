import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Dimensions, Text, Button, ImageBackground} from 'react-native';
import {welcome, welcome2} from './assets/images';
const OnBoarding = () => {
  
  const [log,setlog] = useState(0);
  const [scrollRef, setScrollRef] = useState(null);
  const [pageNumber,setPageNumber] = useState(1);

  const scrollHandler = (event) => {

    let CurrentPage ;
    const scrollViewAbscissa = parseInt(event.nativeEvent.contentOffset.x);  
    const width = parseInt(Dimensions.get("window").width);
    setlog(scrollViewAbscissa);
    let remain = scrollViewAbscissa % width;
    if(remain<1){
      CurrentPage = parseInt(scrollViewAbscissa / width)+1;
    if(pageNumber!==CurrentPage){
      setPageNumber(CurrentPage);}

  }}

  const goNext = () =>{
    scrollRef.scrollTo({
      x:Dimensions.get('window').width*pageNumber,
      y:0,
      animated:true
    })
  }
  const ListBoarding =
  [
    {id:1,name:"it Works",img:welcome},
    {id:2,name:"Nicely :D",img:welcome2},
    {id:3,name:"Done ;)",img:welcome}]
  return(
    <View
    style={styles.container}
    >
      <Text>Scroll Index: {log}</Text>
    <ScrollView
    onScroll={scrollHandler}
    ref={ref=>setScrollRef(ref)}
    style={styles.Scrollcontainer}
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    > 
   {ListBoarding.map(obj=>{
     return(
     <ImageBackground
     source={obj.img}
     key={obj.id}
     style={styles.box}>
       
       <Text>Page number {pageNumber}</Text>
      <Text>{obj.name}</Text>
      
    <Button title={'Next'} onPress={()=>goNext()} />
     </ImageBackground>
     )
   })}
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
    alignItems:'center',
  }, 
  Scrollcontainer:{
    flex:1,
    alignContent:'center',
  },
  box:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    width:Dimensions.get('window').width,
    backgroundColor:"#dedefe",

  }
})
export default OnBoarding;
