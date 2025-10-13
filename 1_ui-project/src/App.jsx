import Section1 from "./components/section 1/Section1";
function App() {
  const users=[
    {
      img:"https://images.unsplash.com/photo-1712174766230-cb7304feaafe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW4lMjBwb3J0cmFpdHMlMjBpbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",info:"Prime customers, that have acces to bank credit and are satisfied with the current product",tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1623095211984-10e4a9326bc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1004",info:"Prime customers, that have acces to bank credit and not satisfied with the current service",tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1623485101825-9436c5b246f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=700",info:"Customers from near-prime and sub-prime segments with no access to bank credit",tag:"Underbanked"
    },
  ]
  return (
    <>
      <Section1 />
    </>
  );
}

export default App;
