export default async function FetchTest() {
  const response = await fetch('http://localhost:3000/api/hello');
  const data = await response.json(); // ✅ Await JSON parsing

  console.log('response', data);

  return (<h1 className="text-4xl font-bold mb-8">{data.message}</h1>);
}
