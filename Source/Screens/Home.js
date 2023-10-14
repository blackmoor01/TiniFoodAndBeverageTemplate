import {View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {s} from 'react-native-wind';
import { MaterialCommunityIcons, Entypo, MaterialIcons} from '@expo/vector-icons';


const HomeScreen = () => {
    return(
        <ScrollView>
            <SafeAreaView>
                <View style={s `flex-1 flex-row ml-4 justify-between`}>

                    <View style={s `flex-row`}>
                        <MaterialCommunityIcons name="circle-half-full" size={45} color="skyblue" style={{transform: [{ rotate: '88deg' }],}} />
                        <View style={s `ml-2`}>
                            <Text>Welcome to</Text>
                            <Text style={s `font-bold`}>Sample restaurant</Text>
                        </View>
                    </View>

                    <View style={s `bg-gray-200 flex-row h-7 w-16 rounded-2xl justify-center mr-1 items-center justify-evenly`}>
                        <View>
                            <Entypo name="dots-three-horizontal" size={20} color={"gray"} />
                        </View>
                        <Text style={s `text-gray-500`}>|</Text>
                        <View>
                            <MaterialIcons name="cancel" size={20} color={"gray"} />
                        </View>
                    </View>

                </View>


                <View style={s `flex-row mt-4`}>

                    <View style={[s ` flex-row rounded-lg ml-2 flex-1 h-32 w-11/12 bg-blue-300`]}>
                        <View style={s `justify-center ml-3 justify-center`}>
                            <Text style={s `text-gray-300 ml-5 mb-1`}>20/04 - 06/09</Text>
                            <Text style={s `text-gray-200 ml-5 font-bold mb-1 text-xl`}>Special discount</Text>
                            <Text style={s `text-gray-300 ml-5 mb-1`}>69% 0ff all products</Text>
                        </View>
                        <View style={s `bg-white bg-cover ml-5 h-5/5 w-2/5 rounded-lg `}>
                            <Image source={require('../../assets/coffee.jpeg')} style={s `h-32 w-36 rounded-lg `}  />
                        </View>
                    </View>

                    <View style={[s ` ml-3 h-32 w-2  rounded-tl-lg rounded-bl-lg bg-lightBlue-300`]}/>

                </View>



                <View style={s `flex-row justify-evenly mt-4 mx-20`}>
                    <View style={[s ` h-1 w-10 rounded-lg bg-blue-300`]}/>
                    <View style={s `bg-gray-300 h-1 w-8 rounded-lg`}/>
                    <View style={s `bg-gray-300 h-1 w-8 rounded-lg`}/>
                    <View style={s `bg-gray-300 h-1 w-8 rounded-lg`}/>
                    <View style={s `bg-gray-300 h-1 w-8 rounded-lg`}/>
                </View>



                <View style={[s `ml-2 bg-white h-40 justify-between p-1 w-11/12 rounded-lg mr-2 mt-4`,styles.shadow]}>

                    <View style={s `flex-row justify-between mx-4`}>
                        <Image source={require('../../assets/store.jpeg')} style={s `h-24 rounded-lg w-28`} />
                        <Image source={require('../../assets/motorbike.png')} style={s `h-24 w-40 rounded-lg`} />
                    </View>

                    <View style={s `flex-row justify-between mx-2`}>
                        <Text style={s `font-bold text-gray-500 text-lg`}>Store pickup</Text>
                        <Text style={s `ml-4 font-bold text-gray-500 text-lg mr-12`}>Delivery</Text>
                    </View>

                    <View style={s `flex-row justify-between mx-5`}>
                        <Text style={s `text-gray-500`}>Best quality</Text>
                        <Text style={s `mr-7 text-gray-500`}>Always on time</Text>
                    </View>

                </View>


                <View style={s `mr-4`}>

                    <View style={[s `bg-white h-42 w-full rounded-lg ml-2 mt-4 p-2`,styles.shadow]} >
                        <View style={s `flex-row mt-4 `}>
                            <View>
                                <Text style={s `ml-4 text-gray-500 font-bold text-lg`}>Online reservation</Text>
                                <Text style={s `ml-4 text-gray-500`}>Table booking</Text>
                            </View>
                            <View style={s `ml-5 h-24 w-2/5`}>
                                <Image source={require('../../assets/ReservatioTable.jpg')} style={s `rounded-lg h-20 w-36`}/>
                            </View>
                        </View>

                        <View style={[s `flex-row justify-evenly`]}>
                            <TouchableOpacity>
                                <View style={[s `border-2  h-12 w-36 rounded-3xl`,{borderColor:styles.primary.color}]}>
                                    <View style={s `items-center mt-3`}>
                                        <View style={s `flex-row`}>
                                            <MaterialIcons name="event-note" size={20} color={"#1a94ff"} />
                                            <Text style={{color:styles.primary.color}}>Reserve a table</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={[s `border-2 h-12 w-36 rounded-3xl`,{borderColor:styles.primary.color}]}>
                                    <View style={s `items-center mt-3`}>
                                        <Text style={{color:styles.primary.color}}>My reservations</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>


                <Text style={s `font-bold ml-2 mt-2`}>Promotion campaign</Text>



                <View style={s `flex-row justify-evenly mt-2 `}>
                    <View>
                        <ImageBackground source={require('../../assets/Paperbag.jpeg')} style={s `h-44 w-44 rounded-xl overflow-hidden`}>
                            <View style={s `items-center ml-28 mt-5`}>
                                <View style={s `bg-blue-300 rounded-full h-12 w-12`}>
                                    <Text style={s ` mt-5 text-center text-white`}>-20%</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View>
                        <ImageBackground source={require('../../assets/sachet.jpeg')} style={s `h-44 w-44 rounded-xl overflow-hidden`}>
                            <View style={s `items-center ml-28 mt-5`}>
                                <View style={s `bg-blue-300 rounded-full h-12 w-12`}>
                                    <Text style={s ` mt-5 text-center text-white`}>-20%</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>



                <View style={s `flex-row justify-evenly mt-2 mb-4`}>

                    <View>
                        <Text style={s `font-bold ml-2 text-gray-600 px-3 mr-8`}>Discount all Excelsa</Text>
                        <Text style={s `font-bold ml-2 text-gray-600 px-3 mr-8`}>20% in all stores</Text>
                        <Text style={s `font-bold ml-2 text-gray-300 px-3 text-xs mr-8`}>20/04/20 - 06/09/2020</Text>
                    </View>
                    <View>
                        <Text style={s `font-bold ml-2 text-gray-600 px-3 mr-7`}>Discount all Liberica</Text>
                        <Text style={s `font-bold ml-2 text-gray-600 px-3 mr-8`}>20% in all stores</Text>
                        <Text style={s `font-bold ml-2 text-gray-300 px-3 text-xs mr-8`}>20/04/20 - 06/09/2020</Text>
                    </View>

                </View>




                <View style={s `flex-row justify-evenly mt-2 `}>

                    <View>
                        <ImageBackground source={require('../../assets/cup.jpeg')} style={s `h-44 w-44 rounded-xl overflow-hidden`}>
                            <View style={s `items-center ml-28 mt-5`}>
                                <View style={s `bg-blue-300 rounded-full h-12 w-12`}>
                                    <Text style={s ` mt-5 text-center text-white`}>-20%</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <View>
                        <ImageBackground source={require('../../assets/mockup.jpeg')} style={s `h-44 w-44 rounded-xl overflow-hidden`}>
                            <View style={s `items-center ml-28 mt-5`}>
                                <View style={[s `rounded-full h-12 w-12 bg-blue-300`]}>
                                    <Text style={s ` mt-5 text-center text-white`}>-20%</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                </View>



            </SafeAreaView>
        </ScrollView>
    )
};

export default HomeScreen;

const styles={
    primary:{
        backgroundColor:"#1a94ff",
        color:"#1a94ff"
    },

    shadow:{
        elevation:15
    },
}