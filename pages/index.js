import List from "../components/list/list";

const Index = () => {
    return (<>
           <h1>Hola</h1>
            <List cities={['Duitama','Sogamoso','Belen','Tibasosa','Cerinza']} name={'Daniel Lagos'} state={'boy'}/>
            <List cities={['Bogota','Chia','Barbosa']} name={'Kika Lazo'} state={'cun'}/>
            <List cities={['Medellin','Bello','Itagui','Envigado']} name={'Keku la(El hermano de kika)'} state={'anti'}/>
            <h1>Hola</h1>
       </>
    );
};

export default Index;