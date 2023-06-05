import { createStore } from 'vuex'
import app from "@/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  snapshotEqual,
  updateDoc,
  where,
} from "firebase/firestore";
import { ref, onValue, getDatabase } from "firebase/database";

const db = getFirestore(app);
const database = getDatabase();


// Create a new store instance.
const store = createStore({
  state: {
    selectedBlogue: '',
    photos: [],
    homeCarousel: [],
    aboutCarousel: [],
    mixteCarousel: [],
    mazoutPhotos:[]
  },
  mutations: {
    SET_SelectedBlogue: (state: any, href: Object) => (state.selectedBlogue = href),
    SET_Photos: (state:any , photos: {
      id:Number,
      url:string,
      page?:string
    }) => {
      console.log(photos.page);
      
      if(photos.page === 'home'){
        delete photos.page
        state.homeCarousel = photos
      }else if(photos.page === 'about'){
        delete photos.page
        state.aboutCarousel = photos
      }else if(photos.page === 'mixte'){
        delete photos.page
        state.mixteCarousel = photos
      }else if(photos.page === 'mazout'){
        delete photos.page
        state.mazoutPhotos = photos
      }else{
        delete photos.page
        state.photos = photos
      }
    },
  },
  actions: {
    GET_SelectedBlogue({ commit }, href: Object) {
      commit('SET_SelectedBlogue', href)
    },
    async GET_PagePhotos({commit,state}, photos:{
      page: String,
      db:string,
    }){
      const idsCollectionName = "usedPhotos";
      const photosCollectionName = "photos";
      const idFieldName = "id";
      const photosFieldName = "photos";
    
      let photosWithMatchingIds:any = [];

      // Get the IDs document
      const idsRef = doc(db, idsCollectionName, photos.db)
      const idsSnap = await getDoc(idsRef);
      
    

      const idsQuery = query(collection(db, idsCollectionName));
      const idsSnapshot = await getDocs(idsQuery);
    
      const idsList = idsSnap.data()?.ids;

          
      // Get the photos document
      const photosQuery = query(collection(db, photosCollectionName));
      const photosSnapshot = await getDocs(photosQuery);
    
      // Subscribe to changes in the IDs document (if needed)
      const unsubscribe = onSnapshot(idsRef, (snapshot) => {
        const updatedIdsList = snapshot.data()?.ids;
        console.log(updatedIdsList);
        
        // Update the idsList or perform any necessary actions with the updated IDs list
        photosWithMatchingIds = []
        photosSnapshot.forEach((doc) => {
          if (updatedIdsList.includes(doc.data()[idFieldName])) {
              
              photosWithMatchingIds.push((doc.data()))
              }

        });
        console.log(photos.page);
        
        commit("SET_Photos",{...photosWithMatchingIds,page:photos.page}, )
      });


    }
    

  }
})

export default store
