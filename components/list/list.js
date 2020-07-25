import styles from './list.module.css'
const defCities=['Duitama','Sogamoso','Belen','Cerinza']

const List =({cities = defCities ,name,state}) =>{//props

    const getCorrectState=() =>{
        switch (state) {
            case 'boy': return styles.boy;
            case 'cun': return styles.cun;
            case 'anti': return styles.anti;
            default: return '';
        }
    }

    return(<>
            <p>{name}</p>
           <ul className={getCorrectState()}>
               {
                   cities.map((city,index)=>{
                       return (
                           <li key={index}>{city}</li>
                       )
                   })
               }
           </ul>
        </>
    );
};
export default List;