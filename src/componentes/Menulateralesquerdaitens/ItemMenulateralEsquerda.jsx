import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoMdCompass } from 'react-icons/io';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdAddCircle } from 'react-icons/md';
import { CgMenu } from 'react-icons/cg';
import ft from '../../imagens/Spider_men.jpeg';
import Logo from  '../../imagens/logo.png';
export default function MenulateralEsqueda() {
    return ( 
        <div className=''>

<div className='Logo'><img src={Logo} ></img></div> 

        <ul className="spaced-list">
            <li>
                <div className='teste'>
                    <AiFillHome size={30} /> <p>Página inicial</p>
                </div>
            </li>
            <li>
                <div className='teste'>
                    <HiOutlineSearch size={30} /><p>Pesquisa </p>
                </div>
            </li>
            <li>
                <div className='teste'>
                    <IoMdCompass size={30} /><p>Explorar</p>
                </div>
            </li>
            <li>
                <div className='teste'>
                    <BiSolidMoviePlay size={30} /><p> Reels</p>
                </div>
            </li>
            <li>
                <div className='teste'>
                    <IoChatbubbleEllipsesOutline size={30} /><p>Mensagens</p>
                </div>
            </li>
            <li>
                <div className='teste'>
                    <AiOutlineHeart size={30} /><p>Notificações</p>
                </div>
            </li>
            <li>
                <div className='teste'>
                    <MdAddCircle size={30} /><p>Criar</p>
                </div>
            </li>
            <li>
                <div className='teste'>
                    <div className='imgPerfil'>
                        <img src={ft} style={{ marginRight: '10px' }}></img> <p>Perfil</p>
                    </div>
                </div>
            </li>
            <li >
                <div className='footer'>
                    <div className='arroba'> @ </div>  <p>Threds</p>

                </div>

            </li>
            <li>
                <div className='teste'>
                    <CgMenu size={30} /> <p> Mais</p>
                </div>
            </li>
        </ul>
        </div>

    );
}
