import BuyResidentialPage from "@/template/BuyResidentialPage";

async function BuyResidential({ searchParams }) {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error)
    return (
      <h3
        style={{
          backgroundColor: " rgba(219, 5, 5, 0.159)",
          color: " rgb(219, 5, 5)",
          fontSize: " 1.3rem",
          padding: "10px 15px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        « مشکلی پیش آمده است»
      </h3>
    );

  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter(
      (profile) => profile.category === searchParams.category
    );
  }

  return <BuyResidentialPage data={finalData} />;
}

export default BuyResidential;
