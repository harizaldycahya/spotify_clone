import { Cards } from "../comp/cards";
import { Footer } from "../comp/footer";
import Header from "../comp/header";
import List from "../comp/list";
import { Player } from "../comp/player";
import { Sidebar } from "../comp/sidebar";
import {motion} from 'framer-motion';

export const getStaticPaths = async() =>{
    const res = await fetch('http://localhost:8000/playlists');
    const data = await res.json();
    const paths = data.map(playlists => {
        return {
            params:{ slug: playlists.slug.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}
export const getStaticProps = async(context) =>{
    // Single Playlist
    const slug = context.params.slug;
    const res = await fetch('http://localhost:8000/playlists/'+slug);
    const data = await res.json();
    // All Playlist
    const res2 = await fetch("http://localhost:8000/playlists");
    const data2 = await res2.json();
    return {
        props:{playlist:data, playlists:data2}
    }
}

export default function Slug(props){
    const color = props.playlist.color;
    const animate = {
        rest : {y:3, opacity:0},
        hover: {y:0, opacity:1}
    }
    return(
        <>
        <Player></Player>
        <Sidebar></Sidebar>
        <div className="main bg2" style={{
            backgroundImage: '-webkit-gradient(linear, 0 0, 0 100%, from('+ color +'), to(transparent))',
            backgroundImage: '-webkit-linear-gradient(top, '+ color +', transparent)',
            backgroundImage: '-moz-linear-gradient(top, '+ color +', transparent)',
            backgroundImage: '-o-linear-gradient(top, '+ color +', transparent)',
            backgroundImage: 'linear-gradient(to bottom, '+ color +', transparent)'
        }}>
            {props && <Header playlist={props.playlist}></Header>}
            <List></List>
            {props && <Cards title="Nostalgia" playlists={props.playlists}></Cards>}
            <Footer></Footer>
        </div>
        </>
    )
}