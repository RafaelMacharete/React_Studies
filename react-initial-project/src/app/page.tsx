import { Person } from "@/components/Book";

const Page = () => {
  return (
    /*Não é HTML, é JSX*/
    <div className="flex flex-col items-center bg-blue-300">
      <h1 className="font-bold text-2lx">Olá mundo</h1>
      <h3>Alguma outra coisa escrita</h3>
      <input type="text" name="oi" id="" />


      <Person
        name='Bíblia Thompson'
        image='https://m.media-amazon.com/images/I/91WNE6OE3cL._AC_UF1000,1000_QL80_.jpg'
        details={['Capa Mole', '2050 Páginas', 'Espanhol']}
      />
      <Person
        name='Bíblia KJ'
        image='https://m.media-amazon.com/images/I/411L1N2Su9L._SX342_SY445_.jpg'
        details={['Capa Mole', '2144 Páginas', 'Português']}
        publicationDate={2023}
      />
      <Person
        name='Bíblia NVI'
        details={['Capa Dura', '992 Páginas', 'Português']}
        publicationDate={2023}
      />
    </div>


  );
}

export default Page;