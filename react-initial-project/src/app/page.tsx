import { students } from "@/data/students";

const Page = () => {
  return (
    // Div -> Division
    <div className="bg-gradient-to-r from-rose-800 to-blue-950 flex ">
      <table>
        <thead>
          {/* Table Heading */}
          <tr>
            <th>Name</th>
              {/* Table Heading 2nd */}
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Media</th>
          </tr>
          {/* tr => Table Row */}
        </thead>
        <tbody>
          {/* Table Body */}
          {/* Another Table Row to each new student */}
          {students.map(
            (aluno) => 
            <tr>
              {/* Table Data -> which piece of information I want to show to every iteration */}
              <td>{aluno.name}</td>
              <td>{aluno.grade1}</td>
              <td>{aluno.grade2}</td>
              <td>{(aluno.grade1+aluno.grade2)/2}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Page;