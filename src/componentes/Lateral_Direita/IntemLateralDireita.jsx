import React from 'react';

import ft from '../../imagens/Spider_men.jpeg';
import ft1 from '../../imagens/bayk.jpeg';
import ft2 from '../../imagens/kratos.jpeg';
import ft3 from '../../imagens/nintendo.jpeg';
/* import ft from '../../imagens/Spider_men.jpeg'; */
export default function MenulateralDireita() {
    return (
        <>

            <div className='sugestão'>
                <div className='imgPerfil2'>
                    <img src={ft} style={{ marginRight: '10px', width: "3vw" }}></img> <p>Peter_parker</p>
                    <div className='seguir'>
                        <button className='seguir'>Mudar</button>
                    </div>
                </div>
            </div>


            <div className='tittle'>
                <p>Sugestão para você</p>
            </div>
            {/* sugestões começa aqui */}
            <div className='sugestões'>
                <div className='imgPerfil3'>
                    <img src={ft1} style={{ marginRight: '10px', width: "3vw" }}></img> <p>Bayek_de_Siuá</p>
                    <div className='seguir'>
                        <button className='seguir'>Seguir</button>
                    </div>
                </div>
                <div className='new'>
                    <p>Novo no instagram</p>
                </div>



                <div className='imgPerfil3'>
                    <img src={ft2} style={{ marginRight: '10px', width: "3vw" }}></img> <p>Kratos_007_ps</p>
                    <div className='seguir'>
                        <button className='seguir'>Seguir</button>
                    </div>
                </div>

                <div className='imgPerfil3'>
                    <img src={ft3} style={{ marginRight: '10px', width: "3vw" }}></img> <p>Nintendo_777</p>
                    <div className='seguir'>
                        <button className='seguir'>Seguir</button>
                    </div>
                </div>

            </div>

            <div className='sobre'>Sobre
                Ajuda
                Imprensa
                API
                Carreiras
                Privacidade
                Termos
                Localizações
                Idioma
                Meta Verified <br /><br />
                © 2023 INSTAGRAM FROM META

            </div>
        </>

    );
}









