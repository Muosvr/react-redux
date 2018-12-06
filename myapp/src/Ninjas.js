import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
    //method 1
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20){
    //         return (
    //             <div className="ninja" key={ ninja.id }>
    //                 <div>Name: { ninja.name }</div>
    //                 <div>Age: { ninja.age }</div>
    //                 <div>Belt: { ninja.belt }</div>
    //             </div>
    //         )
    //     }else{
    //         return (null)
    //     }
    // })

    //method 2
    // const ninjaList = ninjas.map(ninja => {
    //     return ninja.age > 20 ? (
    //         <div className="ninja" key={ ninja.id }>
    //             <div>Name: { ninja.name }</div>
    //             <div>Age: { ninja.age }</div>
    //             <div>Belt: { ninja.belt }</div>
    //        </div>
    //     ): null;
    // })
        
    return(
        ninjas.map(ninja => {
                return ninja.age > 20 ? (
                    <div className="ninja" key={ ninja.id }>
                        <div>Name: { ninja.name }</div>
                        <div>Age: { ninja.age }</div>
                        <div>Belt: { ninja.belt }</div>
                        <button onClick={() => deleteNinja(ninja.id)}>Delete ninja</button>
                   </div>
                ): null;
            })
    )
}

export default Ninjas