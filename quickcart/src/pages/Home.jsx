const [search, setSearch] = useState("");

const filteredProducts = products.filter(p =>
  p.title.toLowerCase().includes(search.toLowerCase())
);
{filteredProducts.length === 0 && (
   <p>No products found</p>
)}