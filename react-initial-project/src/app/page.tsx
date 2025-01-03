import { Card } from "@/components/Card";

const Page = () => {
  return (
    /*Não é HTML, é JSX*/
    <div className="bg-slate-700">
      <h1 className="font-bold text-2lx">Olá mundo</h1>
      <h3>Alguma outra coisa escrita</h3>

      <Card phrase="30 para fazer 70" author="Macharete"/>
    </div>


  );
}

export default Page;