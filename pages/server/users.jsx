export const getServerSideProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};

export default function Users(props) {
  return (
    <div>
      <h1>Users (SSR)</h1>
      {props.data.users.map((user, index) => (
            <li key={index}>{user.firstName}</li>
          ))}
      
    </div>
  );
}
