import React from 'react';
import ft from '../../imagens/Spider_men.jpeg';
import ftFeed from '../../imagens/spider_nigga.jpeg';
import { AiOutlineHeart} from 'react-icons/ai'
import { FaRegComment} from 'react-icons/fa'
import {BsSend } from 'react-icons/bs'
import {BiBookmark  } from 'react-icons/bi'
import ft1 from '../../imagens/bmw1.jpeg';
import ftFeed1 from '../../imagens/carro.jpeg';
import ft2 from '../../imagens/alan.jpeg';
import ftFeed2 from '../../imagens/logo.playy.jpeg';

export default function Conteudocentral() {
    return (
<>

        <div className="Feed">
                <header className='Perfilpost'>
                    <img src={ft}></img> 
                    <p>Peter_park • 1 d</p>
                </header>
                <div className='ftfeed'style={{ textAlign: 'center' }} >
                    <img src={ftFeed}style={{ maxWidth: '100%' }}alt="" />
                </div>
                <footer className='isconsfeed'>  
                    <ul className='list-incons'>
                        <AiOutlineHeart size={50}/>
                        <FaRegComment size={45}/>
                        <BsSend size={40}/>
                        <li><BiBookmark size={30}/></li>
                    </ul>
                </footer>
                    <div className='Likes'>
                        <p>curtido por <strong>MJ_007.. e outras pessoas</strong></p>
                    </div>
                    <div className='comentario'>
                        <p>Curtindo o dia sem crimes pela</p>
                        
                    </div>

                <header className='Perfilpost'>
                    <img src={ft1}></img> 
                    <p>BMW • 1 d</p>
                </header>
                <div className='ftfeed1'style={{ textAlign: 'center' }} >
                    <img src={ftFeed1}style={{ maxWidth: '100%' }} alt="" />
                </div>
                <footer className='isconsfeed'>  
                    <ul className='list-incons'>
                        <AiOutlineHeart size={50}/>
                        <FaRegComment size={50}/>
                        <BsSend size={50}/>
                        <li><BiBookmark size={30}/></li>
                    </ul>
                </footer>
                    <div className='Likes'>
                        <p>curtido por <strong>volvo_5.. e outras pessoas</strong></p>
                    </div>
                    <div className='comentario'>
                        <p>Novo carro BMW...</p>
                    </div>


                    <header className='Perfilpost'>
                    <img src={ft2}></img> 
                    <p>Alanzoka • 1 d</p>
                </header>
                <div className='ftfeed1'style={{ textAlign: 'center' }} >
                    <img src={ftFeed2}style={{ maxWidth: '100%' }} alt="" />
                </div>
                <footer className='isconsfeed'>  
                    <ul className='list-incons'>
                        <AiOutlineHeart size={50}/>
                        <FaRegComment size={50}/>
                        <BsSend size={50}/>
                        <li><BiBookmark size={30}/></li>
                    </ul>
                </footer>
                    <div className='Likes'>
                        <p>curtido por <strong>MJ_007.. e outras pessoas</strong></p>
                    </div>
                    <div className='comentario'>
                        <p>Agora eu trabalho para eles...</p>
                    </div>

                    
                    </div>
    
</>

);}
