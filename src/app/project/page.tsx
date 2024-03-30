
const Project = ({
  params,
  searchParams
}: {
  params: { item: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {

  console.log(params);
  console.log(searchParams);

  return (
    <div className="p-10 bg-slate-500">
      <h1 className="caret-red-600">Projeto</h1>
      <h1>{searchParams?.item || 'Hello!'}</h1>
    </div>
  );
};

export default Project;
