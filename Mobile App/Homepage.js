import{ 
     Text,
     TextInput,
     View,
     Pressable,
     Image,
     Linking 
    } from "react-native";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, onValue, get } from "firebase/database";
import { useEffect, useState, useRef, useCallback} from "react";
import SelectDropdown from "react-native-select-dropdown";
import Swiper from 'react-native-deck-swiper';
import { styles } from './global.styles'


export default function Homepage() {

    //firebase stuff
    const firebaseConfig = {
        apiKey: "AIzaSyAHQhCz26Et5hv21rekZrPc2mX8HQ4rYl0",
        authDomain: "bitebutler-e193b.firebaseapp.com",
        databaseURL: "https://bitebutler-e193b-default-rtdb.firebaseio.com",
        projectId: "bitebutler-e193b",
        storageBucket: "bitebutler-e193b.appspot.com",
        messagingSenderId: "634777165339",
        appId: "1:634777165339:web:27d1d7f091878094c062be",
        measurementId: "G-L5NVHNEY8M"
      };
      
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const itemRef = ref(database, 'restaurants/');

    //vars for header
    const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    const [state, setLocationState] = useState("");
    const [city, setLocationCity] = useState("");
    const [itemsArray, setItemsArray] = useState([]);
    const [dropdownValue, setDropDown] = useState('');

    const handleCity = (text) => {
        setLocationCity(text);
        console.log(text);
    }

    //writes the data
    const writeUserData = (city, state) => {
        set(ref(database, 'locations/'), {
            city: city,
            state: state
        });
    }

    //gets the data
    const getData = async () => {
        try {
            await get(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                let data = snapshot.val();
                setItemsArray(Object.values(data));
                console.log(data)
                return;
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
        });
        } catch (error) {
          console.error(error);
        }
    }


    //card deck stuff
    useEffect(() => {
        setLocationState(dropdownValue);
    }, [dropdownValue])

    const useSwiper = useRef(null).current


    const onSwiped = (type, index) => {
        if (type === 'right') {
            // makeUrl(index);
            const plus = "+"
            const url = encodeURI(city+plus+state+plus+itemsArray[index].name);
            console.log("converted: " + url);
            Linking.openURL("https://www.google.com/maps/search/?api=1&query=" + url);
        }
    }

    const makeUrl = (index) => {
        console.log(state)
        const url = encodeURIComponent(city+state+itemsArray[index].name);
        console.log(url);
        setUrl(url);
    }

    //renders card
    const renderCard = (card, index) => {
        return (
          <View style={styles.card}>
            <Image
                style={{width: '100%', height: 200}}
                source={{uri: card.image_url}}
                resizeMode="cover"
            />
            <Text style={styles.text}>Name: {card.name}</Text>
            <Text style={styles.text}>The Bite Score: {card.score}</Text>
          </View>
        )
      };
    
    return (
    <View style={styles.container}>
        <View>
        <TextInput
            style={styles.input}
            onChangeText={handleCity}
            placeholder="Enter City"
        />
        <SelectDropdown
            defaultButtonText="Select a state"
            buttonTextStyle={{
                color: 'gray'
            }}
            buttonStyle={styles.dropdown}
            data={states}
            searchPlaceHolder="Select a state"
            onSelect={(selectedItem, index) => {
                
                return selectedItem
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                setDropDown(selectedItem)
                return selectedItem
            }}
        />
        <Pressable style={styles.button} onPress={writeUserData(city, state)}>
            <Text style={styles.text}>Enter Location</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={getData}>
            <Text style={styles.text}>Get Restaurants</Text>
        </Pressable>
        </View>
            {
                itemsArray.length > 0 &&
                <View style={styles.cardContainer}>
                <Swiper
                    ref={useSwiper}
                    onSwiped={(index) => onSwiped('general', index)}
                    onSwipedLeft={(index) => onSwiped('left', index)}
                    onSwipedRight={(index) => onSwiped('right', index)}
                    onSwipedTop={() => onSwiped('top')}
                    onSwipedBottom={() => onSwiped('bottom')}
                    cards={itemsArray}
                    cardIndex={0}
                    cardVerticalMargin={80}
                    renderCard={renderCard}
                    stackSize={3}
                    stackSeparation={15}
                    overlayLabels={{
                    bottom: {
                        title: 'BLEAH',
                        style: {
                        label: {
                            backgroundColor: 'black',
                            borderColor: 'black',
                            color: 'white',
                            borderWidth: 1
                        },
                        wrapper: {
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }
                        }
                    },
                    left: {
                        title: 'NOPE',
                        style: {
                        label: {
                            backgroundColor: 'black',
                            borderColor: 'black',
                            color: 'white',
                            borderWidth: 1
                        },
                        wrapper: {
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-start',
                            marginTop: 30,
                            marginLeft: -30
                        }
                        }
                    },
                    right: {
                        title: 'LIKE',
                        style: {
                        label: {
                            backgroundColor: 'black',
                            borderColor: 'black',
                            color: 'white',
                            borderWidth: 1
                        },
                        wrapper: {
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            marginTop: 30,
                            marginLeft: 30
                        }
                        }
                    },
                    top: {
                        title: 'SUPER LIKE',
                        style: {
                        label: {
                            backgroundColor: 'black',
                            borderColor: 'black',
                            color: 'white',
                            borderWidth: 1
                        },
                        wrapper: {
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }
                        }
                    }
                    }}
                animateOverlayLabelsOpacity
                animateCardOpacity
            />
            </View>
            }
      </View>
    );
}

