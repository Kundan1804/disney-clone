import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { onSnapshot, query ,collection } from "firebase/firestore";


const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisney = [];
    let original = [];
    let trending = [];
    
    useEffect(() => {
        const colref = collection(db, 'movies')
        const q = query(colref);
        onSnapshot(q, snapshot =>(
            snapshot.docs.map((doc) =>{
                // if(doc.data().type=='recommend') {
                //     recommends = [...recommends, { id: doc.id, ...doc.data() }];
                // }
                // if(doc.data().type=='new') {
                //     newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                //     console.log(doc.data().title);
                // }
                // if(doc.data().type=='original') {
                //     originals = [...originals, { id: doc.id, ...doc.data() }];
                // }
                // if(doc.data().type=='trending') {
                //     trendings = [...trendings, { id: doc.id, ...doc.data() }];
                // }
                switch(doc.data().type) {
                    
                    
                                case "recommend":
                                    recommends = [...recommends, { id: doc.id, ...doc.data() }];
                                    break;
            
                                case "new":
                                    newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
                                    break;
            
                                case "original":
                                    original = [...original, { id: doc.id, ...doc.data() }];
                                    break;
            
                                case "trending":
                                    trending = [...trending, { id: doc.id, ...doc.data() }];
                                    break;
                            }
                dispatch(
                    setMovies({
                        recommend: recommends,
                        newDisney: newDisney,
                        original: original,
                        trending: trending,
                    })
                );

            } )
        ))
        // db.collection('movies').onSnapshot((snapshot) => {
        //     snapshot.docs.map((doc) => {
        //         switch(doc.data().type) {
        //             case "recommend":
        //                 recommends = [...recommends, { id: doc.id, ...doc.data() }];
        //                 break;

        //             case "new":
        //                 newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
        //                 break;

        //             case "original":
        //                 originals = [...originals, { id: doc.id, ...doc.data() }];
        //                 break;

        //             case "trending":
        //                 trending = [...trending, { id: doc.id, ...doc.data() }];
        //                 break;
        //         }
        //     });

        //     dispatch(
        //         setMovies({
        //             recommend: recommends,
        //             newDisney: newDisney,
        //             original: originals,
        //             trending: trending,
        //         })
        //     );
        // });
    }, [userName]);

    return(
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
    background: url("/images/home-background.png")
      center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
    }
`;

export default Home;