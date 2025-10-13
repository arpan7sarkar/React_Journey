import Section1 from "./components/section 1/Section1";
function App() {
  const users=[
    {
      img:"https://images.unsplash.com/photo-1712174766230-cb7304feaafe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW4lMjBwb3J0cmFpdHMlMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",info:"Prime customers, that have acces to bank credit and are satisfied with the current product",tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1670851604042-c56a9f5d179f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",info:"Prime customers, that have acces to bank credit and are satisfied with the current product",tag:"Satisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1684769160754-b699138271c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=700",info:"Prime customers, that have acces to bank credit and not satisfied with the current service",tag:"Underserved"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1686244745117-ab2d23749209?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",info:"Customers from near-prime and sub-prime segments with no access to bank credit",tag:"Underbanked"
    },
  ]
  return (
    <>
      <Section1 users={users}/>
    </>
  );
}

export default App;
