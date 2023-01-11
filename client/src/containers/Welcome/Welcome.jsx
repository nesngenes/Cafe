import React from 'react'

import './welcome.css'

import { images } from '../../constants'

const Welcome = () => {
  return (
    <div className='welcome container'>
        <h1 className='green-dancing-script center'>Welcome</h1>
        <div className='welcome-content'>
            <img src={images.welcome} />
            <div className='welcome-text'>
            <h1 className='heading'><span className='green'>La</span>buena Cafe</h1>
            <p>LaBuena Cafe è stata fondata nel 2026 da Agnes Maria Angelina (halu). Il nome LaBuena è tratto dalla frase LaBuena Vida che significa una vita migliore che è un pezzo del testo della canzone Labuena Vida della cantante Camila Cabello. Il motivo per scegliere questo nome è perché il proprietario è un grande fan di Camila Cabello oh mio Dio lei è arghh davvero non so perché mi piace
davvero così.</p>

            <p>Ragazzi, sapete Gas, io sono piccolo da quando non sapevo perché il mio sogno fosse quello di avere un ristorante T_T. Non so perché voglio solo che mi piaccia. io
Voglio ancora avere una carriera e studiare per sempre nel campo dell'informatica, ma voglio anche avere un ristorante. Possano i miei sogni diventare realtà Amen.</p>

            <p>
Sono anche spesso imbarazzato così, posso esibirmi cantando in un ristorante estetico.
Voglio davvero imprecare, indossare un vestito casual e voglio farmi i capelli lunghi.
conosci sorellina? Se la gente dice che la mia voce è buona, ragazzi. Inoltre ho sempre voluto essere una cantante, in realtà non sono una cantante ma è come cantare per strada o in un bar. Ma ho l'acidità di stomaco, ragazzi :(
Se hai l'acidità di stomaco, ti sentirai nauseato, quindi temo che quando canto, l'acidità di stomaco si ripresenterà, è brutto. Al momento giusto, quando canto, mi viene la nausea, chi ha clienti scappa, aiish.</p>

        <p>Eh, sai perché ho aggiunto anche l'arancia? Perché anch'io voglio davvero avere un albero di arance, sai. È semplicemente bellissimo, proprio così, aranci, aranci, così freschi, davvero freschi e belli da vedere. Ma non so se non posso piantare aranci a Bekasi, per esempio.</p>

        <p>Mi dispiace, non so proprio cosa compilare in questa sezione, volevo che questo post fosse così lungo, ma sono confuso su come riempirlo. Quindi inserisco questa storia non necessaria in modo che sia lunga.</p>

        <p>
Una confortevole atmosfera da bar può farti sentire a casa e felice
per venire qui. Il caffè LaBuena è un caffè con un concetto
il verde permette ai clienti di poter sentire l'atmosfera fresca
come in natura.</p>

        <p>Accoppiato con l'esistenza di servizi wifi gratuiti
che ti consente di poter accedere liberamente a Internet
per lavoro, studio o divertimento.</p>

        <p>Il sabato sera c'è un pianista professionista con jazz e musica
classico per accompagnarti. Guarderai lo spettacolo
elegante e straordinario di loro.</p>
        </div>
        </div>
        
    </div>
  )
}

export default Welcome