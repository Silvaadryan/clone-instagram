import Conteudocentral from "./Conteudocentral";
import Story from './Story';
export default function Menuprincipal() {
    return (
        <>

            <div className=" Conteudocentral">
                <div className="story">
                    <Story/>

                </div>

                <div className="Feed">

                    <Conteudocentral />
                    

                </div>
            </div>
            
        </>

    )
}