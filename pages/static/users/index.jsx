
export default function index(props) {
  return (
    <div>
      <h1>User Page (SSG)</h1>
      {props.data.users.map((user, index) => (
            <li key={index}>{user.firstName}</li>
          ))}
    </div>
  )
}

export const getStaticProps = async () =>{
    const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
}