export default async function FetchTest() {
  const response = await fetch('https://localhost:3000/api/hello');
  const data = await response;

  return <h1>{data}</h1>
}