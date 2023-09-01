import { getDatabase, ref, onValue} from "firebase/database";
import database from './Header';


const readUserData = () => {
    database.ref('Restaurants/').once('value', function (snapshot) {
        console.log(snapshot.valu());
    })
}

const starCountRef = ref(database, 'restaurants/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        updateStarCount(postElement, data);
    }
);