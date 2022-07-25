const job = (props) => {
  console.log(props.job);
  return (
    <div className="bg-red-600">
      hello
      {props?.job?.map((a, i) => {
        return <div key={i}>id: {a.id}</div>;
      })}
    </div>
  );
};

export default job;

export async function getServerSideProps(context) {
  const id = context.query.id;

  const res = await fetch(`http://localhost:3000/api/user/getjobbyid/${id}`);
  const job = await res.json();

  return { props: { job } };
}
